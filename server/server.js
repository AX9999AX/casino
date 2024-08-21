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
let interval = 60
let waitingTime = 10
let x = 1.0

let currentOnline = 350

let gameChartCoordinates = []

let currentGameMockIndex = 0

const adjustCurrentOnline = () => {
    // Generate a random boolean for +1 or -1 change
    const change = Math.random() < 0.5 ? -1 : 1

    // Update currentOnline with bounds checking
    if (currentOnline + change >= 328 && currentOnline + change <= 369) {
        currentOnline += change
    }

    io.emit('currentOnline', currentOnline)
}

const changeOnline = () => {
    setInterval(adjustCurrentOnline, 60000)
}

changeOnline()

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
    const randomDelay = Math.floor(Math.random() * (25000 - 10000 + 1)) + 10000

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
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 20, 22, 23, 25, 30, 35, 37,
        40, 42, 50, 55, 58, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160,
        170, 180, 190, 200, 250, 300, 320, 380
    ]
    const randomIndex = Math.floor(Math.random() * values.length)

    return values[randomIndex]
}

const generateRandomPlayerName = () => {
    const parts = [
        'aminam',
        'Krish',
        'Larlarlar',
        'startanew',
        'Uyen',
        'ShambhoShivaShambho',
        'M3ladik',
        'vvk',
        'Umiti',
        'style',
        'mercz',
        'Topstar',
        'Hiha',
        'Nirmal',
        'ryuji',
        'SIRILALITHA',
        'Starship',
        'Jkkl',
        'On',
        'OPEN',
        'Euler',
        'HINAS',
        'Shiva',
        'Xw',
        'M',
        'Star',
        'Melody',
        'Sunshine',
        'Whisper',
        'Galaxy',
        'Kirill999',
        'ArmaniXXX',
        'Hellboy',
        'Paryys',
        'Gragg11',
        'Shadow',
        'Nova',
        'Blaze',
        'Echo',
        'Storm',
        'Titan',
        'Phoenix',
        'Vortex',
        'Nebula',
        'Lynx',
        'Zephyr',
        'Sable',
        'Orion',
        'Cascade',
        'Frost',
        'Wraith',
        'Myst',
        'Falcon',
        'Comet',
        'Rogue',
        'Solstice',
        'Ember',
        'Specter',
        'Zenith',
        'Aether',
        'Eclipse',
        'Quasar',
        'Serenity',
        'Glacier',
        'Inferno',
        'Mirage',
        'Pinnacle',
        'Raven',
        'Aurora',
        'Echo',
        'Bliss',
        'Tempest',
        'Nimbus',
        'Mistral',
        'Helios',
        'Twilight',
        'Celeste',
        'Skye',
        'Quill',
        'Rift',
        'Horizon',
        'Pulse',
        'Luna',
        'Pyro',
        'Talon',
        'Crimson',
        'Vega',
        'Zeal',
        'Cinder',
        'Rune',
        'Blitz',
        'Sage',
        'Wraith',
        'Lunar',
        'Void'
    ]

    return parts[Math.floor(Math.random() * parts.length)]
}

const generateUniquePlayerName = (existingPlayers) => {
    let name

    do {
        name = generateRandomPlayerName()
    } while (existingPlayers.some((player) => player.user === name))

    return name
}

const updatePlayers = () => {
    for (let i = 0; i < Math.floor(Math.random() * (48 - 28 + 1)) + 28; i++) {
        setTimeout(
            () => {
                if (i === 0) {
                    players = []
                }

                const uniqueName = generateUniquePlayerName(players)

                players.push({
                    user: uniqueName,
                    bust: '-',
                    bet: gerRandomBet(),
                    profit: '-',
                    gameStatus: STATUS_IN_GAME
                })
                io.emit('players', players)
            },
            i * 150 + 2000
        )
    }
}

const playersWin = () => {
    for (let i = 0; i < players.length; i++) {
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
    for (let i = 0; i < players.length; i++) {
        if (players[i]?.gameStatus === STATUS_IN_GAME) {
            players[i].gameStatus = STATUS_LOST
        }
    }
    io.emit('players', players)
}

const cleanCoordinates = () => {
    if (gameChartCoordinates.length === 50) {
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
        x = 1
        waitingTime = 10
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
            interval = 75
        } else {
            setTimeout(gameLoop, interval)
        }
        io.emit('gameMultiplier', gameChartCoordinates)
    }
}

gameLoop()

io.on('connection', () => {
    io.emit('currentOnline', currentOnline)
    io.emit('waitingTime', waitingTime.toFixed(2))
    io.emit('gameMultiplier', gameChartCoordinates)
    io.emit('history', history)
    io.emit('players', players)
    io.emit('chat', currentChat)
})

httpServer.listen(PORT, () => { })
