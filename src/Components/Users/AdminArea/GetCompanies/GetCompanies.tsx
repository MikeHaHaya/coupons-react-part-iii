import "./GetCompanies.css";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@material-ui/core";
import AdminGetCompanies from "../../../../Services/Globals/AdminGetCompanies";

function GetCompanies(): JSX.Element {

    return (
        <Paper>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableCell>Name: </TableCell>
                        <TableCell>Email: </TableCell>
                    </TableHead>
                    <TableBody>
                        {AdminGetCompanies.state.companies.map((company)=>(
                                <TableRow>
                                    <TableCell>{company.name}</TableCell>
                                    <TableCell>{company.email}</TableCell>
                                </TableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default GetCompanies;
