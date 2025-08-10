import { ICategoryRequest } from "../../interface/ICategoryInterface";
import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../../repositories/categoryRepositories";


class UpdateCategoryService {
    async execute({id, name, description}: ICategoryRequest) {
        if (!name) {
          throw new Error("Name incorrect");
        }
    const categoryRepository= getCustomRepository(CategoryRepositories);

    const categoryAlreadyExists = await categoryRepository.findOne({
      id,
    });
    if (!categoryAlreadyExists) {
      throw new Error ("Category not exists")
    }
    categoryAlreadyExists.description=description
    categoryAlreadyExists.name=name

    const category= await categoryRepository.update(id,categoryAlreadyExists)
    return category
  }

  }
  export { UpdateCategoryService };