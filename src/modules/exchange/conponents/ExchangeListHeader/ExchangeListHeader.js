import React from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import s from "../ExchangeList/ExchangeList.module.css";
import Paper from "@material-ui/core/Paper/Paper";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell/TableCell";

function ExchangeListHeader() {

    return (
        <>
            <TableContainer className={s.list__container} component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableCell className={s.item} align="left">Exchange:</TableCell>
                    <TableCell className={s.item} align="left">Rate:</TableCell>
                    <TableCell className={s.item} align="right">CC:</TableCell>
                </Table>
            </TableContainer>
        </>
    )
}

export default ExchangeListHeader;