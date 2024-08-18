import http from 'http'

import { Server } from 'socket.io'

import { gameMock } from './gameMock.js'
import { chatMock } from './chatMock.js'

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

let currentChat = []

const MAX_HISTORY = 20

let currentMultiplier = -0.01
let gameTime = -0.1
let isPaused = false
let interval = 100
let waitingTime = 5
let x = 0

let gameChartCoordinates = []

let currentGameMockIndex = 0

const addRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * chatMock.length)
    const randomMessage = chatMock[randomIndex]

    const timestamp = new Date().toLocaleTimeString()

    currentChat.push({ ...randomMessage, timestamp: timestamp })

    if (currentChat.length > 40) {
        currentChat.shift()
    }

    io.emit('chat', currentChat)

    scheduleRandomMessage()
}

const scheduleRandomMessage = () => {
    const randomDelay = Math.floor(Math.random() * (10000 - 2000 + 1)) + 2000

    setTimeout(addRandomMessage, randomDelay)
}

scheduleRandomMessage()

const updateHistory = () => {
    if (history.length > MAX_HISTORY) {
        history.shift()
    }
    history.push({
        bust: gameMock[currentGameMockIndex].bust,
        hash: gameMock[currentGameMockIndex].hash
    })

    io.emit('history', history)
}

const gerRandomBet = () => {
    const values = [
        1, 2, 5, 7, 10, 15, 20, 25, 100, 500, 701, 900, 1000, 1400, 2000, 2299,
        5000
    ]
    const randomIndex = Math.floor(Math.random() * values.length)

    return values[randomIndex]
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
                    bet: gerRandomBet(),
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
            if (Math.random() < 0.001 && x > 1) {
                players[i].gameStatus = STATUS_WIN
                players[i].bust = x.toFixed(2)
                players[i].profit = (x * players[i].bet).toFixed(2)
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

const cleanCoordinates = () => {
    if (gameChartCoordinates.length === 200) {
        gameChartCoordinates = gameChartCoordinates.filter(
            (_, index) => index % 2 === 0
        )
    }
}

const waitingForNewGame = () => {
    waitingTime -= 0.1
    if (waitingTime < 0) {
        isPaused = false
        currentMultiplier = -0.01
        gameTime = -0.1
        if (currentGameMockIndex < gameMock.length - 1) {
            currentGameMockIndex++
        } else {
            currentGameMockIndex = 0
        }
        x = 0
        waitingTime = 5
        setTimeout(gameLoop, interval)
    } else {
        setTimeout(waitingForNewGame, 100)
    }
    io.emit('waitingTime', waitingTime.toFixed(2))
}

const gameLoop = () => {
    if (!isPaused) {
        currentMultiplier = Math.pow(gameTime, 2)
        x += 0.01
        gameTime += 0.1
        gameChartCoordinates.push({
            multiplier: currentMultiplier,
            gameTime: Number(gameTime.toFixed(2)),
            x: Number(x.toFixed(2))
        })
        playersWin()
        cleanCoordinates()
        if (x >= gameMock[currentGameMockIndex].bust) {
            gameChartCoordinates = []
            isPaused = true
            playersLost()
            updateHistory()
            updatePlayers()
            waitingForNewGame()
        } else {
            setTimeout(gameLoop, interval)
        }
        io.emit('gameMultiplier', gameChartCoordinates)
    }
}

gameLoop()

io.on('connection', () => {
    io.emit('waitingTime', waitingTime.toFixed(2))
    io.emit('gameMultiplier', gameChartCoordinates)
    io.emit('history', history)
    io.emit('players', players)
    io.emit('chat', currentChat)
})

httpServer.listen(PORT, () => { })
