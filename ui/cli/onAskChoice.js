'use strict';

import { askChoice } from '../askChoice.js';
import { formatCard } from '../../cards/index.js';

/**
 * onAskChoice
 * Created: 3/19/2026
 */

export async function onAskChoice({ player, options, leadSuit }) {
  console.log(`\nPlayer ${player.id}, choose card`);

  if (leadSuit) {
    console.log(`Lead suit: ${leadSuit}`);
  }

  const cards = options
    .map((card, i) => `${i + 1}) ${formatCard(card)}`)
    .join('\n');

  console.log(`Available cards:\n${cards}`);

  return askChoice({ options });
}
