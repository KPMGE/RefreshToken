import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response) {
    const { name, user_name, password } = request.body;

    try {
      const createdUser = await this.createUserUseCase.execute({
        name,
        user_name,
        password,
      });

      return response.json(createdUser);
    } catch (error) {
      response.json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
