'use client'

import {
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow
} from '@nextui-org/table'
import { SiBitcoinsv } from 'react-icons/si'

import { title } from '@/components/primitives'

export default function BankrollPage() {
    return (
        <>
            <h1 className={title()}>Bankroll</h1>
            <div>
                <h2 className='text-xl font-semibold'>What is the bankroll?</h2>
                <p className='mt-2 text-white '>
                    The bankroll is the pool of money that players bet against.
                    When players win, the money comes out of bustabits bankroll,
                    and when they lose, the money goes into the bankroll.
                </p>
                <p className='mt-2 text-white'>
                    bustabits bankroll is privately funded by bankroll
                    investors, meaning that anyone who has completed our
                    verification process and is eligible to invest will be to
                    get a share of its profits. See How does bankroll investing
                    work? section for more information on bankroll investing.
                </p>
            </div>
            <div className='w-full'>
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
                            <TableCell>bustabits bankroll</TableCell>
                            <TableCell>
                                <div className='flex items-center'>
                                    <SiBitcoinsv
                                        className='pr-1 text-yellow-500'
                                        size={24}
                                    />
                                    775.44750115
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow key='2'>
                            <TableCell>Investors total profit</TableCell>
                            <TableCell>
                                <div className='flex items-center'>
                                    <SiBitcoinsv
                                        className='pr-1 text-yellow-500'
                                        size={24}
                                    />
                                    7,230.80350336
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow key='3'>
                            <TableCell>Commission rate</TableCell>
                            <TableCell>68.2%</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </>
    )
}
