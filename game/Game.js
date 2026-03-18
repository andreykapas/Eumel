'use strict';

/**
 * Game
 * Created: 3/12/2026
 */

import { createDeck, shuffle, sortHand } from '../cards/index.js';
import { createPlayers, dealCards } from '../players/players.js';
import { playRound } from './round.js';
import { Table } from '../ui/table.js';
import { printTable } from '../ui/printTable.js';
import { printWinner } from '../ui/printWinner.js';

export class Game {
  constructor(playersCount) {
    this.playersCount = playersCount;
    this.players = [];
    this.deck = [];
    this.startingPlayer = 0;
    this.trickNumber = 0;

    this.table = new Table();
    this.onMove = (move) => {
      if (this.table.moves.length === 0) {
        console.log(`\n--- Trick ${this.trickNumber + 1} ---`);
      }

      this.table.addMove(move);
      printTable(this.table);
    };

    this.onTrickEnd = (trick) => {
      this.trickNumber++;
      printWinner(trick);
      this.table.clear();
    };
  }

  start() {
    this.deck = createDeck();

    shuffle(this.deck);

    this.players = createPlayers(this.playersCount);

    dealCards(this.deck, this.players, 3);

    for (const player of this.players) {
      player.sortHand(sortHand);
    }
  }

  async playRound() {
    const result = await playRound(
      this.players,
      this.startingPlayer,
      this.onMove,
      this.onTrickEnd
    );

    this.startingPlayer = result.roundWinner;
  }

  printResult() {
    console.log('\n=== Round result ===');

    for (const player of this.players) {
      console.log(
        `Player ${player.id}: ${player.roundTricks} tricks, ${player.roundPoints} points (total: ${player.score}), hits: ${player.hits}`
      );
    }
  }
}
