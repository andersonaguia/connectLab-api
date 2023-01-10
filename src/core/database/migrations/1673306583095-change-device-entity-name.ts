import { MigrationInterface, QueryRunner } from "typeorm";

export class changeDeviceEntityName1673306583095 implements MigrationInterface {
    name = 'changeDeviceEntityName1673306583095'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "devices" DROP CONSTRAINT "FK_93ecd8ac0a3e858399d8a25c5df"`);
        await queryRunner.query(`ALTER TABLE "devices" RENAME COLUMN "info_id" TO "deviceInfo_id"`);
        await queryRunner.query(`ALTER TABLE "devices" RENAME COLUMN "deviceInfo_id" TO "info_id"`);
        await queryRunner.query(`CREATE TABLE "user_devices_location" ("id" SERIAL NOT NULL, "deviceLocation" character varying(30) NOT NULL, CONSTRAINT "PK_34fe9059c52c90b17a63c410e9e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_devices" ("id" SERIAL NOT NULL, "isOn" boolean NOT NULL, "userDeviceLocation_id" integer, CONSTRAINT "REL_d9f49bf21d2fbcd1d8e94dd9bd" UNIQUE ("userDeviceLocation_id"), CONSTRAINT "PK_c9e7e648903a9e537347aba4371" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "devices" DROP CONSTRAINT "REL_93ecd8ac0a3e858399d8a25c5d"`);
        await queryRunner.query(`ALTER TABLE "devices" DROP COLUMN "info_id"`);
        await queryRunner.query(`ALTER TABLE "devices" ADD "deviceInfo_id" integer`);
        await queryRunner.query(`ALTER TABLE "devices" ADD CONSTRAINT "UQ_c9efafd532b9b61dcb6453a89d1" UNIQUE ("deviceInfo_id")`);
        await queryRunner.query(`ALTER TABLE "users" ADD "userDevices_id" integer`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_27d24ea6187f214a470e733d9d8" UNIQUE ("userDevices_id")`);
        await queryRunner.query(`ALTER TABLE "devices" ADD "info_id" integer`);
        await queryRunner.query(`ALTER TABLE "devices" ADD CONSTRAINT "UQ_93ecd8ac0a3e858399d8a25c5df" UNIQUE ("info_id")`);
        await queryRunner.query(`ALTER TABLE "devices" ADD CONSTRAINT "FK_c9efafd532b9b61dcb6453a89d1" FOREIGN KEY ("deviceInfo_id") REFERENCES "device_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD CONSTRAINT "FK_d9f49bf21d2fbcd1d8e94dd9bd9" FOREIGN KEY ("userDeviceLocation_id") REFERENCES "user_devices_location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_27d24ea6187f214a470e733d9d8" FOREIGN KEY ("userDevices_id") REFERENCES "user_devices"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "devices" ADD CONSTRAINT "FK_93ecd8ac0a3e858399d8a25c5df" FOREIGN KEY ("info_id") REFERENCES "device_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "devices" DROP CONSTRAINT "FK_93ecd8ac0a3e858399d8a25c5df"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_27d24ea6187f214a470e733d9d8"`);
        await queryRunner.query(`ALTER TABLE "user_devices" DROP CONSTRAINT "FK_d9f49bf21d2fbcd1d8e94dd9bd9"`);
        await queryRunner.query(`ALTER TABLE "devices" DROP CONSTRAINT "FK_c9efafd532b9b61dcb6453a89d1"`);
        await queryRunner.query(`ALTER TABLE "devices" DROP CONSTRAINT "UQ_93ecd8ac0a3e858399d8a25c5df"`);
        await queryRunner.query(`ALTER TABLE "devices" DROP COLUMN "info_id"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_27d24ea6187f214a470e733d9d8"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "userDevices_id"`);
        await queryRunner.query(`ALTER TABLE "devices" DROP CONSTRAINT "UQ_c9efafd532b9b61dcb6453a89d1"`);
        await queryRunner.query(`ALTER TABLE "devices" DROP COLUMN "deviceInfo_id"`);
        await queryRunner.query(`ALTER TABLE "devices" ADD "info_id" integer`);
        await queryRunner.query(`ALTER TABLE "devices" ADD CONSTRAINT "REL_93ecd8ac0a3e858399d8a25c5d" UNIQUE ("info_id")`);
        await queryRunner.query(`DROP TABLE "user_devices"`);
        await queryRunner.query(`DROP TABLE "user_devices_location"`);
        await queryRunner.query(`ALTER TABLE "devices" RENAME COLUMN "info_id" TO "deviceInfo_id"`);
        await queryRunner.query(`ALTER TABLE "devices" RENAME COLUMN "deviceInfo_id" TO "info_id"`);
        await queryRunner.query(`ALTER TABLE "devices" ADD CONSTRAINT "FK_93ecd8ac0a3e858399d8a25c5df" FOREIGN KEY ("info_id") REFERENCES "device_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
