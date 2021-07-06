import { Typography } from "@material-ui/core";
import { Component } from "react";
import CompanyModel from "../../../../Models/CompanyModel/CompanyModel";
import globals from "../../../../Services/Globals/MethodsUri";
import security from "../../../../Services/Security/Security";
import notify from "../../../../Services/Notifications/Notifications";
import "./GetCompanyDetails.css";

interface GetCompanyDetailsState {
    company: CompanyModel;
}

class GetCompanyDetails extends Component<{}, GetCompanyDetailsState> {
    public constructor(props: {}) {
        super(props);
        this.state = {
            company: null,
        };
    }

    public async componentDidMount() {
        try {
            const response = await security.get<CompanyModel>(
                globals.companyUris.companyGetDetails
            );
            const companySent = response.data;
            this.setState({ company: companySent });
        } catch (err) {
            notify.error(err);
        }
    }

    public render(): JSX.Element {
        return (
            <div className="GetCompanyDetails">
                <Typography align="center" variant="h2">Get Company Details</Typography>
                {this.state.company != null && (
                    <div>
                        <br /> Name: = {this.state.company.name}
                        <br /> Email: = {this.state.company.email}
                    </div>
                )}
            </div>
        );
    }
}
export default GetCompanyDetails;