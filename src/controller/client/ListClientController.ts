import { Request, Response } from "express";
import { ListClientService } from "../../service/client/ListClientService";

class ListClientController {
    async handle(request: Request, response: Response) {    
      const listclientService= new ListClientService()
    const ret= await listclientService.execute()
    return response.json(ret);
    }
    async findById(request: Request, response: Response){
      const id= request.params.id;
      const listclientService= new ListClientService()
      const ret = await listclientService.findById(id);
      return response.json(ret);
    }
  } 
  export { ListClientController };