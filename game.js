'use strict';

import { Game } from './game/Game.js';
import { close } from './ui/input.js';

/**
 * game
 * Created: 3/11/2026
 */

async function main() {
  const game = new Game(3);

  try {
    game.start();
    await game.playRound();
    game.printResult();
  } finally {
    close();
  }
}

main();
