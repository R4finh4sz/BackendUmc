import { Request, Response } from "express";
import { ListProfileService } from "../../service/profile/ListProfileService";
class ListProfileController {
    async handle(request: Request, response: Response) {    
      const listProfileService= new ListProfileService()
    const ret= await listProfileService.execute()
    return response.json(ret);
    }

    async findById(request: Request, response: Response){
      const id= request.params.id;
      const listprofileService= new ListProfileService()
      const ret = await listprofileService.findById(id);
      return response.json(ret);
    }

}
export { ListProfileController };