'use strict';

import { runTrick } from './trick.js';

/**
 * round
 * Created: 3/12/2026
 */

export function playRound(players) {
  const tricksCount = players[0].cardsCount();

  const tricks = [];

  let startingPlayer = 0;

  for (let round = 0; round < tricksCount; round++) {
    const hands = players.map((p) => p.hand);

    const { table, winner } = runTrick(players, startingPlayer);

    players[winner.playerId].winTrick();

    tricks.push({
      leader: startingPlayer,
      hands,
      table,
      winner,
    });

    startingPlayer = winner.playerId;
  }

  return {
    players,
    tricks,
  };
}
