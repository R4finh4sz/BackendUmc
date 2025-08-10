import { Request, Response } from "express";
import { UpdateProductService } from "../../service/product/UpdateProductService";

class UpdateProductController {
  async handle(request: Request, response: Response) {
    const { name, description, price, category } = request.body;
    const id= request.params.id;
    const product = 
    {
        id:id,
        name:name,
        description:description,
        price:price,
        category:category
    };    
    const updateProductService= new UpdateProductService()
  const ret= await updateProductService.execute(product)
  return response.json(ret);
}
}
export { UpdateProductController };