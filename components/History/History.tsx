'use client'

import {
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow
} from '@nextui-org/table'
import { useEffect } from 'react'
import { io } from 'socket.io-client'

export default function History() {
    useEffect(() => {
        // Create a socket connection
        const socket = io('http://localhost:3001') // Change this to your server URL

        // Log a message when connected
        socket.on('connect', () => {
            console.log('Connected to the server')
        })

        // Clean up the socket connection on unmount
        return () => {
            socket.disconnect()
            console.log('Disconnected from the server')
        }
    }, [])

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
    )
}
