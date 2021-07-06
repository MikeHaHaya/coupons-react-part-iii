import "./GetCoupons.css";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@material-ui/core";
import CompanyGetCoupons from "../../../../Services/Globals/CompanyGetCoupons";

function GetCoupons(): JSX.Element {

    CompanyGetCoupons.refreshCoupons();
    return (
        <Paper>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableCell>Title: </TableCell>
                        <TableCell>Description: </TableCell>
                        <TableCell>Price: </TableCell>
                        <TableCell>Amount: </TableCell>
                        <TableCell>Category: </TableCell>
                        <TableCell>Start Date: </TableCell>
                        <TableCell>End Date: </TableCell>
                        <TableCell>Owned By: </TableCell>

                    </TableHead>
                    <TableBody>
                        {CompanyGetCoupons.state.coupons.map((coupon)=>(
                                <TableRow>
                                    <TableCell>{coupon.title}</TableCell>
                                    <TableCell>{coupon.description}</TableCell>
                                    <TableCell>{coupon.price}</TableCell>
                                    <TableCell>{coupon.amount}</TableCell>
                                    <TableCell>{coupon.category}</TableCell>
                                    <TableCell>{coupon.startDate}</TableCell>
                                    <TableCell>{coupon.endDate}</TableCell>
                                    <TableCell>{coupon.company?.name}</TableCell>
                                </TableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default GetCoupons;
