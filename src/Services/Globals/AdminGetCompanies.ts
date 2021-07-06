// Get Lists
import security from "../Security/Security";
import CompanyModel from "../../Models/CompanyModel/CompanyModel";
import globals from "./MethodsUri";
import notify from "../Notifications/Notifications";
import {Component} from "react";

interface props {
    companies: CompanyModel[];
}

class AdminGetCompanies extends Component<{}, props> {

    public static state = {
        companies: [] as CompanyModel[]
    }

    public static async refreshCompanies() {

        try {
            const response = await security.get<CompanyModel[]>(
                globals.adminUris.adminGetAllCompanies
            );
            AdminGetCompanies.state.companies = response.data;

        } catch (err) {
            notify.error(err);
        }

    }
}

export default AdminGetCompanies;