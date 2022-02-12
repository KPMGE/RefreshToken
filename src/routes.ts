import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";

const routes = Router();

routes.post("/users/new", (request, response) => {
  createUserController.handle(request, response);
});

export { routes };
