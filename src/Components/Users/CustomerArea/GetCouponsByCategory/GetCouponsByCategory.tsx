import "./GetCouponsByCategory.css";
import {InputLabel, MenuItem, Select} from "@material-ui/core";
import {Component} from "react";
import {CouponModel} from "../../../../Models/CouponModel/CouponModel";
import globals from "../../../../Services/Globals/MethodsUri";
import jwtAxios from "../../../../Services/Security/Security";
import notify from "../../../../Services/Notifications/Notifications";
import CouponCard from "../../../Users/CouponsArea/CouponCard";


interface GetCustomerCouponsByCategoryState {
    coupons: CouponModel[];
    couponsReplacement: string;
}

class GetCustomerCouponsByCategory extends Component<{},
    GetCustomerCouponsByCategoryState> {
    public constructor(props: {}) {
        super(props);
        this.state = {
            coupons: [],
            couponsReplacement: "No category was chosen"
        };
    }

    public render(): JSX.Element {
        return (
            <>
                <InputLabel>Choose Category: </InputLabel>
                <Select
                    variant="filled"
                    fullWidth
                    onChange={async (selectItem) => {
                        try {
                            const response = await jwtAxios.get<CouponModel[]>(
                                globals.customerUris.customerGetCouponsByCategory + "/" +
                                selectItem.target.value
                            );
                            // let the user know he has no coupons in the category
                            if (response.data.length === 0) {
                                this.setState({couponsReplacement: "You have no coupons in this category"})
                            } else {
                                this.setState({couponsReplacement: ""})
                            }
                            this.setState({coupons: response.data});
                        } catch (err) {
                            notify.error(err);
                        }
                    }}
                >
                    <InputLabel>Category</InputLabel>
                    <MenuItem value="FOOD">Food</MenuItem>
                    <MenuItem value="ELECTRICITY">Electricity</MenuItem>
                    <MenuItem value="RESTAURANT">Restaurant</MenuItem>
                    <MenuItem value="VACATION">Vacation</MenuItem>
                    <MenuItem value="GARMENT">Garment</MenuItem>
                    <MenuItem value="BOOK">Book</MenuItem>
                </Select>

                <ul className="CustomerMenu">
                    <CouponCard coupons={this.state.coupons}/>
                    {this.state.couponsReplacement}
                </ul>
            </>
        );
    }
}

export default GetCustomerCouponsByCategory;