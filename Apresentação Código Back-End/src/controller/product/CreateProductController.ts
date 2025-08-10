import { Request, Response } from "express";
import { CreateProductService } from "../../service/product/CreateProductService";

class CreateProductController {
  async handle(request: Request, response: Response) {
   const { name, description, price, category } = request.body;
   const product = 
   {
      name:name,
      description:description,
      price:price,
      category:category
    };    

    const createProductService= new CreateProductService()
    const ret= await createProductService.execute(product)
    return response.json(ret);
  }
}
export { CreateProductController };