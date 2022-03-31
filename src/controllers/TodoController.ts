import { Request, Response } from "express";

class TodoController {
  async findAll(req: Request, res: Response) {}

  async findById(req: Request, res: Response) {}

  async create(req: Request, res: Response) {}

  async update(req: Request, res: Response) {}

  async delete(req: Request, res: Response) {}
}

export default new TodoController();
