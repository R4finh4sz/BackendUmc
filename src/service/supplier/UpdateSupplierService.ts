import { ISupplierRequest } from "../../interface/ISupplierRequest";
import { getCustomRepository } from "typeorm";
import { SuppliersRepositories } from "../../repositories/suppliersRepositories";

class UpdateSupplierService {
    async execute ({id, name, representative, email, address, telephone, website}: ISupplierRequest) {

        const suppliersRepository = getCustomRepository(SuppliersRepositories);
        const supplierAlreadyExists = await suppliersRepository.findOne({
         id,
        });
        if (!supplierAlreadyExists) {
        throw new Error("Supplier doesn't exists") }

        supplierAlreadyExists.name=name
        supplierAlreadyExists.representative=representative
        supplierAlreadyExists.email=email
        supplierAlreadyExists.address=address
        supplierAlreadyExists.telephone=telephone
        supplierAlreadyExists.website=website

        const user = await suppliersRepository.update(id,supplierAlreadyExists)
        return user

    }
}
export {UpdateSupplierService};