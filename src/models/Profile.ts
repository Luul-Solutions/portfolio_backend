// src/models/Profile.ts
import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const Profile = sequelize.define(
  "Profile",
  {
    name: DataTypes.STRING,
    bio: DataTypes.TEXT,
    location: DataTypes.STRING,
    nationality: DataTypes.STRING,
    availability: DataTypes.BOOLEAN,
    dateOfBirth: DataTypes.DATEONLY, // Changed to DATEONLY for storing only dates
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    github: DataTypes.STRING,
    twitter: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    expectedSalary: DataTypes.DOUBLE,
    ownACar: DataTypes.BOOLEAN,
    haveDrivingLicense: DataTypes.BOOLEAN,
    noticePeriod: DataTypes.INTEGER,
    immigrationStatus: DataTypes.STRING,
    referees: DataTypes.TEXT, // Store as JSON or a string list
    willingToRelocate: DataTypes.BOOLEAN,
    languages: DataTypes.TEXT, // JSON or CSV
    skills: DataTypes.TEXT, // JSON or CSV
  },
  {
    timestamps: true,
  }
);