"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
// Define the EntitySchema using the interface
exports.UserEntity = new typeorm_1.EntitySchema({
    name: 'User',
    tableName: 'users',
    columns: {
        user_id: {
            primary: true,
            type: 'uuid',
            generated: 'uuid',
        },
        email: {
            type: 'text',
            unique: true,
        },
        phone: {
            type: 'text',
            unique: true,
            nullable: true,
        },
        display_name: {
            type: 'text',
            nullable: true,
        },
        date_of_birth: {
            type: 'date',
            nullable: true,
        },
        gender: {
            type: 'text',
            nullable: true,
        },
        location: {
            type: 'geography',
            spatialFeatureType: 'Point',
            srid: 4326,
            nullable: true,
        },
        firebase_id: {
            type: 'text',
            nullable: true,
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
    indices: [
        {
            name: 'idx_users_location',
            columns: ['location'],
            spatial: true,
        },
    ],
});
exports.default = exports.UserEntity;
//# sourceMappingURL=user.model.js.map