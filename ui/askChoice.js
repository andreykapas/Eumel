'use strict';

import { ask } from './input.js';
import { formatCard } from '../cards/index.js';

/**
 * askChoice
 * Created: 3/12/2026
 */

export async function askChoice({ message, options }) {
  while (true) {
    const answer = await ask('> ');
    const index = Number(answer) - 1;

    if (Number.isInteger(index) && index >= 0 && index < options.length) {
      return options[index];
    }
  }
}
