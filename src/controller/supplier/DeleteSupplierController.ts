import { Request, Response } from "express";
import { DeleteSupplierService } from "../../service/supplier/DeleteSupplierService";

class DeleteSupplierController {
    async handle(request: Request, response: Response){
       
    const id= request.params.id;
    const deletesupplierService= new DeleteSupplierService()
    const ret= await deletesupplierService.execute(id)
    return response.json(ret);
  }
  
}
export { DeleteSupplierController};