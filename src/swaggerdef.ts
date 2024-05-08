import swaggerJSDoc, { Options } from "swagger-jsdoc";

const options: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Profile API",
      version: "1.0.0",
      description: "APIs for managing profiles",
    },
    servers: [
      {
        url: "http://localhost:3000", // Change this to your server URL
        description: "Development server",
      },
    ],
    components: {
      schemas: {
        Profile: {
          type: "object",
          properties: {
            name: { type: "string" },
            bio: { type: "string" },
            location: { type: "string" },
            nationality: { type: "string" },
            availability: { type: "boolean" },
            dateOfBirth: { type: "string", format: "date" }, // Assuming you want it in date format
            email: { type: "string", format: "email" }, // Assuming email format
            phone: { type: "string" },
            address: { type: "string" },
            github: { type: "string" },
            twitter: { type: "string" },
            linkedin: { type: "string" },
            expectedSalary: { type: "number" },
            ownACar: { type: "boolean" },
            haveDrivingLicense: { type: "boolean" },
            noticePeriod: { type: "integer" },
            immigrationStatus: { type: "string" },
            referees: { type: "string" }, // This can be an array or object depending on your data structure
            willingToRelocate: { type: "boolean" },
            languages: { type: "string" }, // This can be an array or object depending on your data structure
            skills: { type: "string" }, // This can be an array or object depending on your data structure
          },
          required: ["name"], // Specify required properties
        },
      },
    },
  },
  apis: ["./src/routes/*.ts"], // Path to the files containing your API routes
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
