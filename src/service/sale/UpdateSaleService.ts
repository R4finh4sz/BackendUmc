import { ISaleRequest } from "../../interface/ISaleInterface";
import { SaleRepositories } from "../../repositories/saleRepositories";
import { ClientRepositories } from "../../repositories/clientRepositories";
import { ProductRepositories } from "../../repositories/productRepositories";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/usersRepositories";

class UpdateSaleService {
    async execute ({id, client, product, user, quantity}: ISaleRequest) {
        if (!id) {
            throw new Error ("Id Incorrect");
        }
        if (!client) {
            throw new Error ("Client Id Incorrect");
        }
        if (!product) {
            throw new Error ("Product Id Incorrect");
        }
        if (!user) {
            throw new Error ("User Id Incorrect");
        }
        if (!quantity) {
            throw new Error ("Quantity Incorrect");
        }
        const salesRepository = getCustomRepository(SaleRepositories);
        const clientsRepository = getCustomRepository(ClientRepositories);
        const productsRepository = getCustomRepository(ProductRepositories);
        const userRepository = getCustomRepository(UsersRepositories);
        
        const saleAlreadyExists = await salesRepository.findOne({
         id
        });
        if (!saleAlreadyExists) {
        throw new Error("Sale not exists") }

        const checkclient = await clientsRepository.findOne({id:client.id});
        if (!checkclient) {
            throw new Error("Client doesn't exist");
        }

        const checkproduct = await productsRepository.findOne({id:product.id});
        if (!checkproduct) {
            throw new Error("Product doesn't exist");
        }

        const checkuser = await userRepository.findOne({id:user.id});
        if (!checkuser) {
            throw new Error("user doesn't exist");
        }

        saleAlreadyExists.client=checkclient
        saleAlreadyExists.product=checkproduct
        saleAlreadyExists.user=checkuser
        saleAlreadyExists.quantity=quantity
        
        const users = await salesRepository.update(id,saleAlreadyExists)
        return users

    }
}
export {UpdateSaleService};