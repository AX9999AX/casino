'use client'

import useSWR from 'swr'

import { IMessage } from './Chat.type'

const fetcher = (url: string): Promise<IMessage[]> =>
    fetch(url).then((res) => res.json())

export default function Chat() {
    const { data } = useSWR<IMessage[]>('/api/chat', fetcher, {
        refreshInterval: 1000
    })

    return (
        <ul className='w-full min-h-64 max-h-64 scrollbar-thin scrollbar-thumb-orange scrollbar-track-sky-300 overflow-auto'>
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
