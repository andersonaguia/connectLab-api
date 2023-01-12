import { MigrationInterface, QueryRunner } from "typeorm";

export class changeLengthDeviceEntityColumns1673528685272 implements MigrationInterface {
    name = 'changeLengthDeviceEntityColumns1673528685272'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "devices" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "devices" ADD "name" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "devices" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "devices" ADD "type" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "devices" DROP COLUMN "madeBy"`);
        await queryRunner.query(`ALTER TABLE "devices" ADD "madeBy" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "device_info" DROP COLUMN "virtual_id"`);
        await queryRunner.query(`ALTER TABLE "device_info" ADD "virtual_id" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "device_info" DROP COLUMN "ip_address"`);
        await queryRunner.query(`ALTER TABLE "device_info" ADD "ip_address" character varying(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "devices" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "devices" ADD "name" character varying(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "devices" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "devices" ADD "type" character varying(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "devices" DROP COLUMN "madeBy"`);
        await queryRunner.query(`ALTER TABLE "devices" ADD "madeBy" character varying(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "device_info" DROP COLUMN "virtual_id"`);
        await queryRunner.query(`ALTER TABLE "device_info" ADD "virtual_id" character varying(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "device_info" DROP COLUMN "ip_address"`);
        await queryRunner.query(`ALTER TABLE "device_info" ADD "ip_address" character varying(15) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "device_info" DROP COLUMN "ip_address"`);
        await queryRunner.query(`ALTER TABLE "device_info" ADD "ip_address" character varying(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "device_info" DROP COLUMN "virtual_id"`);
        await queryRunner.query(`ALTER TABLE "device_info" ADD "virtual_id" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "devices" DROP COLUMN "madeBy"`);
        await queryRunner.query(`ALTER TABLE "devices" ADD "madeBy" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "devices" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "devices" ADD "type" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "devices" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "devices" ADD "name" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "device_info" DROP COLUMN "ip_address"`);
        await queryRunner.query(`ALTER TABLE "device_info" ADD "ip_address" character varying(15) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "device_info" DROP COLUMN "virtual_id"`);
        await queryRunner.query(`ALTER TABLE "device_info" ADD "virtual_id" character varying(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "devices" DROP COLUMN "madeBy"`);
        await queryRunner.query(`ALTER TABLE "devices" ADD "madeBy" character varying(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "devices" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "devices" ADD "type" character varying(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "devices" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "devices" ADD "name" character varying(30) NOT NULL`);
    }

}
