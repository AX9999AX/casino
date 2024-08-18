'use client'

import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

import { IMessage } from './Chat.type'

export default function Chat() {
    const [messages, setMessages] = useState<IMessage[]>([])

    useEffect(() => {
        const socket = io(String(process.env.NEXT_PUBLIC_SOCKET_URL))

        socket.on('chat', (chatData) => {
            setMessages(chatData)
        })

        return () => {
            socket.disconnect()
        }
    }, [])

    return (
        <ul className='w-full selection-option-h scrollbar-thin scrollbar-thumb-orange scrollbar-track-gray-600 overflow-auto'>
            {messages?.map((message) => {
                return (
                    <li
                        key={message.message + message.user + message.timestamp}
                        className='flex flex-wrap items-center'
                    >
                        <div className='text-xs px-1'>{message.timestamp}</div>
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
    )
}
