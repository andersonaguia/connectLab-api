import { MigrationInterface, QueryRunner } from "typeorm";

export class chengeUserEntity1673565201585 implements MigrationInterface {
    name = 'chengeUserEntity1673565201585'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_devices" ("id" SERIAL NOT NULL, "isOn" boolean NOT NULL, "information" character varying(50) NOT NULL, "room" character varying(50) NOT NULL, "deviceLocation_id" integer, "device_id" integer, "user_id" integer, CONSTRAINT "PK_c9e7e648903a9e537347aba4371" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD CONSTRAINT "FK_de951e3857caa049b381b9718be" FOREIGN KEY ("deviceLocation_id") REFERENCES "user_devices_location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD CONSTRAINT "FK_7c0755b2e06094d9dfb353a3772" FOREIGN KEY ("device_id") REFERENCES "devices"("_id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD CONSTRAINT "FK_28bd79e1b3f7c1168f0904ce241" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_devices" DROP CONSTRAINT "FK_28bd79e1b3f7c1168f0904ce241"`);
        await queryRunner.query(`ALTER TABLE "user_devices" DROP CONSTRAINT "FK_7c0755b2e06094d9dfb353a3772"`);
        await queryRunner.query(`ALTER TABLE "user_devices" DROP CONSTRAINT "FK_de951e3857caa049b381b9718be"`);
        await queryRunner.query(`DROP TABLE "user_devices"`);
    }

}
