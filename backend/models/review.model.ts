import { Decimal128, EntitySchema } from "typeorm";
import { Category, categoryEntity } from "./category.model";
import serviceEntity, { Service } from "./service.model";
import UserEntity, { User } from "./user.model";


export interface Review {
  review_id: string;
  service: Service;
  user: User;
  created_at: Date;
  updated_at: Date;
  rating: number; //number of years or months
  comment: string;
}

export const reviewEntity = new EntitySchema<Review>({
  name: 'Review',
  tableName: 'reviews',
  columns: {
    review_id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
      nullable: false,
    },
    comment:{
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
      target: serviceEntity,
      joinColumn: { name: 'service_id' },
    },
    user: {
      type: 'many-to-one',
      target: UserEntity,
      joinColumn: { name: 'user_id' },
    },
  },
});

export default reviewEntity;