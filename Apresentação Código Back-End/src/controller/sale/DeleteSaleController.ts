import { Request, Response } from "express";
import { DeleteSaleService } from "../../service/sale/DeleteSaleService";

class DeleteSaleController {
  async handle(request: Request, response: Response) {

    const id= request.params.id;
    const createuserService= new DeleteSaleService()
    const ret= await createuserService.execute(id)
    return response.json(ret);
  }
  
}

export { DeleteSaleController };