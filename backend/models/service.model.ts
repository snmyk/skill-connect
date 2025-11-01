import { Decimal128, EntitySchema } from "typeorm";
import { Category, categoryEntity } from "./category.model";


export interface Service {
  category: Category;
  service_id: string;
  serviceName: string;
  available: boolean; //active and not 
  isPrimaryService: string;
  ratePerHour: Decimal128;
  description: string;
  created_at: Date;
  updated_at: Date;
  experience: number; //number of years or months
}

export const serviceEntity = new EntitySchema<Service>({
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
    description:{
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
      target: categoryEntity,
      joinColumn: { name: 'category_id' },
    },
  },
});

export default serviceEntity;