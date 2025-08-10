import { ISaleRequest } from "../../interface/ISaleInterface";
import { SaleRepositories } from "../../repositories/saleRepositories";
import { getCustomRepository } from "typeorm";

class CreateSaleService {
    async execute ({id, client, product, user, quantity}: ISaleRequest) {
        if (!user) {
            throw new Error ("User Id Incorrect");
        }
        if (!product) {
            throw new Error ("Product Id Incorrect");
        }
        if (!client) {
            throw new Error ("Client Id Incorrect");
        }
        if (!quantity) {
            throw new Error ("Quantity Incorrect");
        }

    const salesRepository = getCustomRepository(SaleRepositories);
    const sale = salesRepository.create(
      {  
    id,
    client: { id:client.id },
    product: { id:product.id },
    user: {id:user.id},
    quantity,
      });
      await salesRepository.save(sale);  
      return sale;
  }
}
export {CreateSaleService};