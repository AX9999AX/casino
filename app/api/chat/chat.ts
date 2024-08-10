import { chatMock } from './chat.mock'

let currentChat: { user: string; message: string }[] = [] // Array to store chat messages

export const getChat = () => {
    return currentChat // Return the number of messages in currentChat
}

// Function to add a random message from chatMock
const addRandomMessage = () => {
    // Pick a random item from chatMock
    const randomIndex = Math.floor(Math.random() * chatMock.length)
    const randomMessage = chatMock[randomIndex]

    // Add the random message to currentChat
    currentChat.push(randomMessage)

    // Limit the number of messages to 40
    if (currentChat.length > 40) {
        currentChat.shift() // Remove the oldest message
    }

    scheduleRandomMessage()
}

// Function to schedule a random message addition after a random delay
const scheduleRandomMessage = () => {
    const randomDelay = Math.floor(Math.random() * (10000 - 2000 + 1)) + 2000 // Random delay between 2000 ms (2s) and 10000 ms (10s)

    setTimeout(addRandomMessage, randomDelay) // Call addRandomMessage after random delay
}

// Start the first random message addition
scheduleRandomMessage()
