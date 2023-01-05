import { MigrationInterface, QueryRunner } from "typeorm";

export class changeUserEntity1672925602321 implements MigrationInterface {
    name = 'changeUserEntity1672925602321'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "salt" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "active" boolean NOT NULL`);
        await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('admin', 'client')`);
        await queryRunner.query(`ALTER TABLE "users" ADD "role" "public"."users_role_enum" NOT NULL DEFAULT 'client'`);
        await queryRunner.query(`ALTER TABLE "users" ADD "confirmationToken" character varying(64) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "recoverToken" character varying(64) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "recoverToken"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "confirmationToken"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "role"`);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "active"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "salt"`);
    }

}
