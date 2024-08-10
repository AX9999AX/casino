import http from 'http'

import { Server } from 'socket.io'

const httpServer = http.createServer()
const io = new Server(httpServer)

const PORT = 3001

io.on('connection', (socket) => {
    console.log('New client connected')

    socket.on('disconnect', () => {
        console.log('Client disconnected')
    })
})

httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
