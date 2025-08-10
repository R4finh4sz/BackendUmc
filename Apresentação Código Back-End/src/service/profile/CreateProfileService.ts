import { IProfileRequest } from "../../interface/IProfileRequest";
import { ProfileRepositories } from "../../repositories/profileRepositories";
import { getCustomRepository } from "typeorm";
class CreateProfileService {
  async execute({ id,name }: IProfileRequest) {
    if (!name) {
      throw new Error("Nome Obrigatório");
    }
    const profileRepository = getCustomRepository(ProfileRepositories);
    const profile = profileRepository.create(
      {
        id,
        name,
      });
      await profileRepository.save(profile);  
      return profile;
  }
}
export { CreateProfileService };
