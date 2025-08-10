import { Request, Response } from "express";
import { CreateCategoryService } from "../../service/category/CreateCategoryService";

class CreateCategoryController {
  async handle(request: Request, response: Response) {
   const { name, description } = request.body;
   const category = 
   {
      name:name,
      description:description
    };    
    const createCategoryService= new CreateCategoryService()
    const ret= await createCategoryService.execute(category)
    return response.json(ret);
  }
}
export { CreateCategoryController };