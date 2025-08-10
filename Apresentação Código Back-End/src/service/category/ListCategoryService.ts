import { CategoryRepositories } from "../../repositories/categoryRepositories";
import { getCustomRepository } from "typeorm";
class ListCategoryService {
    async execute() {
        const categoryRepositories = getCustomRepository(CategoryRepositories);
        const category = await categoryRepositories.createQueryBuilder("category")
        .getMany();

      return category;
    }

    async findById(id){
      const categoryRepositories= getCustomRepository(CategoryRepositories);
      const category = await categoryRepositories.findOne({id:id});
      return category;
    }
  
  }
export { ListCategoryService };