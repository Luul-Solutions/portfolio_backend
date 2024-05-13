// src/app.ts

import express from "express";
import profileRoutes from "./routes/profileRoutes";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerSpec from "./swaggerdef";

const app = express();
const cors = require("cors");

app.use(express.json());

app.use(cors());

app.use(profileRoutes);
// Add other route middlewares similarly

app.use(express.urlencoded({ extended: true }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
