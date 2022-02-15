import { PrismaRefreshTokenRepository } from "../../repositories/implementations/PrismaRefreshTokenRepository";
import { PrismaUsersRepository } from "../../repositories/implementations/PrismaUsersRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

const usersRepository = new PrismaUsersRepository();
const refreshTokenRepository = new PrismaRefreshTokenRepository();
const deleteUserUseCase = new DeleteUserUseCase(
  usersRepository,
  refreshTokenRepository
);
const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserController };
