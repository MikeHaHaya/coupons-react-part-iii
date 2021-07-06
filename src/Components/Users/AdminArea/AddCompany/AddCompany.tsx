import "./AddCompany.css";
import {useForm} from "react-hook-form";
import CompanyModel from "../../../../Models/CompanyModel/CompanyModel";
import security from "../../../../Services/Security/Security";
import globals from "../../../../Services/Globals/MethodsUri";
import notify from "../../../../Services/Notifications/Notifications";
import {Button, ButtonGroup, TextField, Typography} from "@material-ui/core";

function AddCompany(): JSX.Element {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<CompanyModel>();

    // Sends the post request
    async function send(company: CompanyModel) {
        try {
            await security.post<CompanyModel>(
                globals.adminUris.adminAddCompany,
                company
            );

            notify.success("The company has been added successfully!");
        } catch (err) {
            notify.error(err);
        }
    }

    return (
        <form className="methodBox" onSubmit={handleSubmit(send)}>

            <Typography align="center" variant="h3">
                Create A New Company
            </Typography>

            {/* Name Field */}
            <TextField
                {...register("name")}
                label="Name"
                variant="standard"
                type="text"
                required
                fullWidth
                />
            {errors.name && (
                <span className="ErrorMessage">{errors.name.message}</span>
            )}

            {/* Email Field */}
            <TextField
                {...register("email")}
                label="Email"
                variant="standard"
                type="text"
                required
                fullWidth
            />
            {errors.email && (
                <span className="ErrorMessage">{errors.email.message}</span>
            )}

            {/* Password Field */}
            <TextField
                {...register("password")}
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
                    CREATE
                </Button>
            </ButtonGroup>

        </form>
    );
}

export default AddCompany;