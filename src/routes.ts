import express from "express";
import TodoController from "./controllers/TodoController";

const router = express.Router();

router.get("/todos", TodoController.findAll);
router.get("/todo/:id", TodoController.findById);
router.post("/todo", TodoController.create);
router.put("/todo/:id", TodoController.update);
router.delete("/todo/:id", TodoController.delete);

export { router };
