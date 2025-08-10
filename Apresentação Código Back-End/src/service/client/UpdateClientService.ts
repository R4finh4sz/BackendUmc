import { IClientRequest } from "../../interface/IClientInterface";
import { getCustomRepository } from "typeorm";
import { ClientRepositories } from "../../repositories/clientRepositories";
import { hash } from "bcryptjs";

  class UpdateClientService {
    async execute({ id, name, description, cpf, address, fone }: IClientRequest) {
      if (!name) {
          throw new Error("Nome incorrect");
        }
        const cpfHash = await hash(cpf, 11);
        const clientRepository= getCustomRepository(ClientRepositories);
    
        const clientAlreadyExists = await clientRepository.findOne({
          id,
        });
        if (!clientAlreadyExists) {
          throw new Error ("Client not exists")
        }
        clientAlreadyExists.name=name
        clientAlreadyExists.description=description
        clientAlreadyExists.cpf=cpfHash
        clientAlreadyExists.address=address
        clientAlreadyExists.fone=fone
    
        const client= await clientRepository.update(id,clientAlreadyExists)
        return client
      }
    
  }
  export { UpdateClientService };