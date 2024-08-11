export interface IPlayers {
    user: string
    bust: string
    bet: string
    profit: string
    gameStatus: string
}

export const STATUS_IN_GAME = 'IN_GAME'
export const STATUS_LOST = 'LOST'
export const STATUS_WIN = 'WIN"'

export const sortPlayers = (players: IPlayers[]): IPlayers[] => {
    const statusOrder: Record<string, number> = {
        [STATUS_LOST]: 1,
        [STATUS_IN_GAME]: 2,
        [STATUS_WIN]: 3
    }

    return players.sort((a, b) => {
        return (
            (statusOrder[a.gameStatus] || 0) - (statusOrder[b.gameStatus] || 0)
        )
    })
}
