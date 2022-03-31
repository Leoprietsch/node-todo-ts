import express from "express";
import morgan from "morgan";
import cors from "cors";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(cors);
app.use(morgan("dev"));

app.use(router);

const server = app.listen(process.env.PORT, () => {
  console.log(
    `${process.env.PROJECT_NAME} running at http://localhost:${process.env.PORT}`
  );
});

process.on("SIGINT", () => {
  server.close();
  console.log(`${process.env.PROJECT_NAME} is shuting down...`);
});
