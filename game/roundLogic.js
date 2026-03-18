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

    if (player.bid === player.tricks) {
      player.hits++;
    }

    player.roundPoints = points;
    player.score += points;

    player.tricks = 0;
  }
};

export const findRoundWinner = (players) => {
  let winner = players[0];

  for (const player of players) {
    if (player.roundPoints > winner.roundPoints) {
      winner = player;
    }
  }

  return winner.id;
};

export const findMostAccuratePlayer = (players) => {
  let best = players[0];

  for (const player of players) {
    if (player.hits > best.hits) {
      best = player;
    }
  }

  return best.id;
};

export const makeBids = async (players, tricksCount, startingPlayer) => {
  let sumBids = 0;

  for (let i = 0; i < players.length; i++) {
    const player = players[(startingPlayer + i) % players.length];
    const isLastPlayer = i === players.length - 1;
    let forbiddenBid;

    if (isLastPlayer) {
      forbiddenBid = tricksCount - sumBids;
    }

    player.bid = await askBid(
      players,
      player.id,
      player.hand,
      tricksCount,
      forbiddenBid
    );
    sumBids += player.bid;
  }
};

export const playTricks = async (
  tricksCount,
  players,
  tricks,
  startingPlayer,
  onMove,
  onTrickEnd
) => {
  startingPlayer = (startingPlayer + players.length - 1) % players.length;

  for (let round = 0; round < tricksCount; round++) {
    const hands = players.map((player) => player.hand);
    const { table, winner } = await runTrick(players, startingPlayer, onMove);
    players[winner.playerId].winTrick();

    tricks.push({
      leader: startingPlayer,
      hands,
      table,
      winner,
    });

    if (onTrickEnd) {
      onTrickEnd({ leader: startingPlayer, table, winner });
    }

    startingPlayer = winner.playerId;
  }
};
