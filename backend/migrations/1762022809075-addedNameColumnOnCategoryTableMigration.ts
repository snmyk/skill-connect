import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedNameColumnOnCategoryTableMigration1762022809075 implements MigrationInterface {
    name = 'AddedNameColumnOnCategoryTableMigration1762022809075'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" ADD "name" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "name"`);
    }

}
