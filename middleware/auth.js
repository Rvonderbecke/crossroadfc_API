import { UnAuthenticatedError } from '../errors/index.js';

const auth = async (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (!authHeader || !authHeader.startsWith('Bearer')) {
		throw new UnAuthenticatedError('Authentication Invalid');
	}
	const token = authHeader.split(' ')[1];
	try {
		const payload = jwt.verify(token, process.env.JSON_TOKEN);
		console.log(payload.userId)
		req.user = { userId: payload.userId };
		next();
	} catch (err) {
		throw new UnAuthenticatedError('Authentication Invalid');
	}
};
export default auth;
