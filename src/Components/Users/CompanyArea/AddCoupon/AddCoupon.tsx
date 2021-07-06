import "./AddCoupon.css";
import {
    Button,
    ButtonGroup,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {CouponModel} from "../../../../Models/CouponModel/CouponModel";
import globals from "../../../../Services/Globals/MethodsUri";
import security from "../../../../Services/Security/Security";
import notify from "../../../../Services/Notifications/Notifications";

function AddCoupon(): JSX.Element {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<CouponModel>();

    async function send(coupon: CouponModel) {
        try {
            await security.post<CouponModel>(globals.companyUris.companyAddCoupon, coupon);
            notify.success("Your new coupon has been added successfully!")
        } catch (err) {
            notify.error(err);
        }
    }

    return (
        <form className="methodBox" onSubmit={handleSubmit(send)}>
            <Typography align="center" variant="h3" color="primary">
                Add A New Coupon
            </Typography>

            {/* Alerts the user of illegal character use. */}
            <TextField
                {...register("title", {
                    minLength: {
                        value: 3,
                        message: "The coupon's title must be at least 3 characters.",
                    },
                })}
                label="Title"
                variant="standard"
                type="text"
                required
            />
            {errors.title && (
                <span className="errorMessage">{errors.title.message}</span>
            )}

            <TextField
                {...register("amount", {
                        min: {
                            value: 1,
                            message:
                                "There must be at least 1 coupon in stock."
                        }
                    }
                )}
                label="Amount"
                variant="standard"
                type="number"
                required
            />
            {errors.amount && (
                <span className="errorMessage">{errors.amount.message}</span>
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
            />

            <TextField
                {...register("description")}
                label="Description"
                variant="standard"
            />

            <TextField
                {...register("startDate")}
                label="Set Start Date"
                type="date"
                required
            />

            <TextField
                {...register("endDate")}
                label="Set End Date"
                type="date"
                required
            />

            {errors.endDate && (
                <span className="errorMessage">
                    Illegal end date, try the future
        </span>
            )}

            <InputLabel>
                <br/>
                Category:
            </InputLabel>
            <Select {...register("category")} className="select" required>
                <InputLabel>Category</InputLabel>
                <MenuItem value="FOOD">Food</MenuItem>
                <MenuItem value="ELECTRICITY">Electricity</MenuItem>
                <MenuItem value="RESTAURANT">Restaurant</MenuItem>
                <MenuItem value="VACATION">Vacation</MenuItem>
                <MenuItem value="GARMENT">Garment</MenuItem>
                <MenuItem value="BOOK">Book</MenuItem>
            </Select>
            <ButtonGroup variant="text" fullWidth>
                <Button type="submit" color="primary">
                    ADD
                </Button>
            </ButtonGroup>
        </form>
    );
}

export default AddCoupon;
