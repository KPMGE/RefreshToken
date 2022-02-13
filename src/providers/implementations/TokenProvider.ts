import { sign } from "jsonwebtoken";
import { ITokenProvider } from "../ITokenProvider";

export class TokenProvider implements ITokenProvider {
  generate(user_id: string): string {
    const token = sign({}, "secret key", {
      subject: user_id,
      expiresIn: "20s",
    });

    return token;
  }
}
