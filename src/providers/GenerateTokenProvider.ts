import { sign } from "jsonwebtoken";

export class GenerateTokenProvider {
  execute(user_id: string) {
    const token = sign({}, "secret key", {
      subject: user_id,
      expiresIn: "20s",
    });

    return token;
  }
}
