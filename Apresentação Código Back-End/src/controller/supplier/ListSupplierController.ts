import { Request, Response } from "express";
import { ListSupplierService } from "../../service/supplier/ListSupplierService";

class ListSupplierController {
    async handle(request: Request, response: Response) {    
      const listsupplierService= new ListSupplierService()
    const ret= await listsupplierService.execute()
    return response.json(ret);
    }

    async findById(request: Request, response: Response) {    
    const id = request.params.id;
    const listsupplierService = new ListSupplierService()
    const ret= await listsupplierService.findById(id)
    return response.json(ret);
    }

  }

export { ListSupplierController };