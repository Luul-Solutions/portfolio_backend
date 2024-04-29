// src/app.ts

import express from 'express';
import profileRoutes from './routes/profileRoutes';

const app = express();

app.use(express.json());

app.use(profileRoutes);
// Add other route middlewares similarly

export default app;
