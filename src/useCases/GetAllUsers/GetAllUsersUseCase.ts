import { User } from "@prisma/client";
import { IUsersRepositoty } from "../../repositories/IUsersRepository";

export class GetAllUsersUseCase {
  constructor(private usersRepository: IUsersRepositoty) {}

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.getAllUsers();
    return users;
  }
}
