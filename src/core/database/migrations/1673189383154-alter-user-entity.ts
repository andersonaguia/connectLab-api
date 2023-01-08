import { MigrationInterface, QueryRunner } from "typeorm";

export class alterUserEntity1673189383154 implements MigrationInterface {
    name = 'alterUserEntity1673189383154'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "confirmationToken"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "recoverToken"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "recoverToken" character varying(64) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "confirmationToken" character varying(64) NOT NULL`);
    }

}
