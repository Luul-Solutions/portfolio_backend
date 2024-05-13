// src/routes/profileRoutes.ts

import express, { Request, Response, NextFunction } from "express"; // Import NextFunction from express

import {
  createProfile,
  getProfiles,
  updateProfile,
  deleteProfile,
  getProfileById,
} from "../controllers/profileController";
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
router.post("/api/profile", createProfile);
/**
 * @openapi
 * /api/profile:
 *   get:
 *     summary: Get all profiles
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Profile'
 *       '500':
 *         description: Internal Server Error
 */
router.get("/api/profile", getProfiles);

/**
 * @openapi
 * /api/profile/{id}:
 *   put:
 *     summary: Update a profile by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the profile to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Profile'
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 *       '500':
 *         description: Internal Server Error
 */
router.put("/api/profile/:id", updateProfile);

/**
 * @openapi
 * /api/profile/{id}:
 *   delete:
 *     summary: Delete a profile by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the profile to delete
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: No Content
 *       '500':
 *         description: Internal Server Error
 */
router.delete("/api/profile/:id", deleteProfile);

/**
 * @openapi
 * /api/profile/{id}:
 *   get:
 *     summary: Get a profile by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the profile to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 *       '404':
 *         description: Profile not found
 *       '500':
 *         description: Internal Server Error
 */
router.get("/api/profile/:id", getProfileById);

export default router;
