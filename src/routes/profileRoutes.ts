// src/routes/profileRoutes.ts

import express from 'express';
import { createProfile } from '../controllers/profileController';

const router = express.Router();

router.post('/profile', createProfile);
// Add other routes for CRUD operations similarly

export default router;
