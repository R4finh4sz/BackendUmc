import { ProductRepositories } from "../../repositories/productRepositories";
import { getCustomRepository } from "typeorm";

class DeleteProductService {
  async execute(id:any) {
    if (!id) {
      throw new Error("ID incorrect");
    }
    const productRepository = getCustomRepository(ProductRepositories);
    const productAlreadyExists = await productRepository.findOne({
      id,
    });

    if (!productAlreadyExists) {
      throw new Error("Product not exists");
    }

const ret = await productRepository.delete(id);

var messagmsgeDelete = {
  message:"Produto excluído com sucesso"
}

  return messagmsgeDelete;
  
  }
}
export { DeleteProductService };
