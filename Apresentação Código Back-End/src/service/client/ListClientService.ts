import { ClientRepositories } from "../../repositories/clientRepositories";
import { getCustomRepository } from "typeorm";
class ListClientService {
    async execute() {
        const clientRepositories = getCustomRepository(ClientRepositories);
        const client = await clientRepositories.createQueryBuilder("client")
        .getMany();

      return client;
    }
    async findById(id){
      const clientRepositories= getCustomRepository(ClientRepositories);
      const client = await clientRepositories.findOne({id:id});
      return client;
    }
  
  }
  export { ListClientService };