import { Request, Response } from "express";
import { CreateSupplierService } from "../../service/supplier/CreateSupplierService"

class CreateSupplierController {
    async handle(request: Request, response: Response){
        const{ name, representative, email, address, telephone, website } = request.body;
        const supplier =
        {
            name:name,
            representative:representative,
            email:email,
            address:address,
            telephone:telephone,
            website:website
        };
        const createsupplierService= new CreateSupplierService()
    const ret= await createsupplierService.execute(supplier)
    return response.json(ret);
    }
}
export { CreateSupplierController };