import { Request, Response } from "express";
import { UpdateSaleService } from "../../service/sale/UpdateSaleService";

class UpdateSaleController {
  async handle(request: Request, response: Response) {
    const { user, product, client, quantity } = request.body;
    const id= request.params.id;
    const sale = 
    {
        user:user,
        product:product,
        client:client,
        quantity:quantity
    };    
    const updateSaleService= new UpdateSaleService()
  const ret= await updateSaleService.execute(sale)
  return response.json(ret);
}
}
export { UpdateSaleController };