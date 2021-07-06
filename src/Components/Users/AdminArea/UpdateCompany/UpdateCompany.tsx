import "./UpdateCompany.css";
import {
    Button,
    ButtonGroup, FormControl, InputLabel, MenuItem, Select,
    TextField,
    Typography,
} from "@material-ui/core";
import {useForm} from "react-hook-form";
import CompanyModel from "../../../../Models/CompanyModel/CompanyModel";
import globals from "../../../../Services/Globals/MethodsUri";
import security from "../../../../Services/Security/Security";
import notify from "../../../../Services/Notifications/Notifications";
import AdminGetCompanies from "../../../../Services/Globals/AdminGetCompanies";

function UpdateCompany(): JSX.Element {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<CompanyModel>();

    // Updates Company
    async function send(company: CompanyModel) {

        try {
            await security.put<CompanyModel>(
                globals.adminUris.adminUpdateCompany, company
            );
            notify.success("The company was successfully updated!");

        } catch (err) {
            notify.error(err)
        }
    }


    return (
        <form className="methodBox" onSubmit={handleSubmit(send)}>

            <Typography align="center" variant="h3">
                Update A Company
            </Typography>

            {/* Select Company Box */}
            <FormControl>
                <InputLabel>Company</InputLabel>
                <Select variant="outlined" fullWidth required>
                    <InputLabel>SELECT A COMPANY TO UPDATE</InputLabel>

                    {/* Company Array */}
                    {AdminGetCompanies.state.companies.map((company) => (
                            <MenuItem value={company.id}>{company.name}</MenuItem>
                        )
                    )}
                </Select>
            </FormControl>
            <br/>
            <br/>

            <TextField
                {...register("name", {
                    minLength: {
                        value: 3,
                        message: "Name must be at least 3 characters.",
                    },
                })}
                label="Name"
                variant="standard"
                required
                fullWidth
            />
            {errors.name && (
                <span className="errorMessage">{errors.name.message}</span>
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
                        message: "Password must be at least 6 characters.",
                    },
                })}
                label="Password"
                variant="standard"
                type="password"
                required
                fullWidth
            />
            {errors.password && (
                <span className="errorMessage">{errors.password.message}</span>
            )}

            <ButtonGroup variant="text" fullWidth>
                <Button type="submit" color="primary">
                    Send
                </Button>
            </ButtonGroup>
        </form>
    );
}

export default UpdateCompany;
