import { IProductRequest } from "../../interface/IProductInterface";
import { ProductRepositories } from "../../repositories/productRepositories";
import { getCustomRepository } from "typeorm";
import { Category } from "../../entities/category";
import { CategoryRepositories } from "../../repositories/categoryRepositories";
class UpdateProductService {
    async execute ({id, name, description, price, category}: IProductRequest) {
        if (!name) {
            throw new Error ("Name Incorrect");
        }
        if (!price) {
            throw new Error ("Price Incorrect");
        }
        if (!category) {
            throw new Error ("Category Id Incorrect");
        }
        const productRepository = getCustomRepository(ProductRepositories);

        const categoryRepositories = getCustomRepository(CategoryRepositories);

        const productAlreadyExists = await productRepository.findOne({
         id,
        });
        if (!productAlreadyExists) {
        throw new Error("Product not exists") }


      const cate = await categoryRepositories.findOne({id:category.id});
      if (!cate) {
        throw new Error("Category not exists")
      }

      productAlreadyExists.name=name
      productAlreadyExists.description=description
      productAlreadyExists.price=price
      productAlreadyExists.category=cate

      const user = await productRepository.update(id,productAlreadyExists)
      return user

  }
}
export {UpdateProductService};