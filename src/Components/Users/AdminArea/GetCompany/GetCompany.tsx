import "./GetCompany.css";
import {
    Button,
    ButtonGroup, FormControl, InputLabel, MenuItem, Select,
    Typography,
} from "@material-ui/core";
import {useState} from "react";
import {useForm} from "react-hook-form";
import CompanyModel from "../../../../Models/CompanyModel/CompanyModel";
import globals from "../../../../Services/Globals/MethodsUri";
import security from "../../../../Services/Security/Security";
import notify from "../../../../Services/Notifications/Notifications";
import AdminGetCompanies from "../../../../Services/Globals/AdminGetCompanies";

function GetCompany(): JSX.Element {

    const {handleSubmit} = useForm<CompanyModel>();
    const [click, setClick] = useState(false)
    const clicked = () => setClick(true);
    let company: CompanyModel;
    let isCompanyNull = () => (company === null);

    async function send(sendCompany: CompanyModel) {
        try {
            const response = await security.get<CompanyModel>(
                globals.adminUris.adminGetOneCompany + "/" + sendCompany.id
            );
            notify.success("The company's details has been brought successfully!")
            company = response.data;

        } catch (err) {
            notify.error(err);
        }
    }

    AdminGetCompanies.refreshCompanies();
    // @ts-ignore -- For first initialisation.
    company = null;
    return (
        <form className="methodBox" onSubmit={handleSubmit(send)}>

            <Typography align="center" variant="h3">
                Get A Company's Details
            </Typography>

            {/* Select Company Box */}
            <FormControl>
                <InputLabel>Company</InputLabel>
                <Select variant="outlined" fullWidth required>
                    <InputLabel>SELECT A COMPANY TO SEE MORE DETAILS</InputLabel>

                    {/* Company Array */}
                    {AdminGetCompanies.state.companies.map((company) => (
                            <MenuItem value={company.id}>{company.name}</MenuItem>
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
                    variant="contained"
                    onClick={clicked}>
                    SELECT
                </Button>
            </ButtonGroup>

            {click && !isCompanyNull() ?
                // if (clicked && company is not null)
                <div className="companyDetails">
                    <h3> Company Details: </h3>
                    <br/> Name: = {company.name}
                    <br/> Email: = {company.email}
                </div>
                :
                // else
                <div>

                </div>
            }

        </form>
    );
}

export default GetCompany;
