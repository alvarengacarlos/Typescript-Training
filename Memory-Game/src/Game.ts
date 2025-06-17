import { Player, PlayersCircularList } from "./Player.ts"
import { Card, Table } from "./Card.ts"

export class Game {
    private players = new PlayersCircularList()
    private table = new Table()

    constructor(playerName: Array<string>) {
        playerName.forEach((n) => this.players.addPlayer(n))
    }

    play(cardOneId: number, cardTwoId: number): boolean {
        const equals = this.table.compareCards(cardOneId, cardTwoId)
        if (!equals) {
            this.players.nextPlayer()
            return false
        }

        this.players.plusCurrentPlayerScore()
        return true
    }

    getCards(): Array<Card> {
        return this.table.getCards()
    }

    getCurrentPlayer(): Player {
        return this.players.getCurrentPlayer()
    }

    getAllPlayers(): Array<Player> {
        return this.players.getAllPlayers()
    }
}
