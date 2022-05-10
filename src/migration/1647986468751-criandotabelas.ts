import { MigrationInterface, QueryRunner } from 'typeorm';

export class criandotabelas1647986468751 implements MigrationInterface {
  name = 'criandotabelas1647986468751';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "administrador" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "hashSenha" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_a84433082c320e8c25abe76c52e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "passageiro" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "hashSenha" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_3930f093a32a72b280fbaac3d53" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "funcionario" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "hashSenha" character varying NOT NULL, "email" character varying NOT NULL, "companhiaId" integer, CONSTRAINT "PK_2c5d0c275b4f652fd5cb381655f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "onibus" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "assentos" integer NOT NULL, "companhiaId" integer, CONSTRAINT "PK_7c7056ad0f3ec964a94bdf9b188" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "companhia" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, CONSTRAINT "PK_6cf9690ce0d03db0258cf7204a9" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "viagem" ("id" SERIAL NOT NULL, "cidade_origem" character varying NOT NULL, "cidade_destino" character varying NOT NULL, "data_saida" TIMESTAMP, "valor_viagem" TIMESTAMP, "assentos_disponiveis" integer NOT NULL, "ativo" boolean NOT NULL, "companhiaId" integer, "onibusId" integer, CONSTRAINT "PK_a2191e12f865bbe656e9a958f72" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "bilhete" ("id" SERIAL NOT NULL, "valor" integer NOT NULL, "ativo" boolean NOT NULL, "cancelado" boolean NOT NULL, "passageiroId" integer, "viagemId" integer, CONSTRAINT "PK_5042dd7ebb60c9d800eb2f7a41d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "funcionario" ADD CONSTRAINT "FK_11cbe6dfe5c10ff3245a090d845" FOREIGN KEY ("companhiaId") REFERENCES "companhia"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "onibus" ADD CONSTRAINT "FK_21f638d86c3cbf9c033cec6e1c4" FOREIGN KEY ("companhiaId") REFERENCES "companhia"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "viagem" ADD CONSTRAINT "FK_d3099b28c3457f364bbc7459949" FOREIGN KEY ("companhiaId") REFERENCES "companhia"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "viagem" ADD CONSTRAINT "FK_9a25dba63642612aef5b61bbf5e" FOREIGN KEY ("onibusId") REFERENCES "onibus"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "bilhete" ADD CONSTRAINT "FK_cbe6c674f55851831f8358516b5" FOREIGN KEY ("passageiroId") REFERENCES "passageiro"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "bilhete" ADD CONSTRAINT "FK_fab48b94d9bffa29bb3a3888c9a" FOREIGN KEY ("viagemId") REFERENCES "viagem"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "bilhete" DROP CONSTRAINT "FK_fab48b94d9bffa29bb3a3888c9a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "bilhete" DROP CONSTRAINT "FK_cbe6c674f55851831f8358516b5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "viagem" DROP CONSTRAINT "FK_9a25dba63642612aef5b61bbf5e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "viagem" DROP CONSTRAINT "FK_d3099b28c3457f364bbc7459949"`,
    );
    await queryRunner.query(
      `ALTER TABLE "onibus" DROP CONSTRAINT "FK_21f638d86c3cbf9c033cec6e1c4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "funcionario" DROP CONSTRAINT "FK_11cbe6dfe5c10ff3245a090d845"`,
    );
    await queryRunner.query(`DROP TABLE "bilhete"`);
    await queryRunner.query(`DROP TABLE "viagem"`);
    await queryRunner.query(`DROP TABLE "companhia"`);
    await queryRunner.query(`DROP TABLE "onibus"`);
    await queryRunner.query(`DROP TABLE "funcionario"`);
    await queryRunner.query(`DROP TABLE "passageiro"`);
    await queryRunner.query(`DROP TABLE "administrador"`);
  }
}
