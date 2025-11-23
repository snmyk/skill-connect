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
exports.RenameCategoryTableMigration1762020988658 = void 0;
class RenameCategoryTableMigration1762020988658 {
    constructor() {
        this.name = 'RenameCategoryTableMigration1762020988658';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            // await queryRunner.query(`CREATE TABLE "categories" ("category_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" text NOT NULL, CONSTRAINT "PK_51615bef2cea22812d0dcab6e18" PRIMARY KEY ("category_id"))`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            // await queryRunner.query(`DROP TABLE "categories"`);
        });
    }
}
exports.RenameCategoryTableMigration1762020988658 = RenameCategoryTableMigration1762020988658;
//# sourceMappingURL=1762020988658-renameCategoryTableMigration.js.map