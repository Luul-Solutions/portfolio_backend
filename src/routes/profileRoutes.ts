// src/routes/profileRoutes.ts

import express, { Request, Response, NextFunction } from 'express'; // Import NextFunction from express

import { createProfile, getProfiles, updateProfile, deleteProfile } from '../controllers/profileController';
import jwt, { JwtPayload } from "jsonwebtoken";
const router = express.Router();


declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload; // Define user property on Request object
    }
  }
}

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).send("Access denied. Token is not provided.");
  }

  try {
    const decoded = jwt.verify(token, "your_secret_key");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).send("Invalid token.");
  }
};

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
router.post("/profile", verifyToken, createProfile);
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
router.get("/profile", verifyToken, getProfiles);

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
router.put('/profile/:id', updateProfile);

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
router.delete('/profile/:id', deleteProfile);

export default router;
