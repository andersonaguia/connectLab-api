import { MigrationInterface, QueryRunner } from "typeorm";

export class changeUserDevice1673697182103 implements MigrationInterface {
    name = 'changeUserDevice1673697182103'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_devices" ALTER COLUMN "createdAt" SET DEFAULT '"2023-01-14T11:53:05.707Z"'`);
        await queryRunner.query(`ALTER TABLE "user_devices" ALTER COLUMN "updatedAt" SET DEFAULT '"2023-01-14T11:53:05.707Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_devices" ALTER COLUMN "updatedAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user_devices" ALTER COLUMN "createdAt" SET DEFAULT now()`);
    }

}
