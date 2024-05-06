// src/routes/profileRoutes.ts

import express from 'express';
import { createProfile } from '../controllers/profileController';

const router = express.Router();

/**
 * @openapi
 * /api/profile:
 *   post:
 *     summary: Create a new profile
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Profile'
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 *       '500':
 *         description: Internal Server Error
 */

router.post('/profile', createProfile);
// Add other routes for CRUD operations similarly

export default router;
