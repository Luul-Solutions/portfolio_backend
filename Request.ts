// custom.d.ts

import { Request } from "express";

declare module "express" {
  interface Request {
    user?: any; // Adjust 'any' to the actual type of 'user' if known
  }
}
