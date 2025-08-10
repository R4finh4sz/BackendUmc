import { IProductRequest } from "../../interface/IProductInterface";
import { ProductRepositories } from "../../repositories/productRepositories";
import { getCustomRepository } from "typeorm";

class CreateProductService {
  async execute({name, description, price, category }: IProductRequest) {
    if (!name) {
      throw new Error("Name incorrect");
    } 
    if (!price) {
      throw new Error("Valor incorrect");
    }
    if (!category)  {
      throw new Error("CategoryId incorrect");
    }
    const productRepositories= getCustomRepository(ProductRepositories);
    const product = productRepositories.create(
    {
      name,
      description,
      price,
      category: {
        id:category.id
      }
    });
    await productRepositories.save(product);
    return product;
  }
}
export { CreateProductService };
