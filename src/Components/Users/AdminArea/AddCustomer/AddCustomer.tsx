import "./AddCustomer.css";
import {
    Button,
    ButtonGroup,
    TextField,
    Typography,
} from "@material-ui/core";
import {useForm} from "react-hook-form";
import CustomerModel from "../../../../Models/CustomerModel/CustomerModel";
import globals from "../../../../Services/Globals/MethodsUri";
import security from "../../../../Services/Security/Security";
import notify from "../../../../Services/Notifications/Notifications";

function AddCustomer(): JSX.Element {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<CustomerModel>();

    async function send(customer: CustomerModel) {
        try {
            await security.post<CustomerModel>(
              globals.adminUris.adminAddCustomer,customer
            );

            notify.success("The customer has been added successfully!");
        } catch (err) {
            notify.error(err);
        }
    }

    return (
        <form className="methodBox" onSubmit={handleSubmit(send)}>

            <Typography align="center" variant="h3">
                Create A New Customer
            </Typography>

            {/* First Name Field */}
            <TextField
                {...register("firstName")}
                label="First Name"
                variant="standard"
                type="text"
                required
                fullWidth
            />
            {errors.firstName && (
                <span className="ErrorMessage">{errors.firstName.message}</span>
            )}

            {/* Last Name Field */}
            <TextField
                {...register("lastName")}
                label="Last Name"
                variant="standard"
                type="text"
                required
                fullWidth
            />
            {errors.lastName && (
                <span className="ErrorMessage">{errors.lastName.message}</span>
            )}

            {/* Email Field */}
            <TextField
                {...register("email")}
                label="Email"
                variant="standard"
                type="text"
                required
                fullWidth
            />
            {errors.email && (
                <span className="ErrorMessage">{errors.email.message}</span>
            )}

            {/* Password Field */}
            <TextField
                {...register("password")}
                label="Password"
                variant="standard"
                type="password"
                required
                fullWidth
            />
            {errors.password && (
                <span className="ErrorMessage">{errors.password.message}</span>
            )}

            <ButtonGroup variant="text" fullWidth>
                <Button type="submit" color="primary">
                    CREATE
                </Button>
            </ButtonGroup>

        </form>
    )
}

export default AddCustomer;
