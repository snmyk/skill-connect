import { MigrationInterface, QueryRunner } from "typeorm";

export class CategoryTableMigration1762020935459 implements MigrationInterface {
    name = 'CategoryTableMigration1762020935459'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categoeies" ("category_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" text NOT NULL, CONSTRAINT "PK_11e659e7b5de3959c1248d0b54a" PRIMARY KEY ("category_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "categoeies"`);
    }

}
