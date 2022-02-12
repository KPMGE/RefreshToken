import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { IUsersRepositoty } from "../../repositories/IUsersRepository";
import { IAuthenticateUserRequestDTO } from "./AuthenticateUserDTO";

export class AuthenticateUserUseCase {
  constructor(private usersRepository: IUsersRepositoty) {}

  async execute({
    password,
    user_name,
  }: IAuthenticateUserRequestDTO): Promise<string> {
    const user = await this.usersRepository.findUserByUserName(user_name);

    if (!user) {
      throw new Error("Wrong user or password!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Wrong user or password!");
    }

    const token = sign({}, "secret key", {
      subject: user.id,
      expiresIn: "20s",
    });

    return token;
  }
}
