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

export async function playTrick(players, startingPlayer, onMove) {
  const table = [];
  let leadSuit = null;

  for (let i = 0; i < players.length; i++) {
    const player = players[(startingPlayer + i) % players.length];

    let options = player.hand;

    if (leadSuit) {
      const sameSuit = options.filter((c) => c.suit === leadSuit);
      if (sameSuit.length) options = sameSuit;
    }

    const choice = await askChoice(
      `Player ${player.id}, choose card, please`,
      options
    );

    const card = player.playCard(choice);

    if (!leadSuit) {
      leadSuit = card.suit;
    }

    const move = {
      playerId: player.id,
      card,
    };

    table.push(move);

    if (onMove) {
      onMove(move, table);
    }
  }

  return table;
}

export async function runTrick(players, startingPlayer, onMove) {
  const table = await playTrick(players, startingPlayer, onMove);

  const winner = determineTrickWinner(table);

  return {
    table,
    winner,
  };
}
