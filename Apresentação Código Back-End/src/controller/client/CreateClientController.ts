import { Request, Response } from "express";
import { CreateClientService } from "../../service/client/CreateClientService";

class CreateClientController {
  async handle(request: Request, response: Response) {
   const { name, description, cpf, address, fone } = request.body;
    const client = 
     {
      name:name,
      description:description,
      cpf:cpf,
      address:address,
      fone:fone
    };
    const createClientService= new CreateClientService()
    const ret= await createClientService.execute(client)
    return response.json(ret);
  }
}
export { CreateClientController };