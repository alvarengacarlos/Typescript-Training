import { Game } from "./Game.ts"

main()
async function main() {
    Deno.env.set("GAME_ENV", "prod")

    const players = []

    let numberOfPlayers = 0
    do {
        console.log("Input the number of players")
        numberOfPlayers = await readNumber()
    } while (numberOfPlayers <= 0)

    let i = 0
    while (i != numberOfPlayers) {
        console.log(`Input the name of the player ${i}`)
        const playerName = await readString()
        players.push(playerName)
        i++
    }

    const game = new Game(players)
    const cards = game.getCards()
    const unhiddenCards: Array<string> = []
    const div = ":----------------------:"

    let hits = 0
    while (cards.length != hits) {
        console.log(div)
        console.log(
            `Player: ${game.getCurrentPlayer().name}. Score: ${game.getCurrentPlayer().score}`,
        )
        console.log(div)
        console.table(
            cards.map((c) =>
                unhiddenCards.includes(c.toString()) ? c.toString() : "*"
            ),
        )
        console.log(div)

        let indexOne = 0, indexTwo = 0
        do {
            console.log("Input a card index one")
            indexOne = await readNumber()
            console.log("Input a card index two")
            indexTwo = await readNumber()
        } while (
            (indexOne < 0 || indexOne > cards.length - 1) ||
            (indexTwo < 0 || indexTwo > cards.length - 1)
        )

        console.clear()

        console.log(div)
        console.log(
            `Player: ${game.getCurrentPlayer().name}. Score: ${game.getCurrentPlayer().score}`,
        )
        console.log(div)
        console.table(cards.map((c, index) => {
            if (
                (index == indexOne) ||
                (index == indexTwo) ||
                unhiddenCards.includes(c.toString())
            ) {
                return c.toString()
            }

            return "*"
        }))
        console.log(div)

        const isRight = game.play(indexOne, indexTwo)
        if (isRight) {
            hits += 2
            unhiddenCards.push(
                cards[indexOne].toString(),
                cards[indexTwo].toString(),
            )
        }

        await new Promise((resolve) => setTimeout(resolve, 2000))

        console.clear()
    }

    console.table(
        game.getAllPlayers().sort((a, b) => {
            if (a.score > b.score) {
                return -1
            }

            if (b.score > a.score) {
                return 1
            }

            return 0
        }),
    )
}

async function readNumber(): Promise<number> {
    const buf = new Uint8Array(1024)

    const n = <number> await Deno.stdin.read(buf)
    const input = new TextDecoder().decode(buf.subarray(0, n)).trim()
    const num = Number(input)

    return num
}

async function readString(): Promise<string> {
    const buf = new Uint8Array(1024)

    const n = <number> await Deno.stdin.read(buf)
    const input = new TextDecoder().decode(buf.subarray(0, n)).trim()
    return input
}
