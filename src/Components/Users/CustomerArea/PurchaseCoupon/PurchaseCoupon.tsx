import "./PurchaseCoupon.css";
import {Button, ButtonGroup, TextField} from "@material-ui/core";
import {useForm} from "react-hook-form";
import globals from "../../../../Services/Globals/MethodsUri";
import security from "../../../../Services/Security/Security";
import notify from "../../../../Services/Notifications/Notifications";

interface FormToSend {
    couponId: number;
}

function PurchaseCoupon(): JSX.Element {

    const {register, handleSubmit} = useForm<FormToSend>();
    async function send(couponId: FormToSend) {
        try {
            await security.put(
                globals.customerUris.customerPurchaseCoupon + "/" + couponId.couponId
            );
            notify.success("The coupon was purchased successfully!")
        } catch (err) {
            notify.error(err);
        }
    }


    return (
        <form className="methodBox" onSubmit={handleSubmit(send)}>
            <TextField
                className="button"
                {...register("couponId")}
                label="Coupon ID"
                variant="filled"
                type="number"
                required
                fullWidth
            />

            <ButtonGroup variant="text" fullWidth>
                <Button type="submit" color="primary" variant="outlined">
                    Send
                </Button>
            </ButtonGroup>
        </form>
    );
}

export default PurchaseCoupon;
