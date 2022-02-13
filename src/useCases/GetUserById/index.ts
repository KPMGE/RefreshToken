import { PrismaUsersRepository } from "../../repositories/implementations/PrismaUsersRepository";
import { GetUserByIdController } from "./GetUserByIdController";
import { GetUserByIdUseCase } from "./GetUserByIdUseCase";

const usersRepository = new PrismaUsersRepository();
const getUsersUseCase = new GetUserByIdUseCase(usersRepository);
const getUserByIdController = new GetUserByIdController(getUsersUseCase);

export { getUserByIdController };
