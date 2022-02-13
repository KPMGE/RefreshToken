import { Router } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { authenticateUserController } from "./useCases/AuthenticateUser";
import { createUserController } from "./useCases/CreateUser";
import { refreshTokenController } from "./useCases/RefreshToken";

const routes = Router();

routes.post("/login", (request, response) => {
  authenticateUserController.handle(request, response);
});

routes.post("/users/new", (request, response) => {
  createUserController.handle(request, response);
});

routes.post("/users/refresh-token", (request, response) => {
  refreshTokenController.handle(request, response);
});

routes.get("/test", ensureAuthenticated, (req, res) => {
  return res.json(["Kevin", "Luana", "Karol", "Laura"]);
});

export { routes };
