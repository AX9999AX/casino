'use client'

import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import { io } from 'socket.io-client'

import { generateArray } from './Chart.helper'

import { BsBank } from 'react-icons/bs'

export const Chart = () => {
    const [coordinateX, setCoordinateX] = useState<number>(0)

    const ticks = useEffect(() => {
        const socket = io('http://localhost:3001')

        socket.on('gameMultiplier', (number: number) => {
            setCoordinateX(number)
        })

        return () => {
            socket.disconnect()
        }
    }, [])

    const data = generateArray(coordinateX)

    return (
        <ResponsiveContainer height={220} width='100%'>
            <LineChart
                data={data}
                margin={{ top: 0, right: 40, left: 0, bottom: 10 }}
            >
                <XAxis
                    dataKey='x'
                    domain={[1, 'dataMax']}
                    tickCount={1}
                    type='number'
                />
                <YAxis domain={[1, 2]} tick={false} type='number' />
                <Line
                    dataKey='y'
                    dot={false}
                    isAnimationActive={true}
                    stroke='white'
                    strokeWidth={3}
                    type='monotone'
                />
                <Line
                    dataKey='invisible'
                    dot={false}
                    isAnimationActive={false}
                    stroke='white'
                    strokeWidth={0}
                    type='monotone'
                />
                <text
                    dominantBaseline='middle'
                    fill='white'
                    fontSize={42}
                    textAnchor='middle'
                    x='50%'
                    y='50%'
                >
                    {coordinateX.toFixed(2)}x
                </text>
            </LineChart>
        </ResponsiveContainer>
    )
}
