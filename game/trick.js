'use strict';

import { rankOrder, suitOrder } from '../cards/index.js';
import { askChoice } from '../ui/askChoice.js';

/**
 * trick
 * Created: 3/11/2026
 */

export function determineTrickWinner(table) {
  let winner = table[0];

  for (const move of table) {
    const current = move.card;
    const best = winner.card;

    if (suitOrder[current.suit] > suitOrder[best.suit]) {
      winner = move;
    } else if (
      suitOrder[current.suit] === suitOrder[best.suit] &&
      rankOrder[current.rank] > rankOrder[best.rank]
    ) {
      winner = move;
    }
  }

  return winner;
}

export async function playTrick(players, startingPlayer) {
  const table = [];

  for (let i = 0; i < players.length; i++) {
    const player = players[(startingPlayer + i) % players.length];

    const choice = await askChoice(
      `Player ${player.id}, choose card, please`,
      player.hand
    );

    const card = player.playCard(choice);

    const move = {
      playerId: player.id,
      card,
    };

    table.push(move);
  }

  return table;
}

export async function runTrick(players, startingPlayer) {
  const table = await playTrick(players, startingPlayer);

  const winner = determineTrickWinner(table);

  return {
    table,
    winner,
  };
}
