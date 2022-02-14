import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  async handle(request: Request, response: Response) {
    const { userId } = request.params;

    try {
      const deletedUser = await this.deleteUserUseCase.execute(userId);
      return response.json({ deletedUser });
    } catch (error) {
      return response.json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
