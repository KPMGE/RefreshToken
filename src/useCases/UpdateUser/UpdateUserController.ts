import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(request: Request, response: Response) {
    const { id, name, user_name, password } = request.body;

    try {
      const updated = await this.updateUserUseCase.execute({
        id,
        name,
        user_name,
        password,
      });

      return response.json({
        updated,
      });
    } catch (error) {
      return response.status(404).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
