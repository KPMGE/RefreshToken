import { Router } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { authenticateUserController } from "./useCases/AuthenticateUser";
import { createUserController } from "./useCases/CreateUser";
import { deleteUserController } from "./useCases/DeleteUser";
import { getAllUsersController } from "./useCases/GetAllUsers";
import { getUserByIdController } from "./useCases/GetUserById";
import { refreshTokenController } from "./useCases/RefreshToken";

const routes = Router();

routes.post("/login", (request, response) => {
  authenticateUserController.handle(request, response);
});

routes.get("/users/:user_id", ensureAuthenticated, (request, response) => {
  getUserByIdController.handle(request, response);
});

routes.get("/users", ensureAuthenticated, (request, response) => {
  getAllUsersController.handle(request, response);
});

routes.post("/users/new", (request, response) => {
  createUserController.handle(request, response);
});

routes.post("/users/refresh-token", (request, response) => {
  refreshTokenController.handle(request, response);
});

routes.delete("/users/delete/:userId", (request, response) => {
  deleteUserController.handle(request, response);
});

export { routes };
