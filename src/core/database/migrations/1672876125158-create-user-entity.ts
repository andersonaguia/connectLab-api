import { MigrationInterface, QueryRunner } from "typeorm";

export class createUserEntity1672876125158 implements MigrationInterface {
    name = 'createUserEntity1672876125158'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "fullName" character varying(50) NOT NULL, "photoUrl" character varying, "email" character varying(30) NOT NULL, "password" character varying NOT NULL, "phone" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "address_id" integer, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "REL_1b05689f6b6456680d538c3d2e" UNIQUE ("address_id"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "adresses" ("id" SERIAL NOT NULL, "zipCode" character varying(10) NOT NULL, "street" character varying(100) NOT NULL, "number" character varying(10) NOT NULL, "neighborhood" character varying(100) NOT NULL, "city" character varying(100) NOT NULL, "state" character varying(100) NOT NULL, "complement" character varying(100), CONSTRAINT "PK_2787c84f7433e390ff8961d552d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_1b05689f6b6456680d538c3d2ea" FOREIGN KEY ("address_id") REFERENCES "adresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_1b05689f6b6456680d538c3d2ea"`);
        await queryRunner.query(`DROP TABLE "adresses"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
