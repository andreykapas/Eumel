'use strict';

/**
 * table
 * Created: 3/18/2026
 */

export class Table {
  constructor() {
    this.moves = [];
  }

  addMove(move) {
    this.moves.push(move);
  }

  clear() {
    this.moves = [];
  }
}
