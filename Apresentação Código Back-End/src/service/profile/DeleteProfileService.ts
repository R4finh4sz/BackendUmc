import { ProfileRepositories } from "../../repositories/profileRepositories";
import { getCustomRepository } from "typeorm";

class DeleteProfileService {
  async execute(id:any) {
    if (!id) {
      throw new Error("id incorrect");
    }
    const profileRepositories = getCustomRepository(ProfileRepositories);
    const profileAlreadyExists = await profileRepositories.findOne({
      id,
    });

    if (!profileAlreadyExists) {
      throw new Error("Profile not exists");
    }

const ret = await profileRepositories.delete(id);

var messagmsgeDelete = {
  message:"Perfil excluído com sucesso"
}

  return messagmsgeDelete;
  
}
}
export { DeleteProfileService };
