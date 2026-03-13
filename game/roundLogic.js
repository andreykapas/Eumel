'use strict';

import { askBid } from '../ui/askBid.js';
import { runTrick } from './trick.js';

/**
 * roundLogic
 * Created: 3/13/2026
 */

export const countScores = (players) => {
  for (const player of players) {
    player.roundTricks = player.tricks;

    const points =
      player.bid === player.tricks ? 10 + player.tricks : player.tricks;

    player.score += points;

    player.tricks = 0;
  }
};

export const makeBids = async (players, tricksCount) => {
  let sumBids = 0;

  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    const isLastPlayer = i === players.length - 1;
    let forbiddenBid;

    if (isLastPlayer) {
      forbiddenBid = tricksCount - sumBids;
    }

    player.bid = await askBid(player.id, tricksCount, forbiddenBid);
    sumBids += player.bid;
  }
};

export const playTricks = async (tricksCount, players, tricks) => {
  let startingPlayer = 0;

  for (let round = 0; round < tricksCount; round++) {
    const hands = players.map((p) => p.hand);

    const { table, winner } = await runTrick(players, startingPlayer);

    players[winner.playerId].winTrick();

    tricks.push({
      leader: startingPlayer,
      hands,
      table,
      winner,
    });

    startingPlayer = winner.playerId;
  }
};
