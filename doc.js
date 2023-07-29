import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerDocument = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Simples",
      version: "1.0.0",
      description:
        "Uma API criada com Express.js e usando o Winston para logs.",
    },
  },
  host: "localhost:3000",
  apis: ["./web.server.js"],
};

const specs = swaggerJSDoc(swaggerDocument);

export { swaggerUi, specs };
