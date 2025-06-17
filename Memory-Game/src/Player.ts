type PlayerNode = {
    name: string
    score: number
    next: PlayerNode | null
}

export type Player = {
    name: string
    score: number
}

class NoPlayersWereFound extends Error {
    constructor() {
        super("No players were found")
    }
}

class BadImplementation extends Error {
    constructor() {
        super("Bad implementation")
    }
}

export class PlayersCircularList {
    private head: PlayerNode | null = null
    private totalOfPlayer = 0
    private currentPlayer: PlayerNode | null = null

    addPlayer(name: string) {
        const newPlayer: PlayerNode = {
            name: name,
            score: 0,
            next: null,
        }

        if (this.head == null) {
            this.head = newPlayer
            newPlayer.next = newPlayer

            this.currentPlayer = newPlayer
        } else {
            let help: PlayerNode = this.head
            while (help.next != this.head) {
                if (!help.next) {
                    throw new BadImplementation()
                }

                help = help.next
            }
            help.next = newPlayer
            newPlayer.next = this.head
        }

        this.totalOfPlayer++
    }

    getTotalOfPlayers() {
        return this.totalOfPlayer
    }

    getCurrentPlayer(): Player {
        if (!this.currentPlayer) {
            throw new NoPlayersWereFound()
        }

        return {
            name: this.currentPlayer.name,
            score: this.currentPlayer.score,
        }
    }

    getAllPlayers(): Array<Player> {
        const players = []

        if (!this.head) {
            throw new NoPlayersWereFound()
        }

        let help = this.head
        do {
            if (!help.next) {
                throw new BadImplementation()
            }

            players.push({
                name: help.name,
                score: help.score,
            })
            help = help.next
        } while (help != this.head)

        return players
    }

    nextPlayer() {
        if (!this.currentPlayer) {
            throw new NoPlayersWereFound()
        }

        this.currentPlayer = this.currentPlayer.next
    }

    plusCurrentPlayerScore() {
        if (!this.currentPlayer) {
            throw new NoPlayersWereFound()
        }

        this.currentPlayer.score++
    }
}
