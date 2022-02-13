import { RefreshToken } from "@prisma/client";
import { IRefreshTokenRepository } from "../IRefreshTokenRepository";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export class PrismaRefreshTokenRepository implements IRefreshTokenRepository {
  async save({ id, user_id, expires_in }: RefreshToken): Promise<RefreshToken> {
    const savedRefreshToken = await client.refreshToken.create({
      data: {
        id,
        user_id,
        expires_in,
      },
    });

    return savedRefreshToken;
  }

  async findById(refreshTokenId: string): Promise<RefreshToken> {
    const foundRefreshToken = await client.refreshToken.findFirst({
      where: {
        id: refreshTokenId,
      },
    });

    return foundRefreshToken;
  }

  async deleteMany(refreshTokenId: string): Promise<void> {
    await client.refreshToken.deleteMany({
      where: {
        user_id: refreshTokenId,
      },
    });
  }
}
