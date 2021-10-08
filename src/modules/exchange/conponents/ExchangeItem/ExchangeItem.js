import React from 'react';
import { useState } from 'react';
import s from './ExchangeItem.module.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';


function ExchangeItem({item}) {

    function createData(name) {
        return { name };
    }

    const rows = [
        createData('Exchange'),
    ];


    return (
        <>
            <Draggable
                bounds='body'
                draggable={true}>
                <li className={s.exchange__list__item} key={item.id}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell className={s.item} align="left">{item.txt}</TableCell>
                                        <TableCell className={s.item} align="left">{item.rate}</TableCell>
                                        <TableCell className={s.item} align="right">{item.cc}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </li>
            </Draggable>
        </>
    )
}

export default ExchangeItem;