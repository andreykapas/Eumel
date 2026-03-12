'use strict';

import { Game } from './game/Game.js';

/**
 * game
 * Created: 3/11/2026
 */

const game = new Game(3);

game.start();
game.playRound();
game.printResult();
