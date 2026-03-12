'use strict';

import { Game } from './game/Game.js';

/**
 * game
 * Created: 3/11/2026
 */

async function main() {
  const game = new Game(3);

  game.start();
  await game.playRound();
  game.printResult();
}

main();
