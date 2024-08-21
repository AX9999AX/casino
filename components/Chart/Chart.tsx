'use client'

import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import { io } from 'socket.io-client'

import { IHistory } from '../History/History.type'

import { GameData } from './Chart.type'

export const Chart = () => {
    const [data, setData] = useState<GameData[]>([])
    const [waitingTime, setWaitingTime] = useState<number>(10)
    const [history, setHistory] = useState<IHistory[]>([])

    const firstItem = history?.length
        ? history?.slice().reverse()[0]
        : { bust: 0, hash: '' }

    useEffect(() => {
        const socket = io(String(process.env.NEXT_PUBLIC_SOCKET_URL))

        socket.on('gameMultiplier', (data: GameData[]) => {
            setData(data)
        })

        socket.on('waitingTime', (newWaitingTime: number) => {
            setWaitingTime(newWaitingTime)
        })

        socket.on('history', (historyData: IHistory[]) => {
            setHistory(historyData)
        })

        return () => {
            socket.disconnect()
        }
    }, [])

    const renderNextRoundText = () => {
        return waitingTime < 8.2 ? (
            <text
                dominantBaseline='middle'
                fill='white'
                fontSize={20}
                textAnchor='middle'
                x='50%'
                y='50%'
            >
                {`Next round starts in ${waitingTime}s`}
            </text>
        ) : (
            <>
                <text
                    dominantBaseline='middle'
                    fill='red'
                    fontSize={60}
                    textAnchor='middle'
                    x='50%'
                    y='40%'
                >
                    {`Busted`}
                </text>
                <text
                    dominantBaseline='middle'
                    fill='red'
                    fontSize={60}
                    textAnchor='middle'
                    x='50%'
                    y='60%'
                >
                    {'@ ' + firstItem.bust.toFixed(2) + 'x'}
                </text>
            </>
        )
    }

    return (
        <div className='relative chart-h'>
            <ResponsiveContainer className='absolute inset-0' width='100%'>
                <LineChart
                    data={data}
                    margin={{ top: 0, right: 40, left: 0, bottom: 10 }}
                >
                    <XAxis dataKey='gameTime' domain={[0, 5]} type='number' />
                    <YAxis domain={[0, 25]} tick={false} />
                    <Line
                        dataKey='multiplier'
                        dot={false}
                        isAnimationActive={false}
                        stroke='white'
                        strokeWidth={3}
                        type='monotone'
                    />
                    {waitingTime < 9.9 ? (
                        renderNextRoundText()
                    ) : (
                        <text
                            dominantBaseline='middle'
                            fill='white'
                            fontSize={72}
                            textAnchor='middle'
                            x='50%'
                            y='50%'
                        >
                            {(data.length ? data[data.length - 1].x : '') + 'x'}
                        </text>
                    )}
                </LineChart>
            </ResponsiveContainer>
            <ResponsiveContainer className='absolute inset-0' width='100%'>
                <LineChart
                    data={data}
                    margin={{ top: 0, right: 40, left: 0, bottom: 10 }}
                >
                    <XAxis
                        dataKey='gameTime'
                        domain={[0, 'dataMax']}
                        tick={false}
                        type='number'
                    />
                    <YAxis dataKey='x' domain={[0, 'dataMax']} />
                    <Line
                        dataKey='x'
                        dot={false}
                        isAnimationActive={false}
                        stroke='white'
                        strokeWidth={0}
                        type='monotone'
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
