import { EntitySchema } from "typeorm";

export interface Category {
  category_id: string;
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}

export const categoryEntity = new EntitySchema<Category>({
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

export default categoryEntity;