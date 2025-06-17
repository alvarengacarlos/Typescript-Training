export enum Card {
    TIGER = "TIGER",
    LEOPARD = "LEOPARD",
    WHALE = "WHALE",
    FISH = "FISH",
    DOG = "DOG",
    CAT = "CAT",
}

export class Table {
    private cards: Array<Card> = []

    constructor() {
        this.addCards()
        if (Deno.env.get("GAME_ENV") == "prod") {
            this.shuffleCards()
        }
    }

    private addCards() {
        for (const card in Card) {
            this.cards.push(card as Card, card as Card)
        }
    }

    private shuffleCards() {
        this.cards.sort(() => Math.random() - 0.5)
    }

    getCards(): Array<Card> {
        return this.cards.map((c) => c)
    }

    compareCards(cardOneId: number, cardTwoId: number): boolean {
        if (
            (cardOneId < 0 || cardOneId > this.cards.length - 1) ||
            (cardTwoId < 0 || cardTwoId > this.cards.length - 1) ||
            cardOneId == cardTwoId
        ) {
            return false
        }

        if (this.cards[cardOneId] !== this.cards[cardTwoId]) {
            return false
        }

        return true
    }
}
