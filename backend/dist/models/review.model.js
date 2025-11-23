"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewEntity = void 0;
const typeorm_1 = require("typeorm");
const service_model_1 = __importDefault(require("./service.model"));
const user_model_1 = __importDefault(require("./user.model"));
exports.reviewEntity = new typeorm_1.EntitySchema({
    name: 'Review',
    tableName: 'reviews',
    columns: {
        review_id: {
            primary: true,
            type: 'uuid',
            generated: 'uuid',
            nullable: false,
        },
        comment: {
            type: 'text',
        },
        created_at: {
            type: 'timestamp',
            createDate: true,
        },
        updated_at: {
            type: 'timestamp',
            updateDate: true,
        },
        rating: {
            type: 'int',
        }
    },
    relations: {
        service: {
            type: 'many-to-one',
            target: service_model_1.default,
            joinColumn: { name: 'service_id' },
        },
        user: {
            type: 'many-to-one',
            target: user_model_1.default,
            joinColumn: { name: 'user_id' },
        },
    },
});
exports.default = exports.reviewEntity;
//# sourceMappingURL=review.model.js.map