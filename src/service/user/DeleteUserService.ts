import { UsersRepositories } from "../../repositories/usersRepositories";
import { getCustomRepository } from "typeorm";

class DeleteUserService {
  async execute(id:any) {
    if (!id) {
      throw new Error("Email incorrect");
    }
    const usersRepository = getCustomRepository(UsersRepositories);
    const userAlreadyExists = await usersRepository.findOne({
      id,
    });

    if (!userAlreadyExists) {
      throw new Error("User not exists");
    }

const ret = await usersRepository.delete(id);

var messagmsgeDelete = {
  message:"Registro excluído com sucesso"
}

  return messagmsgeDelete;
  
}
}
export { DeleteUserService };
