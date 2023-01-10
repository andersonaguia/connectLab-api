import { MigrationInterface, QueryRunner } from "typeorm";

export class changeEntity1673296187165 implements MigrationInterface {
    name = 'changeEntity1673296187165'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "device_info" ("id" SERIAL NOT NULL, "ipAddress" character varying(15) NOT NULL, "macAddress" character varying(50) NOT NULL, "signal" character varying(10) NOT NULL, CONSTRAINT "PK_b1c15a80b0a4e5f4eebadbdd92c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "devices" ("id" SERIAL NOT NULL, "name" character varying(30) NOT NULL, "type" character varying(30) NOT NULL, "madeBy" character varying(30) NOT NULL, "photoUrl" character varying NOT NULL, "info_id" integer, CONSTRAINT "REL_93ecd8ac0a3e858399d8a25c5d" UNIQUE ("info_id"), CONSTRAINT "PK_b1514758245c12daf43486dd1f0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "fullName" character varying(50) NOT NULL, "photoUrl" character varying, "email" character varying(30) NOT NULL, "password" character varying NOT NULL, "phone" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "salt" character varying NOT NULL, "active" boolean NOT NULL, "role" "public"."users_role_enum" NOT NULL DEFAULT 'client', "address_id" integer, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "REL_1b05689f6b6456680d538c3d2e" UNIQUE ("address_id"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "adresses" ("id" SERIAL NOT NULL, "zipCode" character varying(10) NOT NULL, "street" character varying(100) NOT NULL, "number" integer NOT NULL, "neighborhood" character varying(100) NOT NULL, "city" character varying(100) NOT NULL, "state" character varying(100) NOT NULL, "complement" character varying(100), CONSTRAINT "PK_2787c84f7433e390ff8961d552d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "devices" ADD CONSTRAINT "FK_93ecd8ac0a3e858399d8a25c5df" FOREIGN KEY ("info_id") REFERENCES "device_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_1b05689f6b6456680d538c3d2ea" FOREIGN KEY ("address_id") REFERENCES "adresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_1b05689f6b6456680d538c3d2ea"`);
        await queryRunner.query(`ALTER TABLE "devices" DROP CONSTRAINT "FK_93ecd8ac0a3e858399d8a25c5df"`);
        await queryRunner.query(`DROP TABLE "adresses"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "devices"`);
        await queryRunner.query(`DROP TABLE "device_info"`);
    }

}
