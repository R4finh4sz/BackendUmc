import { getCustomRepository } from "typeorm";
import { SaleRepositories } from "../../repositories/saleRepositories";

class ListSaleService {
  async execute() {
      const saleRepositories = getCustomRepository(SaleRepositories); 
      const sale = await saleRepositories
      .createQueryBuilder("sale")
      .leftJoinAndSelect("sale.client","client")
      .leftJoinAndSelect("sale.product","product")
      .leftJoinAndSelect("sale.user","user")
      .getMany();
      return sale
  }

  async findById(id) {
      const saleRepositories = getCustomRepository(SaleRepositories);
      const sale = await saleRepositories.findOne({id:id});
      return sale;
  }
}
export { ListSaleService };
