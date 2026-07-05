// src/entities/Role.js

import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "Role",
  tableName: "roles",

  columns: {
    id: {
      primary: true,
      generated: "increment",
      type: "int",
    },

    name: {
      type: "varchar",
      unique: true,
    },
  },

  relations: {
    users: {
      type: "one-to-many",
      target: "User",
      inverseSide: "role",
    },
  },
});