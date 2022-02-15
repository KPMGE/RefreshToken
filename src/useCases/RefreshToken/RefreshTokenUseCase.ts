import { IRefreshTokenProvider } from "../../providers/IRefreshTokenProvider";
import { ITokenProvider } from "../../providers/ITokenProvider";
import { IRefreshTokenRepository } from "../../repositories/IRefreshTokenRepository";

export class RefreshTokenUseCase {
  constructor(
    private refreshTokenRepository: IRefreshTokenRepository,
    private tokenProvider: ITokenProvider,
    private refreshTokenProvider: IRefreshTokenProvider
  ) {}

  async execute(refreshTokenId: string) {
    const refreshToken = await this.refreshTokenRepository.findById(
      refreshTokenId
    );

    if (!refreshToken) {
      throw new Error("Invalid refresh token!");
    }

    const token = this.tokenProvider.generate(refreshToken.user_id);
    const isRefreshTokenExpired = this.refreshTokenProvider.isExpired(
      refreshToken.expires_in
    );

    if (isRefreshTokenExpired) {
      await this.refreshTokenRepository.deleteMany(refreshToken.user_id);

      const newToken = this.tokenProvider.generate(refreshToken.user_id);
      const newRefreshToken = await this.refreshTokenProvider.generate(
        refreshToken.user_id
      );

      return { token: newToken, refreshToken: newRefreshToken };
    }

    return { token };
  }
}
