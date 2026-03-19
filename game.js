'use strict';

import { Game } from './game/Game.js';
import { close } from './ui/input.js';
import { onAskChoice } from './ui/cli/onAskChoice.js';

/**
 * game
 * Created: 3/11/2026
 */

async function main() {
  const game = new Game(3);

  game.onAskChoice = onAskChoice;

  try {
    game.start();
    await game.playRound();
  } finally {
    close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
