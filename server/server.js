import http from 'http'

import { Server } from 'socket.io'

const PORT = 3001

const httpServer = http.createServer()
const io = new Server(httpServer, {
    cors: {
        origin: '*', // Allow all origins
        methods: ['GET', 'POST'],
    }
})
let currentNumber = 0
let isPaused = false



setInterval(() => {
    if (!isPaused) {
        currentNumber += 0.1

        if (currentNumber > 10) {
            isPaused = true
            setTimeout(() => {
                currentNumber = 0
                isPaused = false
            }, 5000)
        }
    }
}, 50)

io.on('connection', (socket) => {
    console.log('New client connected')

    socket.on('disconnect', () => {
        console.log('Client disconnected')
    })
})

httpServer.listen(PORT, () => {
    console.log(`WebSocket server is running on port ${PORT}`)
})
