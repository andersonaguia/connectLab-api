import { MigrationInterface, QueryRunner } from "typeorm";

export class changeUserDeviceLocationEntity1673438614964 implements MigrationInterface {
    name = 'changeUserDeviceLocationEntity1673438614964'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_devices_location" DROP COLUMN "deviceLocation"`);
        await queryRunner.query(`CREATE TYPE "public"."user_devices_location_devicelocation_enum" AS ENUM('casa', 'escritorio', 'fabrica')`);
        await queryRunner.query(`ALTER TABLE "user_devices_location" ADD "deviceLocation" "public"."user_devices_location_devicelocation_enum" NOT NULL DEFAULT 'casa'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_devices_location" DROP COLUMN "deviceLocation"`);
        await queryRunner.query(`DROP TYPE "public"."user_devices_location_devicelocation_enum"`);
        await queryRunner.query(`ALTER TABLE "user_devices_location" ADD "deviceLocation" character varying(30) NOT NULL`);
    }

}
