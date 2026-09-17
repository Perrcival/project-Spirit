# Battle Spirits Web Simulator 🎴

This project is a web application simulator for playing the **Battle Spirits** card game in a browser. It features a complete system including deck building, a single-player sandbox mode (for practice or playing against basic AI), and real-time online multiplayer gameplay.

---

## 🛠️ Tech Stack

Developing a complex web-based card game requires an architecture capable of managing intricate game states efficiently and swiftly.

### 1. Frontend (User Interface)
*   **Framework:** **React** (via **Vite**) + **TypeScript**
    *   *Reason:* React is ideal for creating UIs with frequent state updates (e.g., Core counts, drawing cards). TypeScript significantly reduces errors when writing complex card game logic.
*   **Styling:** **Tailwind CSS**
    *   *Reason:* Allows for rapid and flexible layout management for the game board and cards.
*   **Animation:** **Framer Motion**
    *   *Reason:* Adds smooth and engaging animations for card interactions (drawing, attacking, placing Cores).

### 2. Game Engine & State Management (Logic & Rules)
*   **Library:** **boardgame.io** or a **Custom State Machine** (written in TypeScript)
    *   *Reason:* `boardgame.io` is specifically designed for turn-based games, offering built-in phase and turn management along with multiplayer synchronization. If the specific rules of Battle Spirits prove too complex for it, we will build a custom State Machine using Zustand or Redux Toolkit.

### 3. Backend & Real-time Multiplayer (Server & Networking)
*   **Runtime:** **Node.js** + **Express**
*   **Real-time Communication:** **Socket.io**
    *   *Reason:* Used to transmit Game State data between two players instantly when an action occurs (e.g., declaring an attack, using a Flash effect).
*   **Database & Authentication:** **Supabase** (PostgreSQL)
    *   *Reason:* Perfect for managing player authentication, storing the Card Database, and saving players' Deck Data. It is easy to use and provides real-time capabilities out of the box.

---

## 🗺️ Project Phases (Development Roadmap)

This project is divided into phases to allow for systematic testing and clear milestones.

### Phase 1: Foundation & Card Database
**Goal:** Establish the underlying data structure and card rendering.
*   Design the Database Schema for Battle Spirits cards (e.g., Name, Color, Cost, Reduction, BP, Level, Type, Effects).
*   Create a Card Gallery UI to browse and search the database.
*   Implement mock data using basic starter deck cards.

### Phase 2: Deck Builder System
**Goal:** Allow players to create and save their own custom decks.
*   Build the Deck Builder UI (card selection pool and search functionality).
*   Implement deck building rules (max 3 copies per card, restricted/banned list validation).
*   Save / Load decks to and from the database.
*   Deck Import / Export system via Deck Code or JSON.

### Phase 3: Core Game Mechanics (Backend Logic)
**Goal:** Write the core game rules (focusing on logic, not UI).
*   Develop the Game State Machine divided by Phases (Start, Core, Draw, Refresh, Main, Attack, End).
*   Core Management System (calculating Core placement costs, leveling up Spirits).
*   Battle System (BP comparison) and Life reduction logic.
*   **Flash Window** integration (crucial) to allow players to use Magic/Flash effects during battles.

### Phase 4: Single Player / Sandbox UI
**Goal:** Connect the Phase 3 logic to a playable UI.
*   Create the Playmat UI (Field, Reserve, Trash, Void, Life, and Deck zones).
*   Implement Drag & Drop functionality for attaching Braves or moving Cores.
*   Sandbox Mode: Allow a single user to control both sides of the board to test rules and card interactions.
*   Add visual effects for summoning and destroying cards.

### Phase 5: Online Multiplayer
**Goal:** Connect two players over the internet.
*   Create a Lobby system and Matchmaking rooms (using Room Codes).
*   Integrate Socket.io to sync the Game State between players.
*   In-game Chat system.
*   Handle disconnects and reconnects mid-game gracefully.

### Phase 6: Polish, AI & Expansions
**Goal:** Finalize the game and prepare for real-world usage.
*   Add Sound Effects for placing cards, attacking, and phase transitions.
*   Develop a basic AI (Bot) for solo practice.
*   Add support for newer card expansions and complex effects.
*   Improve UI/UX for responsiveness (Tablet support).

---

## 📝 Additional Notes
This project emphasizes a Modular Architecture. This ensures that adding complex card effects (Keyword Effects like *Awaken*, *Curse*, *Armor*) in the future will be straightforward and won't break the core structural logic.
