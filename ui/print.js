'use strict';

import { formatCard } from '../cards/index.js';

/**
 * print
 * Created: 3/11/2026
 */

export function printHands(hands) {
  for (let i = 0; i < hands.length; i++) {
    const hand = hands[i].map(formatCard).join(' ');
    console.log(`Player ${i} hand: ${hand}`);
  }
}
