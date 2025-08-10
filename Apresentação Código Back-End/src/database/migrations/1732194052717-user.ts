import {MigrationInterface, QueryRunner} from "typeorm";

export class user1732194052717 implements MigrationInterface {
    name = 'user1732194052717'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category" ("id" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client" ("id" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "cpf" character varying NOT NULL, "address" character varying NOT NULL, "fone" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Product" ("id" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "price" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "categoryId" character varying, CONSTRAINT "PK_9fc040db7872192bbc26c515710" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "profile" ("id" character varying NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "admin" boolean NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "profile" character varying, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Sale" ("id" character varying NOT NULL, "quantity" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "clientId" character varying, "productId" character varying, "userId" character varying, CONSTRAINT "PK_dc216b1140b34718ae74c8e1273" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "supplier" ("id" character varying NOT NULL, "name" character varying NOT NULL, "representative" character varying NOT NULL, "email" character varying NOT NULL, "address" character varying NOT NULL, "telephone" character varying NOT NULL, "website" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2bc0d2cab6276144d2ff98a2828" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Product" ADD CONSTRAINT "FK_896e2e0f6dfa6f80117a79e1d7e" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_e850707b5c70fa49ea50ef2f59f" FOREIGN KEY ("profile") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Sale" ADD CONSTRAINT "FK_a4559cca2e11f8f5b64ed642f1a" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Sale" ADD CONSTRAINT "FK_23e5e5870dfbfe8955b9b671730" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Sale" ADD CONSTRAINT "FK_2aa17e68d66e3069cdad380f3ff" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Sale" DROP CONSTRAINT "FK_2aa17e68d66e3069cdad380f3ff"`);
        await queryRunner.query(`ALTER TABLE "Sale" DROP CONSTRAINT "FK_23e5e5870dfbfe8955b9b671730"`);
        await queryRunner.query(`ALTER TABLE "Sale" DROP CONSTRAINT "FK_a4559cca2e11f8f5b64ed642f1a"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_e850707b5c70fa49ea50ef2f59f"`);
        await queryRunner.query(`ALTER TABLE "Product" DROP CONSTRAINT "FK_896e2e0f6dfa6f80117a79e1d7e"`);
        await queryRunner.query(`DROP TABLE "supplier"`);
        await queryRunner.query(`DROP TABLE "Sale"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "profile"`);
        await queryRunner.query(`DROP TABLE "Product"`);
        await queryRunner.query(`DROP TABLE "client"`);
        await queryRunner.query(`DROP TABLE "category"`);
    }

}
