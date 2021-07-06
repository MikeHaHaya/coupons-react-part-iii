import "./GetCouponsByMaxPrice.css";
import {Button, TextField} from "@material-ui/core";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {CouponModel} from "../../../../Models/CouponModel/CouponModel";
import globals from "../../../../Services/Globals/MethodsUri";
import security from "../../../../Services/Security/Security";
import notify from "../../../../Services/Notifications/Notifications";

interface enteredPrice {
    maxPrice: number;
}

function GetCouponsByMaxPrice(): JSX.Element {
    const [coupons, setCoupons] = useState<Array<CouponModel>>([]);
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<enteredPrice>();

    async function send(price: enteredPrice) {

        try {
            const response = await security.get<CouponModel[]>(
                globals.companyUris.companyGetCouponsByMaxPrice + "/" + price.maxPrice
            );

            setCoupons(response.data);
        } catch (err) {
            notify.error(err);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(send)}>
                <TextField
                    {...register("maxPrice", {
                        pattern: {
                            value: /^\d*\.?\d*$/,
                            message: "The price has to be a legal number!",
                        },
                        min: {
                            value: 0,
                            message:
                                "Negative numbers don't work... Try to be positive for a change.",
                        },
                    })}
                    label="Maximum Price"
                    variant="standard"
                    type="text"
                    required
                />
                {errors.maxPrice && (
                    <span className="errorMessage">
                        <br/>
                        {errors.maxPrice.message}
                        <br/>
                    </span>
                )}
                <Button type="submit">send</Button>
            </form>
        </>
    );
}

export default GetCouponsByMaxPrice;
