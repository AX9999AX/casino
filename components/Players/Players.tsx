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

import { IPlayers } from './Players.type'

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
                    return (
                        <TableRow key={player.user}>
                            <TableCell>{player.user}</TableCell>
                            <TableCell>{player.bust}</TableCell>
                            <TableCell>{player.bet}</TableCell>
                            <TableCell>{player.profit}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}
