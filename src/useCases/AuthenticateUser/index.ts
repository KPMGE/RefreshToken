import { GenerateRefreshTokenProvider } from "../../providers/GenerateRefreshTokenProvider";
import { PrismaRefreshTokenRepository } from "../../repositories/implementations/PrismaRefreshTokenRepository";
import { PrismaUsersRepository } from "../../repositories/implementations/PrismaUsersRepository";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

const usersRepository = new PrismaUsersRepository();
const refreshTokenRepository = new PrismaRefreshTokenRepository();

const generateRefreshTokenProvider = new GenerateRefreshTokenProvider(
  refreshTokenRepository
);
const authenticateUserUseCase = new AuthenticateUserUseCase(
  usersRepository,
  generateRefreshTokenProvider
);

const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase
);

export { authenticateUserController };
