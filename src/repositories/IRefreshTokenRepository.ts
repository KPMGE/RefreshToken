import { RefreshToken } from "@prisma/client";

export interface IRefreshTokenRepository {
  save(refreshToken: RefreshToken): Promise<RefreshToken>;
  findById(refreshTokenId: string): Promise<RefreshToken>;
}
