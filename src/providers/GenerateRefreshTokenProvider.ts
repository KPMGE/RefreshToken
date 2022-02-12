import dayjs from "dayjs";
import { RefreshToken } from "../entities/RefreshToken";
import { IRefreshTokenRepository } from "../repositories/IRefreshTokenRepository";

export class GenerateRefreshTokenProvider {
  constructor(private refreshTokenRepository: IRefreshTokenRepository) {}

  async execute(user_id: string) {
    const expires_in = dayjs().add(15, "second").unix();

    const newRefreshToken = new RefreshToken({ user_id, expires_in });

    await this.refreshTokenRepository.save(newRefreshToken);

    return newRefreshToken;
  }
}
