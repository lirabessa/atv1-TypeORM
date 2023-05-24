import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1683145346200 implements MigrationInterface {
    name = 'Default1683145346200'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_matches" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "date" date NOT NULL DEFAULT (CURRENT_TIMESTAMP), "idhost" integer, "idvisitor" integer)`);
        await queryRunner.query(`INSERT INTO "temporary_matches"("id", "date") SELECT "id", "date" FROM "matches"`);
        await queryRunner.query(`DROP TABLE "matches"`);
        await queryRunner.query(`ALTER TABLE "temporary_matches" RENAME TO "matches"`);
        await queryRunner.query(`CREATE TABLE "temporary_matches" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "date" date NOT NULL DEFAULT (CURRENT_TIMESTAMP), "idhost" integer, "idvisitor" integer, CONSTRAINT "fk_host_id" FOREIGN KEY ("idhost") REFERENCES "Team" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "fk_visitor_id" FOREIGN KEY ("idvisitor") REFERENCES "Team" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`);
        await queryRunner.query(`INSERT INTO "temporary_matches"("id", "date", "idhost", "idvisitor") SELECT "id", "date", "idhost", "idvisitor" FROM "matches"`);
        await queryRunner.query(`DROP TABLE "matches"`);
        await queryRunner.query(`ALTER TABLE "temporary_matches" RENAME TO "matches"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "matches" RENAME TO "temporary_matches"`);
        await queryRunner.query(`CREATE TABLE "matches" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "date" date NOT NULL DEFAULT (CURRENT_TIMESTAMP), "idhost" integer, "idvisitor" integer)`);
        await queryRunner.query(`INSERT INTO "matches"("id", "date", "idhost", "idvisitor") SELECT "id", "date", "idhost", "idvisitor" FROM "temporary_matches"`);
        await queryRunner.query(`DROP TABLE "temporary_matches"`);
        await queryRunner.query(`ALTER TABLE "matches" RENAME TO "temporary_matches"`);
        await queryRunner.query(`CREATE TABLE "matches" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "date" date NOT NULL DEFAULT (CURRENT_TIMESTAMP))`);
        await queryRunner.query(`INSERT INTO "matches"("id", "date") SELECT "id", "date" FROM "temporary_matches"`);
        await queryRunner.query(`DROP TABLE "temporary_matches"`);
    }

}
