'use strict';

import {
  countScores,
  findRoundWinner,
  makeBids,
  playTricks,
} from './roundLogic.js';

/**
 * round
 * Created: 3/12/2026
 */

export async function playRound(players, startingPlayer, onMove) {
  const tricksCount = players[0].cardsCount();

  await makeBids(players, tricksCount, startingPlayer);

  const tricks = [];

  await playTricks(tricksCount, players, tricks, startingPlayer, onMove);

  countScores(players);

  const roundWinner = findRoundWinner(players);

  return {
    players,
    tricks,
    roundWinner,
  };
}
