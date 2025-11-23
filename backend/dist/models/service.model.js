"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceEntity = void 0;
const typeorm_1 = require("typeorm");
const category_model_1 = require("./category.model");
exports.serviceEntity = new typeorm_1.EntitySchema({
    name: 'Service',
    tableName: 'services',
    columns: {
        service_id: {
            primary: true,
            type: 'uuid',
            generated: 'uuid',
            nullable: false,
        },
        serviceName: {
            type: 'text',
            nullable: false,
        },
        available: {
            type: 'boolean',
            nullable: false,
        },
        isPrimaryService: {
            type: 'boolean',
            nullable: true,
        },
        ratePerHour: {
            type: 'decimal'
        },
        description: {
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
        experience: {
            type: 'int',
        }
    },
    relations: {
        category: {
            type: 'many-to-one',
            target: category_model_1.categoryEntity,
            joinColumn: { name: 'category_id' },
        },
    },
});
exports.default = exports.serviceEntity;
//# sourceMappingURL=service.model.js.map