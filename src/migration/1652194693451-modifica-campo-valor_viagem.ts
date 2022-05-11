import {MigrationInterface, QueryRunner} from "typeorm";

export class modificaCampoValorViagem1652194693451 implements MigrationInterface {
    name = 'modificaCampoValorViagem1652194693451'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "viagem" DROP COLUMN "valor_viagem"`);
        await queryRunner.query(`ALTER TABLE "viagem" ADD "valor_viagem" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "viagem" DROP COLUMN "valor_viagem"`);
        await queryRunner.query(`ALTER TABLE "viagem" ADD "valor_viagem" TIMESTAMP`);
    }

}
