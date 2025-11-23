import { Decimal128, EntitySchema } from "typeorm";
import { Category } from "./category.model";
export interface Service {
    category: Category;
    service_id: string;
    serviceName: string;
    available: boolean;
    isPrimaryService: string;
    ratePerHour: Decimal128;
    description: string;
    created_at: Date;
    updated_at: Date;
    experience: number;
}
export declare const serviceEntity: EntitySchema<Service>;
export default serviceEntity;
//# sourceMappingURL=service.model.d.ts.map