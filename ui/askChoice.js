'use strict';

import { ask } from './input.js';

/**
 * askChoice
 * Created: 3/12/2026
 */

export async function askChoice(message, options) {
  console.log(message);

  options.forEach((option, index) => console.log(`${index + 1}) ${option}`));

  const answer = await ask('> ');
  const index = Number(answer) - 1;

  return options[index];
}
