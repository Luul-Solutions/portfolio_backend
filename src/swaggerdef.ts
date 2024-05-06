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
  },
  apis: ["./src/routes/*.ts"], // Path to the files containing your API routes
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
