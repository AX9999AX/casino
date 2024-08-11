'use client'

import {
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow
} from '@nextui-org/table'
import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

import { IHistory } from './History.type'

export default function History() {
    const [history, setHistory] = useState<IHistory[]>([])

    useEffect(() => {
        // Create a socket connection
        const socket = io('http://localhost:3001') // Change this to your server URL

        socket.on('history', (historyData: IHistory[]) => {
            setHistory(historyData)
        })

        // Clean up the socket connection on unmount
        return () => {
            socket.disconnect()
        }
    }, [])

    return (
        <Table
            removeWrapper
            aria-label='History table'
            className='min-h-35vh max-h-35vh scrollbar-thin scrollbar-thumb-orange scrollbar-track-gray-600 overflow-auto'
        >
            <TableHeader>
                <TableColumn>BUST</TableColumn>
                <TableColumn>@</TableColumn>
                <TableColumn>BET</TableColumn>
                <TableColumn>PROFIT</TableColumn>
                <TableColumn>HASH</TableColumn>
            </TableHeader>
            <TableBody>
                {history?.map((historyItem, index) => {
                    return (
                        <TableRow key={index}>
                            <TableCell
                                className={
                                    historyItem.bust > 2
                                        ? 'text-green-600'
                                        : 'text-red-600'
                                }
                            >
                                {historyItem.bust.toFixed(2)}x
                            </TableCell>
                            <TableCell>-</TableCell>
                            <TableCell>-</TableCell>
                            <TableCell>-</TableCell>
                            <TableCell>{historyItem.hash}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}
