import {
    assertEquals,
    assertThrows,
} from "https://deno.land/std@0.217.0/assert/mod.ts"

import { PlayersCircularList } from "../src/Player.ts"

Deno.test({
    name: "should create a players circular list",
    fn() {
        const circularList = new PlayersCircularList()
        assertEquals(circularList.getTotalOfPlayers(), 0)

        assertThrows(
            () => circularList.getCurrentPlayer(),
            "No player were found",
        )

        circularList.addPlayer("0")
        assertEquals(circularList.getTotalOfPlayers(), 1)
        assertEquals(circularList.getCurrentPlayer(), { name: "0", score: 0 })

        assertEquals(circularList.getAllPlayers().length, 1)
        assertEquals(circularList.getAllPlayers(), [
            { name: "0", score: 0 },
        ])

        circularList.addPlayer("1")
        assertEquals(circularList.getTotalOfPlayers(), 2)
        assertEquals(circularList.getCurrentPlayer(), { name: "0", score: 0 })

        assertEquals(circularList.getAllPlayers().length, 2)
        assertEquals(circularList.getAllPlayers(), [
            { name: "0", score: 0 },
            { name: "1", score: 0 },
        ])

        circularList.addPlayer("2")
        assertEquals(circularList.getTotalOfPlayers(), 3)
        assertEquals(circularList.getCurrentPlayer(), { name: "0", score: 0 })

        assertEquals(circularList.getAllPlayers().length, 3)
        assertEquals(circularList.getAllPlayers(), [
            { name: "0", score: 0 },
            { name: "1", score: 0 },
            { name: "2", score: 0 },
        ])

        circularList.nextPlayer()
        assertEquals(circularList.getCurrentPlayer(), { name: "1", score: 0 })

        circularList.nextPlayer()
        assertEquals(circularList.getCurrentPlayer(), { name: "2", score: 0 })

        circularList.nextPlayer()
        assertEquals(circularList.getCurrentPlayer(), { name: "0", score: 0 })

        circularList.plusCurrentPlayerScore()
        assertEquals(circularList.getCurrentPlayer(), { name: "0", score: 1 })
        circularList.plusCurrentPlayerScore()
        assertEquals(circularList.getCurrentPlayer(), { name: "0", score: 2 })
    },
})
