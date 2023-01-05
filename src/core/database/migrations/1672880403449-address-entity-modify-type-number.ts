import { MigrationInterface, QueryRunner } from "typeorm";

export class addressEntityModifyTypeNumber1672880403449 implements MigrationInterface {
    name = 'addressEntityModifyTypeNumber1672880403449'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD "number" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD "number" character varying(10) NOT NULL`);
    }

}
