import { MigrationInterface, QueryRunner } from "typeorm";

export class modifyRelationsUserDevices1673313132882 implements MigrationInterface {
    name = 'modifyRelationsUserDevices1673313132882'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_27d24ea6187f214a470e733d9d8"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_27d24ea6187f214a470e733d9d8"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "userDevices_id"`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD "user_id" integer`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD CONSTRAINT "FK_28bd79e1b3f7c1168f0904ce241" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_devices" DROP CONSTRAINT "FK_28bd79e1b3f7c1168f0904ce241"`);
        await queryRunner.query(`ALTER TABLE "user_devices" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "userDevices_id" integer`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_27d24ea6187f214a470e733d9d8" UNIQUE ("userDevices_id")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_27d24ea6187f214a470e733d9d8" FOREIGN KEY ("userDevices_id") REFERENCES "user_devices"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
