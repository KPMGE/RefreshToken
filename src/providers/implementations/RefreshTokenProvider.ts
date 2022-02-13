import dayjs from "dayjs";
import { RefreshToken } from "../../entities/RefreshToken";
import { IRefreshTokenRepository } from "../../repositories/IRefreshTokenRepository";
import { IRefreshTokenProvider } from "../IRefreshTokenProvider";

export class RefreshTokenProvider implements IRefreshTokenProvider {
  constructor(private refreshTokenRepository: IRefreshTokenRepository) {}

  async generate(user_id: string): Promise<RefreshToken> {
    const expires_in = dayjs().add(1, "minute").unix();

    const newRefreshToken = new RefreshToken({ user_id, expires_in });
    await this.refreshTokenRepository.save(newRefreshToken);

    return newRefreshToken;
  }

  isExpired(expiresIn: number): boolean {
    const expired = dayjs().isAfter(dayjs.unix(expiresIn));
    return expired;
  }
}
