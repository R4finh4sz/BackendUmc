import { getCustomRepository } from "typeorm";
import { SuppliersRepositories } from "../../repositories/suppliersRepositories";

class ListSupplierService {
    async execute() {
        const suppliersRepositories = getCustomRepository(SuppliersRepositories);
        const suppliers = await suppliersRepositories
        .createQueryBuilder("suppliers").getMany();
        return suppliers;
    }

    async findById(id) {
        const suppliersRepositories = getCustomRepository(SuppliersRepositories);
        const suppliers = await suppliersRepositories.findOne({id:id});
      return suppliers;
    }
}
  export { ListSupplierService };
  