"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddedReviewTableMigration1762026195336 = void 0;
class AddedReviewTableMigration1762026195336 {
    constructor() {
        this.name = 'AddedReviewTableMigration1762026195336';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "reviews" ("review_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "comment" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "rating" integer NOT NULL, "service_id" uuid, "user_id" uuid, CONSTRAINT "PK_bfe951d9dca4ba99674c5772905" PRIMARY KEY ("review_id"))`);
            yield queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_6587db79174d07150fde1f1a4d6" FOREIGN KEY ("service_id") REFERENCES "services"("service_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_728447781a30bc3fcfe5c2f1cdf" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_728447781a30bc3fcfe5c2f1cdf"`);
            yield queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_6587db79174d07150fde1f1a4d6"`);
            yield queryRunner.query(`DROP TABLE "reviews"`);
        });
    }
}
exports.AddedReviewTableMigration1762026195336 = AddedReviewTableMigration1762026195336;
//# sourceMappingURL=1762026195336-addedReviewTableMigration.js.map