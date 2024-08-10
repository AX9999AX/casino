import http from 'http'

import { Server } from 'socket.io'

const PORT = 3001

const httpServer = http.createServer()
const io = new Server(httpServer, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
})

let history = []

let currentNumber = 0
let isPaused = false

setInterval(() => {
    if (!isPaused) {
        currentNumber += 0.1
        io.emit('numberUpdate', currentNumber)

        if (currentNumber > 10) {
            isPaused = true
            history.push({ bust: currentNumber, hash: '8e873ac0d9167ab08b050601b0638eb324c842991e9e736747387c601edab551' })
            if (history.length > 20) {
                history.shift()
            }
            io.emit('history', history)
            setTimeout(() => {
                currentNumber = 0
                isPaused = false
            }, 5000)
        }
    }
}, 30)

io.on('connection', (socket) => {
    console.log('New client connected')
    io.emit('numberUpdate', currentNumber)
    io.emit('history', history)


    socket.on('disconnect', () => {
        console.log('Client disconnected')
    })
})

httpServer.listen(PORT, () => {
    console.log(`WebSocket server is running on port ${PORT}`)
})
