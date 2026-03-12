'use strict';

import { rankOrder, suitOrder } from './constants.js';

/**
 * sort
 * Created: 3/12/2026
 */

export function sortHand(hand) {
  hand.sort((a, b) => {
    if (suitOrder[a.suit] !== suitOrder[b.suit]) {
      return suitOrder[b.suit] - suitOrder[a.suit];
    }

    return rankOrder[b.rank] - rankOrder[a.rank];
  });
}
