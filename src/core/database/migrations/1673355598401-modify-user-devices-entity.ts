import { MigrationInterface, QueryRunner } from "typeorm";

export class modifyUserDevicesEntity1673355598401 implements MigrationInterface {
    name = 'modifyUserDevicesEntity1673355598401'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_devices" ADD "room" character varying(50) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_devices" DROP COLUMN "room"`);
    }

}
