'use strict';

import { ask } from './input.js';

/**
 * askChoice
 * Created: 3/12/2026
 */

export async function askChoice(message, options) {
  console.log(`\n${message}\n`);

  options.forEach((option, index) => console.log(`${index + 1}) ${option}`));

  while (true) {
    const answer = await ask('> ');
    const index = Number(answer) - 1;

    if (Number.isInteger(index) && index >= 0 && index < options.length) {
      return options[index];
    }

    console.log('Invalid choice. Try again.');
  }
}
