import { SaleRepositories } from "../../repositories/saleRepositories";
import { getCustomRepository } from "typeorm";

class DeleteSaleService {
  async execute(id:any) {
    if (!id) {
      throw new Error("ID incorrect");
    }
    const saleRepository = getCustomRepository(SaleRepositories);
    const saleAlreadyExists = await saleRepository.findOne({
      id,
    });

    if (!saleAlreadyExists) {
      throw new Error("Sale not exists");
    }

const ret = await saleRepository.delete(id);

var messagmsgeDelete = {
  message:"Sale excluído com sucesso"
}

  return messagmsgeDelete;
}
}
export { DeleteSaleService };
