import "./DeleteCoupon.css";
import {
    Button,
    ButtonGroup, FormControl, InputLabel, MenuItem, Select,
    Typography,
} from "@material-ui/core";
import {useForm} from "react-hook-form";
import CouponModel from "../../../../Models/CouponModel/CouponModel";
import globals from "../../../../Services/Globals/MethodsUri";
import security from "../../../../Services/Security/Security";
import notify from "../../../../Services/Notifications/Notifications";
import CompanyGetCoupons from "../../../../Services/Globals/CompanyGetCoupons";

function DeleteCoupon(): JSX.Element {

    const {handleSubmit} = useForm<CouponModel>();

    // Sends the delete request
    async function send(coupon: CouponModel) {
        try {
            await security.delete<CouponModel>(
                globals.companyUris.companyDeleteCoupon + "/" + coupon.id)
            notify.success("The coupon has been deleted successfully");

        } catch (err) {
            notify.error(err);
        }
    }

    CompanyGetCoupons.refreshCoupons();

    return (
        <form className="methodBox" onSubmit={handleSubmit(send)}>

            <Typography align="center" variant="h3">
                Delete A Coupon
            </Typography>

            {/* Select Coupon Box */}
            <FormControl>
                <InputLabel>Coupon</InputLabel>
                <Select variant="outlined" fullWidth required>
                    <InputLabel>SELECT A COUPON TO DELETE</InputLabel>

                    {/* Coupon Array */}
                    {CompanyGetCoupons.state.coupons.map((coupon) => (
                            <MenuItem value={coupon.id}>{coupon.title}</MenuItem>
                        )
                    )}
                </Select>
            </FormControl>
            <br/>
            <br/>

            <ButtonGroup variant="text" fullWidth>
                <Button
                    className="submitButton"
                    type="submit"
                    color="primary"
                    variant="contained">
                    DELETE
                </Button>
            </ButtonGroup>

        </form>
    );
}

export default DeleteCoupon;
