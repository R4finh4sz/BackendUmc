import { Request, Response } from "express";
import { UpdateSupplierService } from "../../service/supplier/UpdateSupplierService";

class UpdateSupplierController {
    async handle(request: Request, response: Response){
        const { name, representative, email, address, telephone, website } = request.body;
        const id = request.params.id;
        
        const supplier =
        {
            name:name,
            representative:representative,
            email:email,
            address:address,
            telephone:telephone,
            website:website
        };
        
    const updatesupplierService= new UpdateSupplierService()
    const ret= await updatesupplierService.execute(supplier)
    return response.json(ret);
  }
}
export { UpdateSupplierController};