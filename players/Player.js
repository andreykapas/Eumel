'use strict';

/**
 * Player
 * Created: 3/12/2026
 */

export class Player {
  constructor(id) {
    this.id = id;
    this._hand = [];
    this.bid = 0;
    this.tricks = 0;
    this.roundTricks = 0;

    this.roundPoints = 0;
    this.score = 0;

    this.hits = 0;
  }

  addCard(card) {
    this._hand.push(card);
  }

  sortHand(sortFn) {
    sortFn(this._hand);
  }

  cardsCount() {
    return this._hand.length;
  }

  playCard(card = this._hand[0]) {
    const index = this._hand.findIndex((c) => c === card);

    if (index === -1) {
      throw new Error(`"Card not in hand"`);
    }

    return this._hand.splice(index, 1)[0];
  }

  winTrick() {
    this.tricks++;
  }

  get hand() {
    return [...this._hand];
  }
}
