'use strict';

import { formatCard } from '../cards/index.js';
import { printHands } from './print.js';

/**
 * printRound
 * Created: 3/12/2026
 */

export function printRound(result) {
  for (let i = 0; i < result.tricks.length; i++) {
    const { leader, hands, table, winner } = result.tricks[i];

    console.log(`\n=== Trick ${i + 1} ===\n`);
    printHands(hands);

    console.log(`Leader: Player ${leader}\n`);

    for (const move of table) {
      console.log(`P${move.playerId} plays ${formatCard(move.card)}`);
    }

    console.log(
      `Winner: Player ${winner.playerId} (${formatCard(winner.card)})\n`
    );
  }
}
