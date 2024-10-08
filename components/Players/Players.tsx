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
    sortPlayers,
    STATUS_IN_GAME,
    STATUS_LOST,
    STATUS_WIN
} from './Players.type'

export default function Players() {
    const [players, setPlayers] = useState<IPlayers[]>([])
    const [online, setOnline] = useState<number>(0)

    const sortedPlayers = sortPlayers(players)

    useEffect(() => {
        const socket = io(String(process.env.NEXT_PUBLIC_SOCKET_URL))

        socket.on('players', (playersData) => {
            setPlayers(playersData)
        })

        socket.on('currentOnline', (onlineData: number) => {
            setOnline(onlineData)
        })

        return () => {
            socket.disconnect()
        }
    }, [])

    const calculateBets = () => {
        return players.reduce((acc, player) => {
            return acc + parseFloat(player.bet)
        }, 0)
    }

    return (
        <>
            <Table
                removeWrapper
                aria-label='User Bets Table'
                className='scrollbar-thin scrollbar-thumb-orange scrollbar-track-gray-600 overflow-auto'
            >
                <TableHeader>
                    <TableColumn>User</TableColumn>
                    <TableColumn>@</TableColumn>
                    <TableColumn>BET</TableColumn>
                    <TableColumn>PROFIT</TableColumn>
                </TableHeader>
                <TableBody>
                    {sortedPlayers?.map((player) => {
                        const inGameCollor =
                            player.gameStatus === STATUS_IN_GAME
                                ? 'text-orange'
                                : ''
                        const lostColor =
                            player.gameStatus === STATUS_LOST
                                ? 'text-red-500'
                                : ''

                        const winCollor =
                            player.gameStatus === STATUS_WIN
                                ? 'text-green-500'
                                : ''

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
            <div className='grid grid-cols-12 gap-2 pt-3'>
                <div className='col-span-4 flex justify-center items-center'>
                    Online: {online}
                </div>
                <div className='col-span-4 flex justify-center items-center'>
                    Playing: {players.length}
                </div>
                <div className='col-span-4 flex justify-center items-center'>
                    Betting: {calculateBets()} bits
                </div>
            </div>
        </>
    )
}
