import express from 'express';
const router = express.Router();
import {
	createTaekwondoStudentProfile,
	updateTaekwondoStudentProfile,
	deleteTaekwondoStudentProfile,
	viewTaekwondoStudentProfile,
	
} from '../controllers/taekwondoController.js';

router
	.route('/taekwondoStudentProfile')
	.post(createTaekwondoStudentProfile)
    .patch(updateTaekwondoStudentProfile)
    .delete(deleteTaekwondoStudentProfile)
    .get(viewTaekwondoStudentProfile);

export default router;
