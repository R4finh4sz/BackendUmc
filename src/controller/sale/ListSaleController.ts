import { Request, Response } from "express";
import { ListSaleService } from "../../service/sale/ListSaleService";

class ListSaleController {
    async handle(request: Request, response: Response) {    
      const listsaleService= new ListSaleService()
    const ret= await listsaleService.execute()
    return response.json(ret);
    }

    async findById(request: Request, response: Response){
      const id= request.params.id;
      const listsaleService= new ListSaleService()
      const ret = await listsaleService.findById(id);
      return response.json(ret);
    }
  } 
  export { ListSaleController };