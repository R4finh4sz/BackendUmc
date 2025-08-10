import { getCustomRepository } from "typeorm";
import { ProductRepositories } from "../../repositories/productRepositories";

class ListProductService {
    async execute() {
        const productRepositories = getCustomRepository(ProductRepositories);
        const product = await productRepositories
        .createQueryBuilder("product")
        .leftJoinAndSelect("product.category", "category").getMany();
        return product;
    }

    async findById(id) {
        const productRepositories = getCustomRepository(ProductRepositories);
        const product = await productRepositories.findOne({id:id});
      return product;
    }

  }
  export { ListProductService };
  