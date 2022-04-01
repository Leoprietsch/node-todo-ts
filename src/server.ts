import express from "express";
import morgan from "morgan";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use(router);

app.listen(process.env.PORT, () => {
  console.log(
    `${process.env.PROJECT_NAME} running at http://localhost:${process.env.PORT}`
  );
});
