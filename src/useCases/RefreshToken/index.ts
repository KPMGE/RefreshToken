import { RefreshTokenProvider } from "../../providers/implementations/RefreshTokenProvider";
import { TokenProvider } from "../../providers/implementations/TokenProvider";
import { PrismaRefreshTokenRepository } from "../../repositories/implementations/PrismaRefreshTokenRepository";
import { RefreshTokenController } from "./RefreshTokenController";
import { RefreshTokenUseCase } from "./RefreshTokenUseCase";

const refreshTokenRepository = new PrismaRefreshTokenRepository();

const tokenProvider = new TokenProvider();
const refreshTokenProvider = new RefreshTokenProvider(refreshTokenRepository);

const refreshTokenUseCase = new RefreshTokenUseCase(
  refreshTokenRepository,
  tokenProvider,
  refreshTokenProvider
);
const refreshTokenController = new RefreshTokenController(refreshTokenUseCase);

export { refreshTokenController };
