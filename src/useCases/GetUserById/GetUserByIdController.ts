import { Request, Response } from "express";
import { GetUserByIdUseCase } from "./GetUserByIdUseCase";

export class GetUserByIdController {
  constructor(private getUsersUseCase: GetUserByIdUseCase) {}

  async handle(request: Request, response: Response) {
    const { user_id } = request.params;

    try {
      const user = await this.getUsersUseCase.execute(user_id);
      return response.json(user);
    } catch (error) {
      return response.json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
