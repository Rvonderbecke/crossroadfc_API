import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../errors/index.js';

const register = async (req, res) => {
	const { lName, fName, password, email, zipCode } = req.body;

	const foundEmail = await User.findOne({ email });
	if (foundEmail) {
		throw new BadRequestError('Email is already registered!');
	}
	if (!lName || !fName || !password || !email || !zipCode) {
		throw new BadRequestError('please provide all values');
	}
	const user = await User.create(req.body);
	user.createJWT();
	res.status(StatusCodes.OK).json({ user });
};
const login = async (req, res) => {
	res.send('Login user');
};
const updateUser = async (req, res) => {
	res.send('Update user');
	user.save()// to trigger middlewear
};

export { register, login, updateUser };
