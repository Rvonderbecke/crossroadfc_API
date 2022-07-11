import express from 'express';
const router = express.Router();

import { createTapes } from '../controllers/adminController.js';

router
    .route('/admin')
    .post(createTapes);

export default router; 
