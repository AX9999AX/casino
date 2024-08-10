import http from 'http'

import { Server } from 'socket.io'

const PORT = 3001

const httpServer = http.createServer()
const io = new Server(httpServer)

let currentNumber = 0
let isPaused = false

const interval = setInterval(() => {

    if (!isPaused) {
        currentNumber += 0.1 // Increment by 0.1

        // Check if the number exceeds 10
        if (currentNumber > 10) {
            isPaused = true // Set the flag to pause updates
            setTimeout(() => {
                currentNumber = 0 // Reset to 0 after 5 seconds
                isPaused = false // Reset the flag to resume updates
            }, 5000) // 5 seconds delay
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
