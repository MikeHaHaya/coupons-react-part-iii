import "./DeleteCompany.css";
import {
    Button,
    ButtonGroup, FormControl, InputLabel, MenuItem, Select,
    Typography,
} from "@material-ui/core";
import {useForm} from "react-hook-form";
import CompanyModel from "../../../../Models/CompanyModel/CompanyModel";
import globals from "../../../../Services/Globals/MethodsUri";
import security from "../../../../Services/Security/Security";
import notify from "../../../../Services/Notifications/Notifications";
import AdminGetCompanies from "../../../../Services/Globals/AdminGetCompanies";

function DeleteCompany () {

    const {handleSubmit} = useForm<CompanyModel>();

    // Sends the delete request
    async function send(company: CompanyModel) {
        try {
            await security.delete<CompanyModel>(
                globals.adminUris.adminDeleteCompany + "/" + company.id
            );
            notify.success("The company has been deleted successfully!");
        } catch (err) {
            notify.error(err);
        }
    }

    AdminGetCompanies.refreshCompanies();
    return (
        <form className="methodBox" onSubmit={handleSubmit(send)}>

            <Typography align="center" variant="h3">
                Delete A Company
            </Typography>

            {/* Select Company Box */}
            <FormControl>
                <InputLabel>Company</InputLabel>
                <Select variant="outlined" fullWidth required>
                    <InputLabel>SELECT A COMPANY TO DELETE</InputLabel>

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
                    variant="contained">
                    DELETE
                </Button>
            </ButtonGroup>

        </form>
    );
}

export default DeleteCompany;
