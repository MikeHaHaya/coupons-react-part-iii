import "./GetCoupons.css";
import {Component} from "react";
import {CouponModel} from "../../../../Models/CouponModel/CouponModel";
import globals from "../../../../Services/Globals/MethodsUri";
import security from "../../../../Services/Security/Security";
import notify from "../../../../Services/Notifications/Notifications";
import CustomerModel from "../../../../Models/CustomerModel/CustomerModel";
import CouponCard from "../../CouponsArea/CouponCard";

interface GetCouponsState {
    coupons: CouponModel[];
}

class GetCoupons extends Component<{}, GetCouponsState> {
    public constructor(props: {}) {
        super(props);
        this.state = {
            coupons: [],
        };
    }

    public async componentDidMount() {
        try {
            const response = await security.get<CustomerModel[]>(
                globals.customerUris.customerGetCoupons
            );
        } catch (err) {
            notify.error(err);
        }
    }

    public render(): JSX.Element {
        return (
            <ul className="CustomerMenu">
                <CouponCard coupons={this.state.coupons}/>
            </ul>
        );
    }
}


export default GetCoupons;
