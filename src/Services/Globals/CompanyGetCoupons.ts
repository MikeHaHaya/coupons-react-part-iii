// Get Lists
import security from "../Security/Security";
import CouponModel, {CouponCategory} from "../../Models/CouponModel/CouponModel";
import globals from "./MethodsUri";
import notify from "../Notifications/Notifications";
import {Component} from "react";

interface props {
    coupons: CouponModel[];
}

class CompanyGetCoupons extends Component<{}, props> {

    public static state = {
        coupons: [] as CouponModel[]
    }

    public static async refreshCoupons() {

        try {
            const response = await security.get<CouponModel[]>(
                globals.companyUris.companyGetCoupons
            );
            CompanyGetCoupons.state.coupons = response.data;
        } catch (err) {
            notify.error(err);
        }
    }
}

export default CompanyGetCoupons;

