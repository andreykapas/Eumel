'use strict';

import { ask } from './input.js';
import { formatCard } from '../cards/index.js';

/**
 * askChoice
 * Created: 3/12/2026
 */

export async function askChoice(message, options) {
  console.log(`\n${message}\n`);

  const cards = options
    .map((card, i) => `${i + 1}) ${formatCard(card)}`)
    .join('\n');

  console.log(`Your hand:\n${cards}\n`);

  while (true) {
    const answer = await ask('> ');
    const index = Number(answer) - 1;

    if (Number.isInteger(index) && index >= 0 && index < options.length) {
      return options[index];
    }

    console.log('Invalid choice. Try again.');
  }
}
