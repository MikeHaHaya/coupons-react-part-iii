import "./AdminMenu.css";
import store from "../../../../Redux/Store/Store";
import {UserType} from "../../../../Models/UserModel/UserModel";
import notify from "../../../../Services/Notifications/Notifications";
import {
    Container,
    Grid,
} from "@material-ui/core";
import ActionCard from "../ActionCard/ActionCard";
import AddCompany from "../AddCompany/AddCompany";
import UpdateCompany from "../UpdateCompany/UpdateCompany";
import DeleteCompany from "../DeleteCompany/DeleteCompany";
import GetCompany from "../GetCompany/GetCompany";
import GetCompanies from "../GetCompanies/GetCompanies";
import {RouteComponentProps} from "react-router";
import {Component} from "react";
import AddCustomer from "../AddCustomer/AddCustomer";
import UpdateCustomer from "../UpdateCustomer/UpdateCustomer";
import DeleteCustomer from "../DeleteCustomer/DeleteCustomer";
import GetCustomers from "../GetCustomers/GetCustomers";
import GetCustomer from "../GetCustomer/GetCustomer";

interface AdminMenuProps extends RouteComponentProps {
}

class AdminMenu extends Component<AdminMenuProps> {

    public constructor(props: AdminMenuProps) {
        super(props);
    }

    componentDidMount() {
        if (store.getState().authState.user?.userType !== UserType.ADMIN) {
            notify.error("You don't have access to this area, " +
                "make sure you are logged in as an admin to gain access.")
            this.props.history.push("/home");
        }
    }

    public render(): JSX.Element {

        return (
            <Container>


                {/* Company Methods */}
                <ul>
                    <li>
                    <AddCompany/>
                    </li>
                    <br/>
                    <br/>
                    <li>
                    <UpdateCompany/>
                    </li>
                    <br/>
                    <br/>
                    <li>
                    <DeleteCompany/>
                    </li>
                    <br/>
                    <br/>
                    <li>
                    <GetCompany/>
                    </li>
                    <br/>
                    <br/>
                    <li>
                    <GetCompanies/>
                    </li>
                    <br/>
                    <br/>
                    <li>
                    <AddCustomer/>
                    </li>
                    <br/>
                    <br/>
                    <li>
                    <UpdateCustomer/>
                    </li>
                    <br/>
                    <br/>
                    <li>
                    <DeleteCustomer/>
                    </li>
                    <br/>
                    <br/>
                    <li>
                    <GetCustomer/>
                    </li>
                    <br/>
                    <br/>
                    <li>
                    <GetCustomers/>
                    </li>
                    <br/>
                    <br/>
                </ul>

            </Container>
        )
    }
}

export default AdminMenu;
