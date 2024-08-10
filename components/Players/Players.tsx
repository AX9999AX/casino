'use client'

import {
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow
} from '@nextui-org/table'

export default function Players() {
    return (
        <Table removeWrapper aria-label='Example static collection table'>
            <TableHeader>
                <TableColumn>BUST</TableColumn>
                <TableColumn>@</TableColumn>
                <TableColumn>BET</TableColumn>
                <TableColumn>PROFIT</TableColumn>
                <TableColumn>HASH</TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow key='1'>
                    <TableCell>2.32x</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>8e873ac0d9</TableCell>
                </TableRow>
                <TableRow key='2'>
                    <TableCell>2.32x</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>8e873ac0d9</TableCell>
                </TableRow>
                <TableRow key='3'>
                    <TableCell>2.32x</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>8e873ac0d9</TableCell>
                </TableRow>
                <TableRow key='4'>
                    <TableCell>2.32x</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>8e873ac0d9</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}
