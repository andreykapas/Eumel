'use strict';

import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

/**
 * input
 * Created: 3/12/2026
 */

const rl = readline.createInterface({ input, output });

export async function ask(question) {
  return rl.question(question);
}

export function close() {
  rl.close();
}
