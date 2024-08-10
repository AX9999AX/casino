export interface IMessage {
    user: string
    timestamp: string
    message: string
}

export interface IChat {
    messages: IMessage[]
}
