import http from 'http'

import { Server } from 'socket.io'

import { gameMock } from './gameMock.js'

const PORT = 3001

const httpServer = http.createServer()
const io = new Server(httpServer, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
})

let history = []

let players = []

const MAX_HISTORY = 20

let currentMultiplier = 1.0
let isPaused = false

let currentGameMockIndex = 0

const updateHistory = () => {
    if (history.length > MAX_HISTORY) {
        history.shift()
    }
    history.push({
        bust: gameMock[currentGameMockIndex].bust,
        hash: gameMock[currentGameMockIndex].hash
    })
}

const updatePlayers = () => {
    players = []
    io.emit('players', players)
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            players.push({
                user: 'player' + i,
                bust: '-',
                bet: i,
                profit: '-'
            })
            io.emit('players', players)
        }, i * 200)
    }
}

setInterval(() => {
    if (!isPaused) {
        currentMultiplier += 0.01
        io.emit('gameMultiplier', currentMultiplier)

        if (currentMultiplier >= gameMock[currentGameMockIndex].bust) {
            isPaused = true
            updateHistory()
            io.emit('history', history)
            currentGameMockIndex =
                currentGameMockIndex >= MAX_HISTORY
                    ? 0
                    : currentGameMockIndex + 1
            updatePlayers()
            setTimeout(() => {
                currentMultiplier = 1.0
                isPaused = false
            }, 5000)
        }
    }
}, 50)

io.on('connection', () => {
    io.emit('gameMultiplier', currentMultiplier)
    io.emit('history', history)
})

httpServer.listen(PORT, () => { })
