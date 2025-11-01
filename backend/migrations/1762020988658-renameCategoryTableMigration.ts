import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameCategoryTableMigration1762020988658 implements MigrationInterface {
    name = 'RenameCategoryTableMigration1762020988658'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(`CREATE TABLE "categories" ("category_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" text NOT NULL, CONSTRAINT "PK_51615bef2cea22812d0dcab6e18" PRIMARY KEY ("category_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(`DROP TABLE "categories"`);
    }

}
