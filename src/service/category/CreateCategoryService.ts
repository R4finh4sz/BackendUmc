import { ICategoryRequest } from "../../interface/ICategoryInterface";
import { CategoryRepositories } from "../../repositories/categoryRepositories";
import { getCustomRepository } from "typeorm";

class CreateCategoryService {
  async execute({name, description}: ICategoryRequest) {
    if (!name) {
      throw new Error("Name incorrect");
    }
    const categoryRepositories= getCustomRepository(CategoryRepositories);
    const category = categoryRepositories.create(
    {
      description,
      name: name
    });
    return await categoryRepositories.save(category);
  }
}
export { CreateCategoryService };
