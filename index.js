import express from "express";
import winston from "winston";
import { swaggerUi, specs } from "./doc.js";

const app = express();
const port = 3000;

const logger = winston.createLogger({
  level: "info",
  format: winston.format.simple(),
  transports: [new winston.transports.Console()],
});

// Rota para a documentação
app.use("/doc", swaggerUi.serve, swaggerUi.setup(specs));

// Rota principal 
app.get("/", (req, res) => {
  res.send("Servidor web simples");
});

app.listen(port, () => {
  logger.info(`Servidor iniciado na porta ${port}`);
});
