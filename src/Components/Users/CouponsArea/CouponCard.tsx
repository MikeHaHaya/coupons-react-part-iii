import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@material-ui/core";
import { Component } from "react";
import { CouponModel } from "../../../Models/CouponModel/CouponModel";

interface CouponCardProps {
    coupons: CouponModel[];
}

class CouponCard extends Component<CouponCardProps> {
    public constructor(props: CouponCardProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <Paper>
                <TableContainer>
                    <Table stickyHeader aria-label="stickyHeader">
                        <TableHead>
                            <TableCell>Title: </TableCell>
                            <TableCell>Description: </TableCell>
                            <TableCell>Category: </TableCell>
                            <TableCell>End date: </TableCell>
                            <TableCell>Price: </TableCell>
                            <TableCell>Company Name: </TableCell>
                        </TableHead>
                        <TableBody>
                            {this.props.coupons.map((coupon) => (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    className="CouponCard"
                                    key={coupon.id}
                                >
                                    <TableCell>{coupon.title}</TableCell>
                                    <TableCell>{coupon.description}</TableCell>
                                    <TableCell>{coupon.category}</TableCell>
                                    <TableCell>{coupon.endDate}</TableCell>
                                    <TableCell>{coupon.price}</TableCell>
                                    <TableCell>{(coupon.company)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        );
    }
}

export default CouponCard;