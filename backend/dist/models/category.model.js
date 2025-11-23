"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryEntity = void 0;
const typeorm_1 = require("typeorm");
exports.categoryEntity = new typeorm_1.EntitySchema({
    name: 'category',
    tableName: 'categories',
    columns: {
        category_id: {
            primary: true,
            type: 'uuid',
            generated: 'uuid',
        },
        description: {
            type: 'text',
        },
        name: {
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
    },
});
exports.default = exports.categoryEntity;
//# sourceMappingURL=category.model.js.map