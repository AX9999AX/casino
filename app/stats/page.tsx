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

export default function StatsPage() {
    return (
        <>
            <h1 className={title()}>Stats</h1>
            <div className='w-full'>
                <Table aria-label='Stats table' selectionMode='single'>
                    <TableHeader>
                        <TableColumn>Statistic</TableColumn>
                        <TableColumn>Percent</TableColumn>
                        <TableColumn>Value</TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow key='1'>
                            <TableCell>Users</TableCell>
                            <TableCell>-</TableCell>
                            <TableCell>835,999</TableCell>
                        </TableRow>
                        <TableRow key='2'>
                            <TableCell>Bets</TableCell>
                            <TableCell>-</TableCell>
                            <TableCell>1,960,951,269</TableCell>
                        </TableRow>
                        <TableRow key='3'>
                            <TableCell>Bankroll</TableCell>
                            <TableCell>-</TableCell>
                            <TableCell>
                                <div className='flex items-center'>
                                    <SiBitcoinsv
                                        className='pr-1 text-yellow-500'
                                        size={24}
                                    />
                                    775.45176039
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow key='4'>
                            <TableCell>Wagered</TableCell>
                            <TableCell>-</TableCell>
                            <TableCell>
                                <div className='flex items-center'>
                                    <SiBitcoinsv
                                        className='pr-1 text-yellow-500'
                                        size={24}
                                    />
                                    2,338,476.87696000
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow key='5'>
                            <TableCell>Wagered (v2 only)</TableCell>
                            <TableCell>100%</TableCell>
                            <TableCell>
                                <div className='flex items-center'>
                                    <SiBitcoinsv
                                        className='pr-1 text-yellow-500'
                                        size={24}
                                    />
                                    1,165,252.15493500
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow key='6'>
                            <TableCell>Return to Player (v2 only)</TableCell>
                            <TableCell>98.83%</TableCell>
                            <TableCell>
                                <div className='flex items-center'>
                                    <SiBitcoinsv
                                        className='pr-1 text-yellow-500'
                                        size={24}
                                    />
                                    1,151,647.47545976
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow key='7'>
                            <TableCell>Investors profit</TableCell>
                            <TableCell>0.62%</TableCell>
                            <TableCell>
                                <div className='flex items-center'>
                                    <SiBitcoinsv
                                        className='pr-1 text-yellow-500'
                                        size={24}
                                    />
                                    7,230.80776260
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow key='8'>
                            <TableCell>
                                Investors all-time high profit
                            </TableCell>
                            <TableCell>0.62%</TableCell>
                            <TableCell>
                                <div className='flex items-center'>
                                    <SiBitcoinsv
                                        className='pr-1 text-yellow-500'
                                        size={24}
                                    />
                                    7,230.88081197
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow key='9'>
                            <TableCell>Commission</TableCell>
                            <TableCell>0.55%</TableCell>
                            <TableCell>
                                <div className='flex items-center'>
                                    <SiBitcoinsv
                                        className='pr-1 text-yellow-500'
                                        size={24}
                                    />
                                    6,373.87171264
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </>
    )
}
