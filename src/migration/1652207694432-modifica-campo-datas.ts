import {MigrationInterface, QueryRunner} from "typeorm";

export class modificaCampoDatas1652207694432 implements MigrationInterface {
    name = 'modificaCampoDatas1652207694432'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "viagem" DROP COLUMN "data_saida"`);
        await queryRunner.query(`ALTER TABLE "viagem" ADD "data_origem" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "viagem" ADD "data_destino" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "viagem" DROP COLUMN "data_destino"`);
        await queryRunner.query(`ALTER TABLE "viagem" DROP COLUMN "data_origem"`);
        await queryRunner.query(`ALTER TABLE "viagem" ADD "data_saida" TIMESTAMP`);
    }

}
