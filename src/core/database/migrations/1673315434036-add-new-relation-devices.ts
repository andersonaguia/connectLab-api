import { MigrationInterface, QueryRunner } from "typeorm";

export class addNewRelationDevices1673315434036 implements MigrationInterface {
    name = 'addNewRelationDevices1673315434036'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_devices" ADD "device_id" integer`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD CONSTRAINT "UQ_7c0755b2e06094d9dfb353a3772" UNIQUE ("device_id")`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD CONSTRAINT "FK_7c0755b2e06094d9dfb353a3772" FOREIGN KEY ("device_id") REFERENCES "devices"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_devices" DROP CONSTRAINT "FK_7c0755b2e06094d9dfb353a3772"`);
        await queryRunner.query(`ALTER TABLE "user_devices" DROP CONSTRAINT "UQ_7c0755b2e06094d9dfb353a3772"`);
        await queryRunner.query(`ALTER TABLE "user_devices" DROP COLUMN "device_id"`);
    }

}
