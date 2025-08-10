import { IClientRequest } from "./IClientInterface";
import { IProductRequest } from "./IProductInterface";
import { IUserRequest } from "./IUserRequest";

interface ISaleRequest {
    id?: string;
    user: IUserRequest;
    product: IProductRequest;
    client: IClientRequest;
    quantity: string;
  }

export {ISaleRequest}