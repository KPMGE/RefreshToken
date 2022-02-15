import { User } from "../entities/User";

export interface IUsersRepositoty {
  save(user: User): Promise<User>;
  findUserById(id: string): Promise<User>;
  findUserByUserName(user_name: string): Promise<User>;
  getAllUsers(): Promise<User[]>;
  delete(userId: string): Promise<User>;
  update(user: User): Promise<User>;
}
