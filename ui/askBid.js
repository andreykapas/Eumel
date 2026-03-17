'use strict';

import { ask } from './input.js';
import { formatCard } from '../cards/index.js';

/**
 * askBid
 * Created: 3/13/2026
 */

export async function askBid(players, playerId, hand, maxCards, forbiddenBid) {
  let options = Array.from({ length: maxCards + 1 }, (_, i) => i);

  if (forbiddenBid !== undefined) {
    options = options.filter((bid) => bid !== forbiddenBid);
  }

  const cards = hand
    .map((card, i) => `${i + 1}) ${formatCard(card)}`)
    .join('\n');

  console.log(`\nPlayer ${playerId}, make your bid`);
  console.log(`Your hand:\n${cards}`);
  for (const p of players) {
    if (p.bid !== undefined) {
      console.log(`Player ${p.id}: ${p.bid}`);
    }
  }
  const bidsSoFar = players.reduce((sum, p) => sum + (p.bid ?? 0), 0);
  console.log(`Bids so far: ${bidsSoFar}`);
  console.log(`Available bids: ${options.join(' ')}`);

  while (true) {
    const answer = Number(await ask('> '));

    if (options.includes(answer)) {
      return answer;
    }

    console.log('Invalid bid. Try again.');
  }
}
