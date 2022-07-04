const createProject = async (req, res) => {
	res.send('create Project');
};
const updateProject = async (req, res) => {
	res.send('updateProject');
};
const deleteProject = async (req, res) => {
	res.send('deleteProject');
};
const joinProject = async (req, res) => {
	res.send('joinProject');
};
const donateToProject = async (req, res) => {
	res.send('donateToProject');
};
const viewProject = async (req, res) => {
	res.send('viewProject');
};
const allProjects = async (req, res) => {
	res.send('viewProject');
};

export {
	allProjects,
	createProject,
	updateProject,
	deleteProject,
	joinProject,
	donateToProject,
	viewProject,
};
