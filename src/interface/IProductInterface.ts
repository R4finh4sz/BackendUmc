import { ICategoryRequest } from "./ICategoryInterface";

interface IProductRequest {
    id?: string;
    name: string;
    description?: string;
    price: string;
    category: ICategoryRequest;
  }

export {IProductRequest}