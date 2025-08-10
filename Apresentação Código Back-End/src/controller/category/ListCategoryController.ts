import { Request, Response } from "express";
import { ListCategoryService } from "../../service/category/ListCategoryService";

class ListCategoryController {
    async handle(request: Request, response: Response) {    
      const listCategoryService= new ListCategoryService()
    const ret= await listCategoryService.execute()
    return response.json(ret);
    }

    async findById(request: Request, response: Response){
      const id= request.params.id;
      const listcategoryService= new ListCategoryService()
      const ret = await listcategoryService.findById(id);
      return response.json(ret);
    }
  } 
  export { ListCategoryController };