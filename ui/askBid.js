'use strict';

import { ask } from './input.js';

/**
 * askBid
 * Created: 3/13/2026
 */

export async function askBid(playerId, maxCards, forbiddenBid) {
  let options = Array.from({ length: maxCards + 1 }, (_, i) => i);

  if (forbiddenBid !== undefined) {
    options = options.filter((bid) => bid !== forbiddenBid);
  }

  console.log(`\nPlayer ${playerId}, make your bid`);
  console.log(`Available bids: ${options.join(' ')}`);

  while (true) {
    const answer = Number(await ask('> '));

    if (options.includes(answer)) {
      return answer;
    }

    console.log('Invalid bid. Try again.');
  }
}
