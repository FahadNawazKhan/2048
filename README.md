
# 2048 CLI Game (Node.js)

A fully working **2048 game in the terminal**, built from scratch using **Node.js**.
No UI frameworks. No game engines. Just core logic, arrays, and user input.

This project focuses on **understanding game state, movement logic, and edge cases**, rather than visuals.

---

## 📌 Features

* 4×4 grid gameplay (classic 2048 rules)
* Move in all directions:

  * `w` → up
  * `a` → left
  * `s` → down
  * `d` → right
* Correct tile shifting and merging logic
* New tiles spawn **only when a valid move occurs**
* Game-over detection:

  * Board full **and**
  * No possible merges
* Pure CLI experience using `readline-sync`

---

## Tech Stack

* **Node.js**
* **JavaScript (ES Modules)**
* **readline-sync** for terminal input

---

##  How to Run

###  Clone the repository

```bash
git clone git@github.com:FahadNawazKhan/2048.git
cd 2048-cli-game
```

###  Install dependencies

```bash
npm install
```

###  Run the game

```bash
node game.js
```

---

##  Controls

| Key | Action     |
| --- | ---------- |
| `w` | Move Up    |
| `a` | Move Left  |
| `s` | Move Down  |
| `d` | Move Right |
| `q` | Quit Game  |

---

##  Implementation Highlights

* **State-based design** using a 2D array
* Movement logic broken into:

  * Shift
  * Merge
  * Shift again
* Direction handling implemented via:

  * Row reversal (Right)
  * Column extraction & restoration (Up/Down)
* Manual board comparison to detect valid moves (no JSON hacks)
* Defensive checks to prevent:

  * Out-of-bounds errors
  * Invalid tile spawns
  * Premature game-over triggers

---

This project prioritizes **clarity and correctness** over appearance.

---

##  What I Learned

* Working with 2D arrays and mutable state
* Designing reusable movement logic
* Handling edge cases and game-over conditions
* Debugging off-by-one and reference bugs
* Building and finishing a project end-to-end

---

##  Possible Improvements

* Score tracking
* Win condition detection (2048 tile)
* Colored tiles in terminal
* High-score persistence
* Refactoring movement into a single dispatcher

---

##  License

This project is open-source and free to use for learning purposes.

---

##  Author

**Mohammad Fahad Nawaz Khan**
Creative Product Engineer | Node.js | JavaScript

