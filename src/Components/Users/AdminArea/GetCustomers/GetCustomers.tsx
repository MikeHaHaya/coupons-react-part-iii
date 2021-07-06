import "./GetCustomers.css";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@material-ui/core";
import AdminGetCustomers from "../../../../Services/Globals/AdminGetCustomers";

function GetCustomers(): JSX.Element {

    return (
        <Paper>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableCell>First Name: </TableCell>
                        <TableCell>Last Name: </TableCell>
                        <TableCell>Email: </TableCell>
                    </TableHead>
                    <TableBody>
                        {AdminGetCustomers.state.customers.map((customer)=>(
                            <TableRow>
                                <TableCell>{customer.firstName}</TableCell>
                                <TableCell>{customer.lastName}</TableCell>
                                <TableCell>{customer.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default GetCustomers;
