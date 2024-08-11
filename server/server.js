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

const STATUS_IN_GAME = 'IN_GAME'
const STATUS_LOST = 'LOST'
const STATUS_WIN = 'WIN"'

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
    for (let i = 0; i < 15; i++) {
        setTimeout(
            () => {
                if (i === 0) {
                    players = []
                }
                players.push({
                    user: 'player' + i,
                    bust: '-',
                    bet: i,
                    profit: '-',
                    gameStatus: STATUS_IN_GAME
                })
                io.emit('players', players)
            },
            i * 200 + 2000
        )
    }
}

const playersWin = () => {
    for (let i = 0; i < 15; i++) {
        if (players[i]?.gameStatus === STATUS_IN_GAME) {
            if (Math.random() < 0.001) {
                players[i].gameStatus = STATUS_WIN
            }
        }
    }
    io.emit('players', players)
}

const playersLost = () => {
    for (let i = 0; i < 15; i++) {
        if (players[i]?.gameStatus === STATUS_IN_GAME) {
            players[i].gameStatus = STATUS_LOST
        }
    }
    io.emit('players', players)
}

setInterval(() => {
    if (!isPaused) {
        currentMultiplier += 0.01
        io.emit('gameMultiplier', currentMultiplier)
        playersWin()

        if (currentMultiplier >= gameMock[currentGameMockIndex].bust) {
            isPaused = true
            updateHistory()
            playersLost()
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
    io.emit('players', players)
})

httpServer.listen(PORT, () => { })
