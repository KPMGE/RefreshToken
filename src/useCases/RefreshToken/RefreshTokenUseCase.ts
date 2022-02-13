import { GenerateTokenProvider } from "../../providers/GenerateTokenProvider";
import { IRefreshTokenRepository } from "../../repositories/IRefreshTokenRepository";

export class RefreshTokenUseCase {
  constructor(
    private refreshTokenRepository: IRefreshTokenRepository,
    private generateTokenProvider: GenerateTokenProvider
  ) {}

  async execute(refreshTokenId: string): Promise<string> {
    const refreshToken = await this.refreshTokenRepository.findById(
      refreshTokenId
    );

    if (!refreshToken) {
      throw new Error("Invalid refresh token!");
    }

    const token = this.generateTokenProvider.execute(refreshToken.user_id);
    return token;
  }
}
