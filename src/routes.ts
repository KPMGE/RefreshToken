import { Router } from "express";
import { authenticateUserController } from "./useCases/AuthenticateUser";
import { createUserController } from "./useCases/CreateUser";

const routes = Router();

routes.post("/login", (request, response) => {
  authenticateUserController.handle(request, response);
});

routes.post("/users/new", (request, response) => {
  createUserController.handle(request, response);
});

export { routes };
