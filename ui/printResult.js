'use strict';

/**
 * printResult
 * Created: 3/18/2026
 */

export function printResult(players) {
  console.log('\n=== Round result ===');

  for (const player of players) {
    console.log(
      `Player ${player.id}: ${player.roundTricks} tricks, ${player.roundPoints} points (total: ${player.score}), hits: ${player.hits}`
    );
  }
}
