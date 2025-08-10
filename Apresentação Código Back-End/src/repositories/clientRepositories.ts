import { EntityRepository, Repository } from "typeorm";
import { client } from "../entities/client";

@EntityRepository(client)
class ClientRepositories extends Repository<client>{}

export{ClientRepositories};