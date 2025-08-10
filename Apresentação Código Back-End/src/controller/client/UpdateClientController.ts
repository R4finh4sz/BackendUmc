import { Request, Response } from "express";
import { UpdateClientService } from "../../service/client/UpdateClientService";

class UpdateClientController {
  async handle(request: Request, response: Response) {
    const { name, description, cpf, address, fone } = request.body;
    const id= request.params.id;
    const client = 
    {
        id:id,
        name:name,
        description:description,
        cpf:cpf,
        address:address,
        fone:fone
    };    
    const updateClientService= new UpdateClientService()
  const ret= await updateClientService.execute(client)
  return response.json(ret);
}
}
export { UpdateClientController };