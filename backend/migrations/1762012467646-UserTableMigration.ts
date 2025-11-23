import { MigrationInterface, QueryRunner } from "typeorm";

export class UserTableMigration1762012467646 implements MigrationInterface {
    name = 'UserTableMigration1762012467646'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("user_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" text NOT NULL, "phone" text, "display_name" text, "date_of_birth" date, "gender" text, "location" geography(Point,4326), "firebase_id" text, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_a000cca60bcf04454e727699490" UNIQUE ("phone"), CONSTRAINT "PK_96aac72f1574b88752e9fb00089" PRIMARY KEY ("user_id"))`);
        await queryRunner.query(`CREATE INDEX "idx_users_location" ON "users" USING GiST ("location") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."idx_users_location"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
