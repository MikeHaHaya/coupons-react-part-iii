// Get Lists
import security from "../Security/Security";
import CustomerModel from "../../Models/CustomerModel/CustomerModel";
import globals from "./MethodsUri";
import notify from "../Notifications/Notifications";
import {Component} from "react";

interface props {
    customers: CustomerModel[];
}

class AdminGetCustomers extends Component<{}, props> {

    public static state = {
        customers: [] as CustomerModel[]
    }

    public static async refreshCustomers() {

        try {
            const response = await security.get<CustomerModel[]>(
                globals.adminUris.adminGetAllCustomers
            );
            AdminGetCustomers.state.customers = response.data;

        } catch (err) {
            notify.error(err);
        }
    }
}

export default AdminGetCustomers;