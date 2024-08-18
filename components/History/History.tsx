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
        const socket = io(String(process.env.NEXT_PUBLIC_SOCKET_URL))

        socket.on('history', (historyData: IHistory[]) => {
            setHistory(historyData)
        })

        return () => {
            socket.disconnect()
        }
    }, [])

    return (
        <Table
            removeWrapper
            aria-label='History table'
            className='selection-option-h scrollbar-thin scrollbar-thumb-orange scrollbar-track-gray-600 overflow-auto'
        >
            <TableHeader>
                <TableColumn>BUST</TableColumn>
                <TableColumn>@</TableColumn>
                <TableColumn>BET</TableColumn>
                <TableColumn>PROFIT</TableColumn>
                <TableColumn>HASH</TableColumn>
            </TableHeader>
            <TableBody>
                {history
                    ?.slice()
                    .reverse()
                    .map((historyItem) => {
                        return (
                            <TableRow key={historyItem.hash}>
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
