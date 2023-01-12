import { MigrationInterface, QueryRunner } from "typeorm";

export class changeDeviceEntityAddVirtualId1673526849245 implements MigrationInterface {
    name = 'changeDeviceEntityAddVirtualId1673526849245'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "devices" ("_id" SERIAL NOT NULL, "name" character varying(30) NOT NULL, "type" character varying(30) NOT NULL, "madeBy" character varying(30) NOT NULL, "photoUrl" character varying NOT NULL, "deviceInfo_id" integer, CONSTRAINT "REL_c9efafd532b9b61dcb6453a89d" UNIQUE ("deviceInfo_id"), CONSTRAINT "PK_06e54be2989de9043573759c83a" PRIMARY KEY ("_id"))`);
        await queryRunner.query(`CREATE TABLE "device_info" ("id" SERIAL NOT NULL, "virtual_id" character varying(30) NOT NULL, "ip_address" character varying(15) NOT NULL, "mac_address" character varying(50) NOT NULL, "signal" character varying(10) NOT NULL, CONSTRAINT "PK_b1c15a80b0a4e5f4eebadbdd92c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "devices" ADD CONSTRAINT "FK_c9efafd532b9b61dcb6453a89d1" FOREIGN KEY ("deviceInfo_id") REFERENCES "device_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD CONSTRAINT "FK_7c0755b2e06094d9dfb353a3772" FOREIGN KEY ("device_id") REFERENCES "devices"("_id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_devices" DROP CONSTRAINT "FK_7c0755b2e06094d9dfb353a3772"`);
        await queryRunner.query(`ALTER TABLE "devices" DROP CONSTRAINT "FK_c9efafd532b9b61dcb6453a89d1"`);
        await queryRunner.query(`DROP TABLE "device_info"`);
        await queryRunner.query(`DROP TABLE "devices"`);
    }

}
