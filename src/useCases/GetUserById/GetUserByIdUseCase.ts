import { IUsersRepositoty } from "../../repositories/IUsersRepository";

export class GetUserByIdUseCase {
  constructor(private usersRepository: IUsersRepositoty) {}

  async execute(user_id: string) {
    const foundUser = await this.usersRepository.findUserById(user_id);

    return foundUser;
  }
}
