import { EntitySchema } from "typeorm";
export interface Category {
    category_id: string;
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
}
export declare const categoryEntity: EntitySchema<Category>;
export default categoryEntity;
//# sourceMappingURL=category.model.d.ts.map