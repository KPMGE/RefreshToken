import { GenerateTokenProvider } from "../../providers/GenerateTokenProvider";
import { PrismaRefreshTokenRepository } from "../../repositories/implementations/PrismaRefreshTokenRepository";
import { RefreshTokenController } from "./RefreshTokenController";
import { RefreshTokenUseCase } from "./RefreshTokenUseCase";

const refreshTokenRepository = new PrismaRefreshTokenRepository();
const generateTokenProvider = new GenerateTokenProvider();
const refreshTokenUseCase = new RefreshTokenUseCase(
  refreshTokenRepository,
  generateTokenProvider
);
const refreshTokenController = new RefreshTokenController(refreshTokenUseCase);

export { refreshTokenController };
