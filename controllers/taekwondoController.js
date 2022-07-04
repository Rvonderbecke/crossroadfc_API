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
	res.send('Student PRofile');
};

export {
	createTaekwondoStudentProfile,
	updateTaekwondoStudentProfile,
	deleteTaekwondoStudentProfile,
	viewTaekwondoStudentProfile,
};
