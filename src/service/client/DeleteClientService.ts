import { ClientRepositories } from "../../repositories/clientRepositories";
import { getCustomRepository } from "typeorm";

class DeleteClientService {
    async execute(id:any) {
      if (!id) {
        throw new Error("ID incorrect");
      }
      
    const clientRepository = getCustomRepository(ClientRepositories);
    const clientAlreadyExists = await clientRepository.findOne({
      id,
    });

    if (!clientAlreadyExists) {
      throw new Error("Client not exists");
    }

const ret = await clientRepository.delete(id);

var messagmsgeDelete = {
  message:"Client excluído com sucesso"
}

  return messagmsgeDelete;
  
    }
  }
  export { DeleteClientService };
  