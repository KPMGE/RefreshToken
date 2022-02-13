import { Request, Response } from "express";
import { RefreshTokenUseCase } from "./RefreshTokenUseCase";

export class RefreshTokenController {
  constructor(private refreshTokenUseCase: RefreshTokenUseCase) {}

  async handle(request: Request, response: Response) {
    const { refreshTokenId } = request.body;

    try {
      const refreshToken = await this.refreshTokenUseCase.execute(
        refreshTokenId
      );
      return response.json(refreshToken);
    } catch (error) {
      return response.status(401).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
