import { compare } from "bcryptjs";
import { IRefreshTokenProvider } from "../../providers/IRefreshTokenProvider";
import { ITokenProvider } from "../../providers/ITokenProvider";
import { IUsersRepositoty } from "../../repositories/IUsersRepository";
import { IAuthenticateUserRequestDTO } from "./AuthenticateUserDTO";

export class AuthenticateUserUseCase {
  constructor(
    private usersRepository: IUsersRepositoty,
    private tokenProvider: ITokenProvider,
    private refreshTokenProvider: IRefreshTokenProvider
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

    const token = this.tokenProvider.generate(user.id);
    const refreshToken = await this.refreshTokenProvider.generate(user.id);

    return { token, refreshToken };
  }
}
