import { IRefreshTokenRepository } from "../../repositories/IRefreshTokenRepository";
import { IUsersRepositoty } from "../../repositories/IUsersRepository";

export class DeleteUserUseCase {
  constructor(
    private usersRepository: IUsersRepositoty,
    private refreshTokenRepository: IRefreshTokenRepository
  ) {}

  async execute(userId: string) {
    const foundUser = await this.usersRepository.findUserById(userId);

    if (!foundUser) {
      throw new Error("Invalid user!");
    }

    await this.refreshTokenRepository.deleteMany(userId);
    const deletedUser = await this.usersRepository.delete(userId);

    return deletedUser;
  }
}
