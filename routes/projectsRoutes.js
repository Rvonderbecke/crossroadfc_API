import express from 'express';
const router = express.Router();

import { allProjects, createProject, updateProject, deleteProject, joinProject, donateToProject, viewProject } from '../controllers/projectsController.js';

router.route('/createProject').post(createProject).get(allProjects);
router.route('/updateProject').patch(updateProject);
router.route('/deleteProject').delete(deleteProject);
router.route('/joinProject').post(joinProject);
router.route('/donateToProject').post(donateToProject);
router.route('/viewProject/:id').get(viewProject);

export default router;