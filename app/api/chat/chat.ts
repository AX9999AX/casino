import { chatMock } from './chat.mock'

let currentChat: { user: string; message: string; timestamp: string }[] = []

export const getChat = () => {
    return currentChat
}

const addRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * chatMock.length)
    const randomMessage = chatMock[randomIndex]

    const timestamp = new Date().toLocaleTimeString()

    currentChat.push({ ...randomMessage, timestamp: timestamp })

    if (currentChat.length > 40) {
        currentChat.shift()
    }

    scheduleRandomMessage()
}

const scheduleRandomMessage = () => {
    const randomDelay = Math.floor(Math.random() * (10000 - 2000 + 1)) + 2000

    setTimeout(addRandomMessage, randomDelay)
}

scheduleRandomMessage()
