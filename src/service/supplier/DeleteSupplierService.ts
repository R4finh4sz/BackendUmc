import { getCustomRepository } from "typeorm";
import { SuppliersRepositories } from "../../repositories/suppliersRepositories";

class DeleteSupplierService {
  async execute(id:any) {
    if (!id) {
      throw new Error("Id Incorrect");
    }

    const suppliersRepository = getCustomRepository(SuppliersRepositories);

    const suppliersAlreadyExists = await suppliersRepository.findOne({
      id,
    })

    if(!suppliersAlreadyExists) {
      throw new Error ("User not exists");
    }
    
    const ret = await suppliersRepository.delete(id);

    var messagmsgeDelete = {
      message: "Registro excluído com sucesso"
    }
    return messagmsgeDelete;
  }
}
export { DeleteSupplierService };
