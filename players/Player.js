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
    this.score = 0;
  }

  addCard(card) {
    this._hand.push(card);
  }

  sortHand(sortFn) {
    sortFn(this._hand);
  }

  forEachCard(callback) {
    this._hand.forEach(callback);
  }

  cardsCount() {
    return this._hand.length;
  }

  playCard() {
    return this._hand.pop();
  }

  winTrick() {
    this.tricks++;
  }

  get hand() {
    return [...this._hand];
  }
}
