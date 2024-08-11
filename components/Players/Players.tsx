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

import {
    IPlayers,
    STATUS_IN_GAME,
    STATUS_LOST,
    STATUS_WIN
} from './Players.type'

export default function Players() {
    const [players, setPlayers] = useState<IPlayers[]>([])

    useEffect(() => {
        // Create a socket connection
        const socket = io('http://localhost:3001') // Change this to your server URL

        socket.on('players', (playersData) => {
            setPlayers(playersData)
        })

        // Clean up the socket connection on unmount
        return () => {
            socket.disconnect()
        }
    }, [])

    return (
        <Table removeWrapper aria-label='User Bets Table'>
            <TableHeader>
                <TableColumn>User</TableColumn>
                <TableColumn>@</TableColumn>
                <TableColumn>BET</TableColumn>
                <TableColumn>PROFIT</TableColumn>
            </TableHeader>
            <TableBody>
                {players?.map((player) => {
                    const inGameCollor =
                        player.gameStatus === STATUS_IN_GAME
                            ? 'text-orange'
                            : ''
                    const lostColor =
                        player.gameStatus === STATUS_LOST ? 'text-red-500' : ''

                    const winCollor =
                        player.gameStatus === STATUS_WIN ? 'text-green-500' : ''

                    return (
                        <TableRow key={player.user}>
                            <TableCell
                                className={`${inGameCollor} ${lostColor} ${winCollor}`}
                            >
                                {player.user}
                            </TableCell>
                            <TableCell
                                className={`${inGameCollor} ${lostColor} ${winCollor}`}
                            >
                                {player.bust}
                            </TableCell>
                            <TableCell
                                className={`${inGameCollor} ${lostColor} ${winCollor}`}
                            >
                                {player.bet}
                            </TableCell>
                            <TableCell
                                className={`${inGameCollor} ${lostColor} ${winCollor}`}
                            >
                                {player.profit}
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}
