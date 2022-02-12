import { v4 as uuid } from "uuid";

export class User {
  public readonly id: string;
  public name: string;
  public user_name: string;
  public password: string;

  constructor(user: Omit<User, "id">, id?: string) {
    Object.assign(this, user);

    if (!id) {
      this.id = uuid();
    }
  }
}
