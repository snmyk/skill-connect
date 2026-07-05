import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "User",
  tableName: "users",

  columns: {
    id: {
      primary: true,
      generated: "increment",
      type: "int",
    },

    firebaseUid: {
      type: "varchar",
      unique: true,
    },

    email: {
      type: "varchar",
      unique: true,
    },

    firstName: {
      type: "varchar",
    },

    lastName: {
      type: "varchar",
    },

    phoneNumber: {
      type: "varchar",
    },

    location: {
      type: "varchar",
    },

    createdAt: {
      type: "timestamp",
      createDate: true,
    },

    updatedAt: {
      type: "timestamp",
      updateDate: true,
    },
  },

  // ✅ relations must be OUTSIDE columns
  relations: {
    role: {
      type: "many-to-one",
      target: "Role",
      joinColumn: {
        name: "role_id",
      },
      nullable: false,
      eager: true,
    },
  },
});