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
        <ul className='min-h-40p max-h-40p w-full col-span-12 bg-charcoal scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-sky-300 overflow-auto'>
            {data?.map((message) => {
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
