import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedServiceTableMigration1762024774711 implements MigrationInterface {
    name = 'AddedServiceTableMigration1762024774711'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "services" ("service_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "serviceName" text NOT NULL, "available" boolean NOT NULL, "isPrimaryService" boolean, "ratePerHour" numeric NOT NULL, "description" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "experience" integer NOT NULL, "category_id" uuid, CONSTRAINT "PK_ef0531b9789b488593690ab8d5d" PRIMARY KEY ("service_id"))`);
        await queryRunner.query(`ALTER TABLE "services" ADD CONSTRAINT "FK_1f8d1173481678a035b4a81a4ec" FOREIGN KEY ("category_id") REFERENCES "categories"("category_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "services" DROP CONSTRAINT "FK_1f8d1173481678a035b4a81a4ec"`);
        await queryRunner.query(`DROP TABLE "services"`);
    }

}
