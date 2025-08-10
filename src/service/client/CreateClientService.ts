import { IClientRequest } from "../../interface/IClientInterface";
import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { ClientRepositories } from "../../repositories/clientRepositories";

class CreateClientService {
  async execute({ id, name, description, cpf, address, fone }: IClientRequest) {
    if (!name) {
      throw new Error("Name incorrect");
    }
    const cpfHash = await hash(cpf, 11);
    const clientRepositories= getCustomRepository(ClientRepositories);
    const client = clientRepositories.create(
    {
      id,
      name,
      description,
      address,
      fone,
      cpf:cpfHash
    });
    await clientRepositories.save(client);
    return client;
  }
}
export { CreateClientService };