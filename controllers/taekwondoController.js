import User from "../models/User.js";
import { StatusCodes } from 'http-status-codes';


const createTaekwondoStudentProfile = async (req, res) => {
	
	res.json({msg: 'You have connected to make user route'})
};
const updateTaekwondoStudentProfile = async (req, res) => {
	res.send('update student profile');
};
const deleteTaekwondoStudentProfile = async (req, res) => {
	res.send('delete taekwondo student profile');
};
const viewTaekwondoStudentProfile = async (req, res) => {
	const { userId } = req.body;
	//Model.findOne(query, option)
	const options = {
		sort: {previousTestScores: -1},
		projection: {}
	}
	const data = await User.findOne(userId)
	res.json(data);
};

export {
	createTaekwondoStudentProfile,
	updateTaekwondoStudentProfile,
	deleteTaekwondoStudentProfile,
	viewTaekwondoStudentProfile,
	
};
