import { PrismaClient } from "@prisma/client";
import { User } from "../../entities/User";
import { IUsersRepositoty } from "../IUsersRepository";

const client = new PrismaClient();

export class PrismaUsersRepository implements IUsersRepositoty {
  async save(user: User): Promise<User> {
    const savedUser = await client.user.create({
      data: user,
    });

    return savedUser;
  }

  async findUserById(id: string): Promise<User> {
    const foundUser = await client.user.findFirst({
      where: { id },
    });

    return foundUser;
  }

  async findUserByUserName(user_name: string): Promise<User> {
    const foundUser = await client.user.findFirst({
      where: { user_name },
    });

    return foundUser;
  }

  async getAllUsers(): Promise<User[]> {
    const users = await client.user.findMany();
    return users;
  }
}
