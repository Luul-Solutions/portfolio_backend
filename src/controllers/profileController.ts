import { Request, Response } from "express";
import { Profile } from "../models/Profile";

export const createProfile = async (req: Request, res: Response) => {
  try {
    const profile = await Profile.create(req.body);
    res.status(201).send(profile);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("Unknown error");
    }
  }
};

export const getProfiles = async (req: Request, res: Response) => {
  try {
    const profiles = await Profile.findAll();
    res.send(profiles);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("Unknown error");
    }
  }
};

export const getProfileById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const profile = await Profile.findOne({ where: { id } });
    if (!profile) {
      return res.status(404).send("Profile not found");
    }
    res.send(profile);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("Unknown error");
    }
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const [updated] = await Profile.update(req.body, { where: { id } });
    if (updated) {
      const updatedProfile = await Profile.findOne({ where: { id } });
      res.status(200).send(updatedProfile);
    } else {
      throw new Error("Profile not found");
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("Profile not found");
    }
  }
};

export const deleteProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await Profile.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send("Profile deleted");
    } else {
      throw new Error("Profile not found");
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("Profile not found");
    }
  }
};
