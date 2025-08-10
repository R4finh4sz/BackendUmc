import { IUserRequest } from "../../interface/IUserRequest";
import { hash } from "bcryptjs";
import { UsersRepositories } from "../../repositories/usersRepositories";
import { getCustomRepository } from "typeorm";


class CreateUserService {
  async execute({ name, email, admin = false, password, profile}:IUserRequest) {
    if (!email) {
      throw new Error("Email incorrect");
    }
    if (!password) {
      throw new Error("Password incorrect");
    }
    const passwordHash = await hash(password, 8);
    const usersRepositories= getCustomRepository(UsersRepositories);
    const user = usersRepositories.create(
    {
      name,
      email,
      admin,
      password: passwordHash,
      profile:{
        id:profile.id
      }
    });
    await usersRepositories.save(user);
    return user;
  }
}
export { CreateUserService };
