import "./GetCustomer.css";
import {
    Button,
    ButtonGroup, FormControl, InputLabel, MenuItem, Select,
    Typography,
} from "@material-ui/core";
import {useState} from "react";
import {useForm} from "react-hook-form";
import CustomerModel from "../../../../Models/CustomerModel/CustomerModel";
import globals from "../../../../Services/Globals/MethodsUri";
import security from "../../../../Services/Security/Security";
import notify from "../../../../Services/Notifications/Notifications";
import AdminGetCustomers from "../../../../Services/Globals/AdminGetCustomers";

function GetCustomer(): JSX.Element {

    const {handleSubmit} = useForm<CustomerModel>();
    const [click, setClick] = useState(false)
    const clicked = () => setClick(true);
    let customer: CustomerModel;
    let isCustomerNull = () => (customer === null);

    async function send(sendCustomer: CustomerModel) {
        try {
            const response = await security.get<CustomerModel>(
                globals.adminUris.adminGetOneCustomer + "/" + sendCustomer.id
            );
            notify.success("The customer's details has been brought successfully!")
            customer = response.data;
        } catch (err) {
            notify.error(err);
        }
    }

    AdminGetCustomers.refreshCustomers();
    // @ts-ignore -- For first initialisation.
    customer = null;

    return (
        <form className="methodBox" onSubmit={handleSubmit(send)}>

            <Typography align="center" variant="h3">
                Get A Customer's Details
            </Typography>

            {/* Select Customer Box */}
            <FormControl>
                <InputLabel>Customer</InputLabel>
                <Select variant="outlined" fullWidth required>
                    <InputLabel>SELECT A COMPANY TO SEE MORE DETAILS</InputLabel>

                    {/* Customer Array */}
                    {AdminGetCustomers.state.customers.map((customer) => (
                        <MenuItem value={customer.id}>
                            {customer.firstName + " " + customer.lastName}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <br/>
            <br/>

            <ButtonGroup variant="text" fullWidth>
                <Button
                    className="submitButton"
                    type="submit"
                    color="primary"
                    variant="contained"
                    onClick={clicked}>
                    SELECT
                </Button>
            </ButtonGroup>

            {click && !isCustomerNull() ?
                // if (clicked && customer is not null)
                <div className="customerDetails">
                    <h3> Customer Details: </h3>
                    <br/> First Name: = {customer.firstName}
                    <br/> Last Name: = {customer.lastName}
                    <br/> Email = {customer.email}
                </div>
                :
                <div>

                </div>
            }
        </form>
    );
}

export default GetCustomer;
