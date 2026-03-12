'use strict';

import { Player } from './Player.js';

/**
 * players
 * Created: 3/11/2026
 */

export function createPlayers(count) {
  const players = [];

  for (let i = 0; i < count; i++) {
    players.push(new Player(i));
  }

  return players;
}

export function dealCards(deck, players, cardsPerPlayer) {
  for (let i = 0; i < cardsPerPlayer; i++) {
    for (const player of players) {
      player.addCard(deck.pop());
    }
  }
}
