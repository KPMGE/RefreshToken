import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}

  async handle(request: Request, response: Response) {
    const { user_name, password } = request.body;

    try {
      const token = await this.authenticateUserUseCase.execute({
        user_name,
        password,
      });

      return response.json({ token });
    } catch (error) {
      return response.status(401).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
