'use strict';

import { suitIcons } from './constants.js';

/**
 * format
 * Created: 3/11/2026
 */

export function formatCard(card) {
  return suitIcons[card.suit] + card.rank;
}
