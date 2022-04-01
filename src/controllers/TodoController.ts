import { Request, Response } from "express";
import { TodoModel } from "../database/models/TodoModel";

class TodoController {
  async findAll(req: Request, res: Response) {
    const todos = await TodoModel.findAll();

    return todos ? res.status(200).json(todos) : res.sendStatus(204);
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;

    const todo = await TodoModel.findOne({ where: { id: id } });

    return todo ? res.status(200).json(todo) : res.sendStatus(204);
  }

  async create(req: Request, res: Response) {
    const { text, priority } = req.body;
    const todo = await TodoModel.create({
      text,
      priority,
    });

    return res.status(201).json(todo);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;

    const success = await TodoModel.update(req.body, { where: { id: id } });

    return success ? res.sendStatus(204) : res.sendStatus(404);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const success = await TodoModel.destroy({ where: { id: id } });

    return success ? res.sendStatus(204) : res.sendStatus(404);
  }
}

export default new TodoController();
