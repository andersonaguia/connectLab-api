import { MigrationInterface, QueryRunner } from "typeorm";

export class saveEntity1673874440736 implements MigrationInterface {
    name = 'saveEntity1673874440736'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_devices_location" ("id" SERIAL NOT NULL, "deviceLocation" character varying(30) NOT NULL, CONSTRAINT "UQ_f1c7fd0e0034a3409b3188d369e" UNIQUE ("deviceLocation"), CONSTRAINT "PK_34fe9059c52c90b17a63c410e9e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD CONSTRAINT "FK_de951e3857caa049b381b9718be" FOREIGN KEY ("deviceLocation_id") REFERENCES "user_devices_location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_devices" DROP CONSTRAINT "FK_de951e3857caa049b381b9718be"`);
        await queryRunner.query(`DROP TABLE "user_devices_location"`);
    }

}
