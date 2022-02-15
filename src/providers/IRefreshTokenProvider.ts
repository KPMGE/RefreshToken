import { RefreshToken } from "../entities/RefreshToken";

export interface IRefreshTokenProvider {
  generate(user_id: string): Promise<RefreshToken>;
  isExpired(expiresIn: number): boolean;
}
