import "./DeleteCustomer.css";
import {
    Button,
    ButtonGroup, FormControl, InputLabel, MenuItem, Select,
    Typography,
} from "@material-ui/core";
import {useForm} from "react-hook-form";
import CustomerModel from "../../../../Models/CustomerModel/CustomerModel";
import globals from "../../../../Services/Globals/MethodsUri";
import security from "../../../../Services/Security/Security";
import notify from "../../../../Services/Notifications/Notifications";
import AdminGetCustomers from "../../../../Services/Globals/AdminGetCustomers";

function DeleteCustomer(): JSX.Element {

    const {handleSubmit} = useForm<CustomerModel>();

    // Sends the delete request
    async function send(customer: CustomerModel) {
        try {
            await security.delete<CustomerModel>(
                globals.adminUris.adminDeleteCustomer + "/" + customer.id
            );
            notify.success("The customer has been deleted successfully!");
        } catch (err) {
            notify.error(err);
        }
    }

    AdminGetCustomers.refreshCustomers();
    return (
        <form className="methodBox" onSubmit={handleSubmit(send)}>

            <Typography align="center" variant="h3">
                Delete A Customer
            </Typography>

            {/* Select Customer Box */}
            <FormControl>
                <InputLabel>Customer</InputLabel>
                <Select variant="outlined" fullWidth required>
                    <InputLabel>SELECT A CUSTOMER TO DELETE</InputLabel>

                    {/* Customer Array */}
                    {AdminGetCustomers.state.customers.map((customer)=> (
                        <MenuItem value={customer.id}>
                            {customer.firstName + " " + customer.lastName}
                        </MenuItem>
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

export default DeleteCustomer;
