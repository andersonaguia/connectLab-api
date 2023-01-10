import { MigrationInterface, QueryRunner } from "typeorm";

export class addUserDevices1673312436328 implements MigrationInterface {
    name = 'addUserDevices1673312436328'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "devices" DROP CONSTRAINT "FK_93ecd8ac0a3e858399d8a25c5df"`);
        await queryRunner.query(`ALTER TABLE "user_devices" DROP CONSTRAINT "FK_d9f49bf21d2fbcd1d8e94dd9bd9"`);
        await queryRunner.query(`ALTER TABLE "devices" DROP CONSTRAINT "UQ_93ecd8ac0a3e858399d8a25c5df"`);
        await queryRunner.query(`ALTER TABLE "devices" DROP COLUMN "info_id"`);
        await queryRunner.query(`ALTER TABLE "user_devices" DROP CONSTRAINT "REL_d9f49bf21d2fbcd1d8e94dd9bd"`);
        await queryRunner.query(`ALTER TABLE "user_devices" DROP COLUMN "userDeviceLocation_id"`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD "information" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD "deviceLocation_id" integer`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD CONSTRAINT "UQ_de951e3857caa049b381b9718be" UNIQUE ("deviceLocation_id")`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD CONSTRAINT "FK_de951e3857caa049b381b9718be" FOREIGN KEY ("deviceLocation_id") REFERENCES "user_devices_location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_devices" DROP CONSTRAINT "FK_de951e3857caa049b381b9718be"`);
        await queryRunner.query(`ALTER TABLE "user_devices" DROP CONSTRAINT "UQ_de951e3857caa049b381b9718be"`);
        await queryRunner.query(`ALTER TABLE "user_devices" DROP COLUMN "deviceLocation_id"`);
        await queryRunner.query(`ALTER TABLE "user_devices" DROP COLUMN "information"`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD "userDeviceLocation_id" integer`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD CONSTRAINT "REL_d9f49bf21d2fbcd1d8e94dd9bd" UNIQUE ("userDeviceLocation_id")`);
        await queryRunner.query(`ALTER TABLE "devices" ADD "info_id" integer`);
        await queryRunner.query(`ALTER TABLE "devices" ADD CONSTRAINT "UQ_93ecd8ac0a3e858399d8a25c5df" UNIQUE ("info_id")`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD CONSTRAINT "FK_d9f49bf21d2fbcd1d8e94dd9bd9" FOREIGN KEY ("userDeviceLocation_id") REFERENCES "user_devices_location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "devices" ADD CONSTRAINT "FK_93ecd8ac0a3e858399d8a25c5df" FOREIGN KEY ("info_id") REFERENCES "device_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
