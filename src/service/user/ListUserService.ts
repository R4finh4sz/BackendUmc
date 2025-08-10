import { UsersRepositories } from "../../repositories/usersRepositories";
import { getCustomRepository } from "typeorm";
class ListUserService {
    async execute() {
        const usersRepositories = getCustomRepository(UsersRepositories);
        const users = await usersRepositories.createQueryBuilder("user").leftJoinAndSelect("user.profile","profile").getMany();
      return users;
    }
    async findById(id){
      const usersRepositories= getCustomRepository(UsersRepositories);
      const users = await usersRepositories.findOne({id:id});
      return users;
    }
  }
  export { ListUserService };
  