import CompanyModel from "../CompanyModel/CompanyModel";

// TODO -- Remove undefined if possible
export class CouponModel {
    id: number | undefined;
    price: number | undefined;
    company: CompanyModel | undefined;
    amount: number | undefined;
    title: string | undefined;
    description: string | undefined;
    image: string | undefined;
    startDate: Date | undefined;
    endDate: Date | undefined;
    category: CouponCategory | undefined;
}

export enum CouponCategory {
    FOOD = "FOOD",
    ELECTRICITY = "ELECTRICITY",
    RESTAURANT = "RESTAURANT",
    VACATION = "VACATION",
    GARMENT = "GARMENT",
    BOOK = "BOOK"
}

export default CouponModel;