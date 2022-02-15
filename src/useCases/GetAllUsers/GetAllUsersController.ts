import { Request, Response } from "express";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";

export class GetAllUsersController {
  constructor(private getAllUsersUseCase: GetAllUsersUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const users = await this.getAllUsersUseCase.execute();
      return response.json(users);
    } catch (error) {
      return response.status(404).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
