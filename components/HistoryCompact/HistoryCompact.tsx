'use client'

import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

import { IHistory } from '../History/History.type'

export default function HistoryCompact() {
    const [history, setHistory] = useState<IHistory[]>([])

    useEffect(() => {
        const socket = io(String(process.env.NEXT_PUBLIC_SOCKET_URL))

        socket.on('history', (historyData: IHistory[]) => {
            setHistory(historyData)
        })

        return () => {
            socket.disconnect()
        }
    }, [])

    return (
        <div className='flex justify-around px-2 py-1'>
            {history
                ?.slice()
                .reverse()
                .slice(0, 5)
                .map((historyItem) => {
                    return (
                        <div
                            key={historyItem.hash}
                            className={
                                historyItem.bust > 2
                                    ? 'text-green-600'
                                    : 'text-red-600'
                            }
                        >
                            {historyItem.bust.toFixed(2)}x
                        </div>
                    )
                })}
        </div>
    )
}
