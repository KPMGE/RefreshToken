import { compare } from "bcryptjs";
import { GenerateRefreshTokenProvider } from "../../providers/GenerateRefreshTokenProvider";
import { GenerateTokenProvider } from "../../providers/GenerateTokenProvider";
import { IUsersRepositoty } from "../../repositories/IUsersRepository";
import { IAuthenticateUserRequestDTO } from "./AuthenticateUserDTO";

export class AuthenticateUserUseCase {
  constructor(
    private usersRepository: IUsersRepositoty,
    private generateRefreshTokenProvider: GenerateRefreshTokenProvider
  ) {}

  async execute({ password, user_name }: IAuthenticateUserRequestDTO) {
    const user = await this.usersRepository.findUserByUserName(user_name);

    if (!user) {
      throw new Error("Wrong user or password!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Wrong user or password!");
    }

    const token = new GenerateTokenProvider().execute(user.id);
    const refreshToken = await this.generateRefreshTokenProvider.execute(
      user.id
    );

    return { token, refreshToken };
  }
}
