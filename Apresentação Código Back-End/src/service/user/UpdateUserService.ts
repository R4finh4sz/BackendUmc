import { IUserRequest } from "../../interface/IUserRequest";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/usersRepositories";
import { ProfileRepositories } from "../../repositories/profileRepositories";
import { hash } from "bcryptjs";

  class UpdateUserService {
    async execute({id, name, email, admin = false, password, profile }: IUserRequest) {
        if (!email) {
          throw new Error("Email incorrect");
        }
        if (!password) {
          throw new Error("Password incorrect");
        }
    const passwordHash = await hash(password, 8);
    const usersRepository= getCustomRepository(UsersRepositories);
    const profileRepository= getCustomRepository(ProfileRepositories);
    const userAlreadyExists = await usersRepository.findOne({
      id,
    });
    if (!userAlreadyExists) {
      throw new Error ("User not exists")
    }
    const prof = await profileRepository.findOne({id:profile.id});
    if (!prof) {
      throw new Error ("Profile not exists")
    }
    userAlreadyExists.name=name
    userAlreadyExists.admin=admin
    userAlreadyExists.email=email
    userAlreadyExists.password=passwordHash
    userAlreadyExists.profile=prof 
    const user= await usersRepository.update(id,userAlreadyExists)
    return user
  }

}
  export { UpdateUserService };