
import { getCustomRepository } from "typeorm";
import { IProfileRequest } from "../../interface/IProfileRequest";
import { ProfileRepositories } from "../../repositories/profileRepositories";

class UpdateProfileService {
    async execute ({id, name}: IProfileRequest) {
        if (!name) {
            throw new Error ("Name Incorrect");
        }
        const profileRepository = getCustomRepository(ProfileRepositories);

        const profileAlreadyExists = await profileRepository.findOne({
         id,
        });
        if (!profileAlreadyExists) {
            throw new Error ("Profile not exists")
          }

      profileAlreadyExists.name=name

      const user = await profileRepository.update(id,profileAlreadyExists)
      return user

  }
}
export {UpdateProfileService};