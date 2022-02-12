import { hash } from "bcryptjs";
import { User } from "../../entities/User";
import { IUsersRepositoty } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepositoty) {}

  async execute({ name, password, user_name }: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findUserByUserName(
      user_name
    );

    if (userAlreadyExists) {
      throw new Error("User Already exists!");
    }

    const passwordHash = await hash(password, 8);
    const newUser = new User({ name, password: passwordHash, user_name });

    const savedUser = await this.usersRepository.save(newUser);

    return savedUser;
  }
}
