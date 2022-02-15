import { hash } from "bcryptjs";
import { User } from "../../entities/User";
import { IUsersRepositoty } from "../../repositories/IUsersRepository";
import { IUpdateUserRequestDTO } from "./UpdateUserDTO";

export class UpdateUserUseCase {
  constructor(private usersRepository: IUsersRepositoty) {}

  async execute({ password, name, user_name, id }: IUpdateUserRequestDTO) {
    // check to see if the user exists
    const foundUser = await this.usersRepository.findUserById(id);
    if (!foundUser) {
      throw new Error("User not found!");
    }

    // if user_name is passed, check to see if there's already some user with the same username,
    // if so, then throw and error
    if (user_name) {
      const userWithSameUserNameExists =
        await this.usersRepository.findUserByUserName(user_name);

      if (userWithSameUserNameExists) {
        throw new Error("A user with the same username already exists!");
      }
    }

    // create a new user with the same id, but different properties
    const passwordHash = await hash(password, 8);
    const newUser = new User({ name, password: passwordHash, user_name }, id);

    const updatedUser = await this.usersRepository.update(newUser);

    return updatedUser;
  }
}
