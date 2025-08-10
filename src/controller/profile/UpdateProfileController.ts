import { Request, Response } from "express";
import { UpdateProfileService } from "../../service/profile/UpdateProfileService";

class UpdateProfileController {
  async handle(request: Request, response: Response) {
    const {name} = request.body;
    const id= request.params.id;
    const profile = 
    {
        id:id,
        name:name

    };    
    const updateProfileService= new UpdateProfileService()
  const ret= await updateProfileService.execute(profile)
  return response.json(ret);
}
}
export { UpdateProfileController };