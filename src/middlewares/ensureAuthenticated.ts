import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export const ensureAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({
      message: "Missing token!",
    });
  }

  const [, token] = authToken.split(" ");

  try {
    verify(token, "secret key");
    return next();
  } catch (error) {
    return response.status(401).json({
      message: "Invalid token!",
    });
  }
};
