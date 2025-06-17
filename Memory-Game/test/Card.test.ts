import {
    assertEquals,
    assertThrows,
} from "https://deno.land/std@0.217.0/assert/mod.ts"

import { Card, Table } from "../src/Card.ts"

Deno.env.set("GAME_ENV", "dev")

Deno.test({
    name: "should create a table with an array containing a pair of each card",
    fn() {
        const table = new Table()

        for (const card in Card) {
            const result = table.getCards().filter((c) => c == card)
            assertEquals(result.length, 2)
        }

        assertEquals(table.compareCards(-1, 0), false)
        assertEquals(table.compareCards(0, -1), false)
        assertEquals(table.compareCards(0, 0), false)
        assertEquals(table.compareCards(0, 1), true)
    },
})
