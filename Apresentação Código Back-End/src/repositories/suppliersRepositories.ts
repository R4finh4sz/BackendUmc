import { EntityRepository, Repository } from "typeorm";
import { Supplier } from "../entities/supplier";

@EntityRepository(Supplier)
class SuppliersRepositories extends Repository<Supplier> {}

export { SuppliersRepositories };