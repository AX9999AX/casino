'use client'

import { Card, CardBody } from '@nextui-org/card'
import {
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow
} from '@nextui-org/table'
import { Tab, Tabs } from '@nextui-org/tabs'

import Chat from '@/components/Chat/Chat'
import { Chart } from '@/components/Chart/Chart'
import Players from '@/components/Players/Players'

export default function Home() {
    return (
        <section className='grid grid-cols-12 gap-4 py-8 md:py-10'>
            <div className='col-span-12 lg:col-span-8'>
                <div className='flex w-full flex-col'>
                    <Chart />
                </div>
                <div className='flex w-full flex-col'>
                    <Tabs aria-label='Options'>
                        <Tab key='chat' title='Chat'>
                            <Card>
                                <CardBody>
                                    <Chat />
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key='history' title='History'>
                            <Card>
                                <CardBody>
                                    <Table
                                        removeWrapper
                                        aria-label='Example static collection table'
                                    >
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
                                                <TableCell>
                                                    8e873ac0d9167ab08b050601b0638eb324c842991e9e736747387c601edab551
                                                </TableCell>
                                            </TableRow>
                                            <TableRow key='2'>
                                                <TableCell>2.32x</TableCell>
                                                <TableCell>-</TableCell>
                                                <TableCell>-</TableCell>
                                                <TableCell>-</TableCell>
                                                <TableCell>
                                                    8e873ac0d9167ab08b050601b0638eb324c842991e9e736747387c601edab551
                                                </TableCell>
                                            </TableRow>
                                            <TableRow key='3'>
                                                <TableCell>2.32x</TableCell>
                                                <TableCell>-</TableCell>
                                                <TableCell>-</TableCell>
                                                <TableCell>-</TableCell>
                                                <TableCell>
                                                    8e873ac0d9167ab08b050601b0638eb324c842991e9e736747387c601edab551
                                                </TableCell>
                                            </TableRow>
                                            <TableRow key='4'>
                                                <TableCell>2.32x</TableCell>
                                                <TableCell>-</TableCell>
                                                <TableCell>-</TableCell>
                                                <TableCell>-</TableCell>
                                                <TableCell>
                                                    8e873ac0d9167ab08b050601b0638eb324c842991e9e736747387c601edab551
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Tab>
                    </Tabs>
                </div>
            </div>
            <div className='col-span-12 lg:col-span-4'>
                <Players />
            </div>
        </section>
    )
}
