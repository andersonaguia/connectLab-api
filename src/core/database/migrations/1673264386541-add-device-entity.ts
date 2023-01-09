import { MigrationInterface, QueryRunner } from "typeorm";

export class addDeviceEntity1673264386541 implements MigrationInterface {
    name = 'addDeviceEntity1673264386541'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "device_info" ("id" SERIAL NOT NULL, "ipAddress" character varying(15) NOT NULL, "macAddress" character varying(50) NOT NULL, "signal" character varying(10) NOT NULL, CONSTRAINT "PK_b1c15a80b0a4e5f4eebadbdd92c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "devices" ("id" SERIAL NOT NULL, "name" character varying(30) NOT NULL, "type" character varying(30) NOT NULL, "madeBy" character varying(30) NOT NULL, "photoUrl" character varying NOT NULL, "info_id" integer, CONSTRAINT "REL_93ecd8ac0a3e858399d8a25c5d" UNIQUE ("info_id"), CONSTRAINT "PK_b1514758245c12daf43486dd1f0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "devices" ADD CONSTRAINT "FK_93ecd8ac0a3e858399d8a25c5df" FOREIGN KEY ("info_id") REFERENCES "device_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "devices" DROP CONSTRAINT "FK_93ecd8ac0a3e858399d8a25c5df"`);
        await queryRunner.query(`DROP TABLE "devices"`);
        await queryRunner.query(`DROP TABLE "device_info"`);
    }

}
