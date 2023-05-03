import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1682602055861 implements MigrationInterface {
    name = 'Default1682602055861'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Team" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(30) NOT NULL, CONSTRAINT "UQ_319e120005dff229ac97e9e21d7" UNIQUE ("name"))`);
        await queryRunner.query(`CREATE TABLE "matches" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "date" date NOT NULL DEFAULT (CURRENT_TIMESTAMP))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "matches"`);
        await queryRunner.query(`DROP TABLE "Team"`);
    }

}
