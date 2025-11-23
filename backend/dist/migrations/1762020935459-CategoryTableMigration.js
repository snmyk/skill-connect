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
exports.CategoryTableMigration1762020935459 = void 0;
class CategoryTableMigration1762020935459 {
    constructor() {
        this.name = 'CategoryTableMigration1762020935459';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "categoeies" ("category_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" text NOT NULL, CONSTRAINT "PK_11e659e7b5de3959c1248d0b54a" PRIMARY KEY ("category_id"))`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DROP TABLE "categoeies"`);
        });
    }
}
exports.CategoryTableMigration1762020935459 = CategoryTableMigration1762020935459;
//# sourceMappingURL=1762020935459-CategoryTableMigration.js.map