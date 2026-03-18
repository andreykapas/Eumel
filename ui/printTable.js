'use strict';

import { formatCard } from '../cards/index.js';

/**
 * printTable
 * Created: 3/18/2026
 */

export function printTable(table) {
  console.log('\nTABLE');

  for (const move of table.moves) {
    console.log(`P${move.playerId}: ${formatCard(move.card)}`);
  }

  console.log();
}
