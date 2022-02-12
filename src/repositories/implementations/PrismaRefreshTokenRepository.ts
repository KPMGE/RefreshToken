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
}