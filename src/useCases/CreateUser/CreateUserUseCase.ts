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

    const newUser = new User({ name, password, user_name });
    const savedUser = await this.usersRepository.save(newUser);

    return savedUser;
  }
}
