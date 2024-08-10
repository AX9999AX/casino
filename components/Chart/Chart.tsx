'use client'

import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import { io } from 'socket.io-client'

import { generateArray } from './Chart.helper'

export const Chart = () => {
    const [coordinateX, setCoordinateX] = useState<number>(10)

    useEffect(() => {
        const socket = io('http://localhost:3001')

        socket.on('numberUpdate', (number: number) => {
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
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
                <XAxis
                    dataKey='x'
                    scale='point'
                    tickMargin={10}
                    ticks={[1, 2, 4, 8, 32, 64]}
                />
                <YAxis
                    domain={[0, 4]}
                    tickMargin={5}
                    ticks={[2, 4]}
                    width={30}
                />
                <Line
                    dataKey='y'
                    dot={false}
                    isAnimationActive={true}
                    stroke='white'
                    strokeWidth={3}
                    type='monotone'
                />
                {/* <Line
                    dataKey='invisible'
                    dot={false}
                    isAnimationActive={false}
                    stroke='none'
                    strokeWidth={0}
                    type='monotone'
                /> */}
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
