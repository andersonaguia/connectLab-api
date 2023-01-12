import { MigrationInterface, QueryRunner } from "typeorm";

export class changeUserEntityOndelete1673541230609 implements MigrationInterface {
    name = 'changeUserEntityOndelete1673541230609'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "devices" DROP CONSTRAINT "FK_c9efafd532b9b61dcb6453a89d1"`);
        await queryRunner.query(`ALTER TABLE "devices" ADD CONSTRAINT "FK_c9efafd532b9b61dcb6453a89d1" FOREIGN KEY ("deviceInfo_id") REFERENCES "device_info"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "devices" DROP CONSTRAINT "FK_c9efafd532b9b61dcb6453a89d1"`);
        await queryRunner.query(`ALTER TABLE "devices" ADD CONSTRAINT "FK_c9efafd532b9b61dcb6453a89d1" FOREIGN KEY ("deviceInfo_id") REFERENCES "device_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
