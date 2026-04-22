# Eumel 🃏
A web-based implementation of Eumel — a trick-taking card game popular in German universities and military circles. Built with vanilla JavaScript.
## Rules
- 52 cards, 4–8 players
- Cards are dealt from 1 to a full deck and back, depending on the round
- Before each round, players make bids — how many tricks they expect to win
- **Hit your bid exactly** → +10 points + number of tricks taken
- **Miss your bid** → only tricks taken (no bonus)
- Player with the lowest score at the end wears the "eumel" sign all next day 😄
## Project Structure
├── cards/ # Card definitions and deck logic ├── game/ # Core game logic (Game class) ├── players/ # Player logic ├── ui/ # User interface and input handling └── game.js # Entry point

## Tech Stack
- Vanilla JavaScript (ES Modules)
- No frameworks or external dependencies
## Getting Started
```bash
git clone https://github.com/andreykapas/Eumel.git
cd Eumel
npx serve .
Then open http://localhost:3000 in your browser.

Author
andreykapas
