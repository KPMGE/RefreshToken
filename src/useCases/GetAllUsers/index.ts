import { PrismaUsersRepository } from "../../repositories/implementations/PrismaUsersRepository";
import { GetAllUsersController } from "./GetAllUsersController";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";

const usersRepository = new PrismaUsersRepository();
const getAllUsersUseCase = new GetAllUsersUseCase(usersRepository);
const getAllUsersController = new GetAllUsersController(getAllUsersUseCase);

export { getAllUsersController };
