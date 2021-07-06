import "./UpdateCustomer.css";
import {
    Button,
    ButtonGroup, FormControl, InputLabel, MenuItem, Select,
    TextField,
    Typography,
} from "@material-ui/core";
import {useForm} from "react-hook-form";
import CustomerModel from "../../../../Models/CustomerModel/CustomerModel";
import globals from "../../../../Services/Globals/MethodsUri";
import security from "../../../../Services/Security/Security";
import notify from "../../../../Services/Notifications/Notifications";
import AdminGetCustomers from "../../../../Services/Globals/AdminGetCustomers";

function UpdateCustomer(): JSX.Element {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<CustomerModel>();

    // Updates Customer
    async function send(customer: CustomerModel) {

        try{
            await security.put<CustomerModel>(
                globals.adminUris.adminUpdateCustomer, customer
            );
            notify.success("The customer was successfully updated!");

        } catch (err) {
            notify.error(err)
        }
    }

    return (
        <form className="methodBox" onSubmit={handleSubmit(send)}>

            <Typography align="center" variant="h3">
                Update A Customer
            </Typography>

            {/* Select Customer Box */}
            <FormControl>
                <InputLabel>Customer</InputLabel>
                <Select variant="outlined" fullWidth required>
                    <InputLabel>SELECT A CUSTOMER TO UPDATE</InputLabel>

                    {/* Customer Array */}
                    {AdminGetCustomers.state.customers.map((customer) => (
                            <MenuItem value={customer.id}>
                                {customer.firstName + " " + customer.lastName}
                            </MenuItem>
                        )
                    )}
                </Select>
            </FormControl>
            <br/>
            <br/>

            <TextField
                {...register("firstName", {
                    minLength: {
                        value: 3,
                        message: "First Name must be at least 3 characters.",
                    },
                })}
                label="First Name"
                variant="standard"
                required
                fullWidth
            />
            {errors.firstName && (
                <span className="errorMessage">{errors.firstName.message}</span>
            )}

            <TextField
                {...register("lastName", {
                    minLength: {
                        value: 3,
                        message: "Last Name must be at least 3 characters.",
                    },
                })}
                label="Last Name"
                variant="standard"
                required
                fullWidth
            />
            {errors.lastName && (
                <span className="ErrorMessage">{errors.lastName.message}</span>
            )}

            <TextField
                {...register("email", {
                    minLength: {
                        value: 3,
                        message: "Email must be at least 3 characters.",
                    },
                })}
                label="Email"
                variant="standard"
                required
                fullWidth
            />
            {errors.email && (
                <span className="errorMessage">{errors.email.message}</span>
            )}

            <TextField
                {...register("password", {
                    minLength: {
                        value: 6,
                        message: "Passwords must be at least 6 characters.",
                    },
                })}
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
                    Send
                </Button>
            </ButtonGroup>
        </form>
    );
}

export default UpdateCustomer;
