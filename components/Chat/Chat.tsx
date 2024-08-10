'use client'

import { useEffect, useState } from 'react'

import { IMessage } from './Chat.type'
import { chatMock } from './Chat.mock'

export default function Chat() {
    const [messages, setMessages] = useState<IMessage[]>([])

    useEffect(() => {
        const addRandomMessage = () => {
            const randomIndex = Math.floor(Math.random() * chatMock.length)
            const randomMessage = chatMock[randomIndex]
            const timestamp = new Date().toLocaleTimeString()

            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    message: randomMessage.message,
                    nickName: randomMessage.user,
                    timestamp: timestamp
                }
            ])
        }

        const interval = setInterval(
            addRandomMessage,
            Math.floor(Math.random() * (6000 - 3000 + 1)) + 3000
        )

        return () => clearInterval(interval)
    }, [])

    return (
        <ul className='min-h-40p max-h-40p w-full col-span-12 bg-charcoal scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-sky-300 overflow-auto'>
            {messages.map((message) => {
                return (
                    <li
                        key={
                            message.message +
                            message.nickName +
                            message.timestamp
                        }
                        className='flex flex-wrap items-center'
                    >
                        <div className='text-xs text-gray-dark px-1'>
                            {message.timestamp}
                        </div>
                        <div className='text-sm text-yellow-light pr-1'>
                            {message.nickName}
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
