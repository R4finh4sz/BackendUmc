import { getCustomRepository } from "typeorm";
import { ProfileRepositories } from "../../repositories/profileRepositories";
class ListProfileService {
    async execute() {
        const profileRepositories = getCustomRepository(ProfileRepositories);
        const profile = await profileRepositories.createQueryBuilder("profile").getMany();
      return profile;
    }
    async findById(id){
      const profileRepositories= getCustomRepository(ProfileRepositories);
      const profile = await profileRepositories.findOne({id:id});
      return profile;
    }
  }
  export { ListProfileService };
  