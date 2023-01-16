import { MigrationInterface, QueryRunner } from "typeorm";

export class location1673878574527 implements MigrationInterface {
    name = 'location1673878574527'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_devices" DROP CONSTRAINT "FK_de951e3857caa049b381b9718be"`);
        await queryRunner.query(`ALTER TABLE "user_devices" RENAME COLUMN "deviceLocation_id" TO "deviceLocation"`);
        await queryRunner.query(`ALTER TABLE "user_devices" RENAME COLUMN "deviceLocation" TO "deviceLocation_id"`);
        await queryRunner.query(`ALTER TABLE "user_devices" DROP COLUMN "deviceLocation_id"`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD "deviceLocation" integer`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD "deviceLocation_id" integer`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD CONSTRAINT "FK_5aa9711f8ba782b276c3620d105" FOREIGN KEY ("deviceLocation") REFERENCES "user_devices_location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD CONSTRAINT "FK_de951e3857caa049b381b9718be" FOREIGN KEY ("deviceLocation_id") REFERENCES "user_devices_location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_devices" DROP CONSTRAINT "FK_de951e3857caa049b381b9718be"`);
        await queryRunner.query(`ALTER TABLE "user_devices" DROP CONSTRAINT "FK_5aa9711f8ba782b276c3620d105"`);
        await queryRunner.query(`ALTER TABLE "user_devices" DROP COLUMN "deviceLocation_id"`);
        await queryRunner.query(`ALTER TABLE "user_devices" DROP COLUMN "deviceLocation"`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD "deviceLocation_id" integer`);
        await queryRunner.query(`ALTER TABLE "user_devices" RENAME COLUMN "deviceLocation_id" TO "deviceLocation"`);
        await queryRunner.query(`ALTER TABLE "user_devices" RENAME COLUMN "deviceLocation" TO "deviceLocation_id"`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD CONSTRAINT "FK_de951e3857caa049b381b9718be" FOREIGN KEY ("deviceLocation_id") REFERENCES "user_devices_location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
