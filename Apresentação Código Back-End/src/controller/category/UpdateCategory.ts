import { Request, Response } from "express";
import { UpdateCategoryService } from "../../service/category/UpdateCategoryService";

class UpdateCategoryController {
  async handle(request: Request, response: Response) {
    const { name, description } = request.body;
    const id= request.params.id;
    const category = 
    {
        id:id,
        name:name,
        description:description
    };    
    const updateCategoryService= new UpdateCategoryService()
  const ret= await updateCategoryService.execute(category)
  return response.json(ret);
}
}
export { UpdateCategoryController };