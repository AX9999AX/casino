'use client'

import useSWR from 'swr'

import { IMessage } from './Chat.type'

const fetcher = (url: string): Promise<IMessage[]> =>
    fetch(url).then((res) => res.json())

export default function Chat() {
    const { data } = useSWR<IMessage[]>(
        'http://38.180.111.142:3000/api/chat',
        fetcher,
        {
            refreshInterval: 1000
        }
    )

    return (
        <ul className='w-full min-h-35vh max-h-35vh scrollbar-thin scrollbar-thumb-orange scrollbar-track-gray-600 overflow-auto'>
            {data?.map((message) => {
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
