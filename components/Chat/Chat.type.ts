export interface IMessage {
    nickName: string
    timestamp: string
    message: string
}

export interface IChat {
    messages: IMessage[]
}
