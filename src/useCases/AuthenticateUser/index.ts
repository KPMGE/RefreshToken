import { RefreshTokenProvider } from "../../providers/implementations/RefreshTokenProvider";
import { TokenProvider } from "../../providers/implementations/TokenProvider";
import { PrismaRefreshTokenRepository } from "../../repositories/implementations/PrismaRefreshTokenRepository";
import { PrismaUsersRepository } from "../../repositories/implementations/PrismaUsersRepository";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

const usersRepository = new PrismaUsersRepository();
const refreshTokenRepository = new PrismaRefreshTokenRepository();

const refreshTokenProvider = new RefreshTokenProvider(refreshTokenRepository);
const tokenProvider = new TokenProvider();

const authenticateUserUseCase = new AuthenticateUserUseCase(
  usersRepository,
  tokenProvider,
  refreshTokenProvider
);

const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase
);

export { authenticateUserController };
