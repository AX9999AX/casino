'use client'

import { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'

import { IMessage } from './Chat.type'

export default function Chat() {
    const [messages, setMessages] = useState<IMessage[]>([])
    const chatListRef = useRef<HTMLUListElement>(null)

    useEffect(() => {
        const socket = io(String(process.env.NEXT_PUBLIC_SOCKET_URL))

        socket.on('chat', (chatData) => {
            setMessages(chatData)
        })

        return () => {
            socket.disconnect()
        }
    }, [])

    useEffect(() => {
        if (chatListRef.current) {
            chatListRef.current.scrollTop = chatListRef.current.scrollHeight
        }
    }, [messages])

    const formatTimestamp = (timestamp: string) => {
        const [hours, minutes] = timestamp.split(':')

        return `${hours}:${parseInt(minutes) + 9}`
    }

    return (
        <>
            <ul
                ref={chatListRef}
                className='w-full selection-option-chart-h scrollbar-thin scrollbar-thumb-orange scrollbar-track-gray-600 overflow-auto'
            >
                {messages?.map((message) => {
                    return (
                        <li
                            key={
                                message.message +
                                message.user +
                                message.timestamp
                            }
                            className='flex flex-wrap items-center'
                        >
                            <div className='text-xs px-1'>
                                {formatTimestamp(message.timestamp)}
                            </div>
                            <div className='text-sm text-orange pr-1'>
                                {message.user}:
                            </div>
                            <div className='text-sm text-white'>
                                {message.message}
                            </div>
                        </li>
                    )
                })}
            </ul>
            <div className='border mt-2 p-1 border-red-500 text-gray-500'>
                You must connect wallet to enter the chat
            </div>
        </>
    )
}
