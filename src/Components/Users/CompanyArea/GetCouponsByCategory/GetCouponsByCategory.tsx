import "./GetCouponsByCategory.css";
import { InputLabel, MenuItem, Select, Typography } from "@material-ui/core";
import { Component } from "react";
import {CouponModel} from "../../../../Models/CouponModel/CouponModel";
import globals from "../../../../Services/Globals/MethodsUri";
import security from "../../../../Services/Security/Security";
import notify from "../../../../Services/Notifications/Notifications";

interface GetCouponsByCategoryState {
    coupons: CouponModel[];
}

class GetCouponsByCategory extends Component<
    {},
    GetCouponsByCategoryState
    > {
    public constructor(props: {}) {
        super(props);
        this.state = {
            coupons: [],
        };
    }

    public render(): JSX.Element {
        return (
            <>
                <Typography align="center" variant="h3">
                    Category to Show:
                </Typography>
                <Select
                    variant="filled"
                    fullWidth
                    onChange={async (selectItem) => {
                        try {
                            const response = await security.get<CouponModel[]>(
                                globals.companyUris.companyGetCouponsByCategory +
                                "/" + selectItem.target.value
                            );

                            // let the user know he has no coupons in the category
                            this.setState({ coupons: response.data });
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

            </>
        );
    }
}

export default GetCouponsByCategory;
