import "./UpdateCoupon.css";
import {
    Button,
    ButtonGroup, FormControl, InputLabel, MenuItem, Select,
    TextField,
    Typography,
} from "@material-ui/core";
import {useForm} from "react-hook-form";
import CouponModel from "../../../../Models/CouponModel/CouponModel";
import globals from "../../../../Services/Globals/MethodsUri";
import security from "../../../../Services/Security/Security";
import notify from "../../../../Services/Notifications/Notifications";
import CompanyGetCoupons from "../../../../Services/Globals/CompanyGetCoupons";

function UpdateCoupon(): JSX.Element {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<CouponModel>();

    async function send(coupon: CouponModel) {

        try {
            await security.put<CouponModel>(
                globals.companyUris.companyUpdateCoupon, coupon
            );
            notify.success("The coupon was successfully updated!")
        } catch (err) {
            notify.error(err)
        }
    }


    return (
        <form className="methodBox" onSubmit={handleSubmit(send)}>

            <Typography align="center" variant="h3">
                Update A Coupon
            </Typography>

            {/* Select Coupon Box */}
            <FormControl>
                <InputLabel>Coupon</InputLabel>
                <Select variant="outlined" fullWidth required>
                    <InputLabel>SELECT A COUPON TO UPDATE</InputLabel>

                    {/* Coupon Array */}
                    {CompanyGetCoupons.state.coupons.map((coupon) => (
                            <MenuItem value={coupon.id}>{coupon.title}</MenuItem>
                        )
                    )}
                </Select>
            </FormControl>
            <br/>
            <br/>

            <TextField
                {...register("title", {
                    minLength: {
                        value: 3,
                        message: "Title must be at least 3 characters.",
                    },
                })}
                label="Title"
                variant="standard"
                required
                fullWidth
            />
            {errors.title && (
                <span className="errorMessage">{errors.title.message}</span>
            )}

            <TextField
                {...register("description", {})}
                label="Description"
                variant="standard"
                required
                fullWidth
            />
            {errors.description && (
                <span className="errorMessage">{errors.description.message}</span>
            )}

            <TextField
                {...register("price", {
                    pattern: {
                        value: /^\d*\.?\d*$/,
                        message: "The price has to be a legal number!",
                    },
                    min: {
                        value: 0,
                        message:
                            "Negative numbers don't work... Try to be positive for a change.",
                    }
                })}
                label="Price"
                variant="standard"
                required
                fullWidth
            />
            {errors.price && (
                <span className="errorMessage">{errors.price.message}</span>
            )}

            <TextField
                {...register("amount", {})}
                label="Amount"
                variant="standard"
                required
                fullWidth
            />
            {errors.amount && (
                <span className="errorMessage">{errors.amount.message}</span>
            )}

            <TextField
                {...register("category", {})}
                label="Category"
                variant="standard"
                required
                fullWidth
            />
            {errors.category && (
                <span className="errorMessage">{errors.category.message}</span>
            )}

            <TextField
                {...register("startDate", {})}
                label="Start Date"
                variant="standard"
                required
                fullWidth
            />
            {errors.startDate && (
                <span className="errorMessage">{errors.startDate.message}</span>
            )}

            <TextField
                {...register("endDate", {})}
                label="End Date"
                variant="standard"
                required
                fullWidth
            />
            {errors.endDate && (
                <span className="errorMessage">{errors.endDate.message}</span>
            )}

            <ButtonGroup variant="text" fullWidth>
                <Button type="submit" color="primary">
                    UPDATE
                </Button>
            </ButtonGroup>
        </form>
    );
}

export default UpdateCoupon;
