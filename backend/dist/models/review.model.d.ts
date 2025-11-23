import { EntitySchema } from "typeorm";
import { Service } from "./service.model";
import { User } from "./user.model";
export interface Review {
    review_id: string;
    service: Service;
    user: User;
    created_at: Date;
    updated_at: Date;
    rating: number;
    comment: string;
}
export declare const reviewEntity: EntitySchema<Review>;
export default reviewEntity;
//# sourceMappingURL=review.model.d.ts.map