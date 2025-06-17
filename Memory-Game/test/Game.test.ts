import {
    assertEquals,
    assertThrows,
} from "https://deno.land/std@0.217.0/assert/mod.ts"

import { Game } from "../src/Game.ts"

Deno.test({
    name: "should create a game",
    fn() {
        const playerNames = ["0", "1", "2"]
        const game = new Game(playerNames)

        assertEquals(game.play(0, 2), false)
        assertEquals(game.getCurrentPlayer(), { name: "1", score: 0 })
        assertEquals(game.play(0, 1), true)
        assertEquals(game.getCurrentPlayer(), { name: "1", score: 1 })
        assertEquals(game.play(1, 2), false)
        assertEquals(game.getCurrentPlayer(), { name: "2", score: 0 })
    },
})
