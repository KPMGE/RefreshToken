import { v4 as uuid } from "uuid";

export class RefreshToken {
  public readonly id: string;
  public expires_in: number;
  public user_id: string;

  constructor(refreshToken: Omit<RefreshToken, "id">) {
    Object.assign(this, refreshToken);
    this.id = uuid();
  }
}
