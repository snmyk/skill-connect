import { EntitySchema } from 'typeorm';

// Define a TypeScript interface for the entity
export interface User {
  user_id: string;
  email: string;
  phone?: string | null;
  display_name?: string | null;
  date_of_birth?: Date | null;
  gender?: string | null;
  location?: object | null; // You can use GeoJSON type if needed
  firebase_id?: string | null;
  created_at: Date;
  updated_at: Date;
}

// Define the EntitySchema using the interface
export const UserEntity = new EntitySchema<User>({
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

export default UserEntity;
