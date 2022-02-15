import { PrismaUsersRepository } from "../../repositories/implementations/PrismaUsersRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

const usersRepository = new PrismaUsersRepository();
const updateUserUseCase = new UpdateUserUseCase(usersRepository);
const updateUserController = new UpdateUserController(updateUserUseCase);

export { updateUserController };
