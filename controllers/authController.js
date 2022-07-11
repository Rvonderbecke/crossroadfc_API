import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js';

const register = async (req, res) => {
	const { lName, fName, password, email, zipCode, admin } = req.body;
	const foundEmail = await User.findOne({ email });
	if (!lName || !fName || !password || !email || !zipCode) {
		throw new BadRequestError('please provide all values');
	}
	if (foundEmail) {
		throw new BadRequestError('Email is already registered!');
	}
	const user = await User.create(req.body);
	const token = user.createJWT();
	res.status(StatusCodes.OK).json({
		user: { email: user.email, fName: user.fName, zipCode: user.zipCode, userId: user._id, fullName: user.fullName, admin: user.admin },
		token,
		zipCode: user.zipCode,
		
	});
};
const login = async (req, res) => {
	const { email, password, zipCode } = req.body;
	if (!email || !password) {
		throw new BadRequestError('please provide all values');
	}
	const user = await User.findOne({ email }).select('+password');
	if (!user) {
		throw new UnAuthenticatedError('Invalid Credentials');
	}
	const isPassword = await user.comparePassword(password);
	if (!isPassword) {
		throw new UnAuthenticatedError('Invalid Credentials');
	}

	const token = user.createJWT();
	user.password = undefined;
	res.status(StatusCodes.OK).json({ user, token, zipCode });
};
const updateUser = async (req, res) => {
	const { email, lName, fName, zipCode } = req.body;
	if (!email) {
		throw new BadRequestError('Please provide all values')
	}
	const user = await User.findOneAndUpdate({ email: email }, {
		email,lName,fName,zipCode
	}, {returnNewDocument: true})
	

	const token = user.createJWT()
	res.status(StatusCodes.OK).json({ user, token, zipCode });
};

export { register, login, updateUser };
