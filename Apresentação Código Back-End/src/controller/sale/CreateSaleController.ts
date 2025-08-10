import { Request, Response } from "express";
import { CreateSaleService } from "../../service/sale/CreateSaleService";

class CreateSaleController {
  async handle(request: Request, response: Response) {
   const { user, product, client, quantity } = request.body;
   const sale = 
   {
      user:user,
      product:product,
      client:client,
      quantity:quantity
    };    

    const createSaleService= new CreateSaleService()
    const ret= await createSaleService.execute(sale)
    return response.json(ret);
  }
}
export { CreateSaleController };