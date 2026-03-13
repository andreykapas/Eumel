'use strict';

import { countScores, makeBids, playTricks } from './roundLogic.js';

/**
 * round
 * Created: 3/12/2026
 */

export async function playRound(players) {
  const tricksCount = players[0].cardsCount();

  await makeBids(players, tricksCount);

  const tricks = [];

  await playTricks(tricksCount, players, tricks);

  countScores(players);

  return {
    players,
    tricks,
  };
}
