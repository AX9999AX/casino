'use client'

import {
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow
} from '@nextui-org/table'

import { title } from '@/components/primitives'

export default function StatsPage() {
    return (
        <div>
            <h1 className={title()}>Stats</h1>
            <div>
                <Table
                    aria-label='Player statistics table'
                    selectionMode='single'
                >
                    <TableHeader>
                        <TableColumn>Statistic</TableColumn>
                        <TableColumn>Value</TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow key='1'>
                            <TableCell>1</TableCell>
                            <TableCell>KLITZ</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
