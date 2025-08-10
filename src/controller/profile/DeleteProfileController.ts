import { Request, Response } from "express";
import { DeleteProfileService } from "../../service/profile/DeleteProfileService";

class DeleteProfileController {
  async handle(request: Request, response: Response) {

    const id= request.params.id;
    const createproductService= new DeleteProfileService()
    const ret= await createproductService.execute(id)
    return response.json(ret);
  }
  
}

export { DeleteProfileController };