import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../../repositories/categoryRepositories";

class DeleteCategoryService {
  async execute(id:any) {
    if (!id) {
      throw new Error("ID incorrect");
    }
    const categoryRepository = getCustomRepository(CategoryRepositories);
    const categoryAlreadyExists = await categoryRepository.findOne({
      id,
    });

    if (!categoryAlreadyExists) {
      throw new Error("Category not exists");
    }

const ret = await categoryRepository.delete(id);

var messagmsgeDelete = {
  message:"Category excluído com sucesso"
}

  return messagmsgeDelete;
  
}
}
export { DeleteCategoryService };