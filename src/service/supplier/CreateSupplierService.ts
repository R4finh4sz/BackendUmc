import { ISupplierRequest } from "../../interface/ISupplierRequest";
import { SuppliersRepositories } from "../../repositories/suppliersRepositories";
import { getCustomRepository } from "typeorm";

class CreateSupplierService {
    async execute ({name, representative, email, address, telephone, website}: ISupplierRequest) {
    
    const suppliersRepository = getCustomRepository(SuppliersRepositories);
    const supplier = suppliersRepository.create(
      {
        name, 
        representative, 
        email, 
        address, 
        telephone, 
        website
      });
      await suppliersRepository.save(supplier);  
      return supplier;
  }
}
export { CreateSupplierService };