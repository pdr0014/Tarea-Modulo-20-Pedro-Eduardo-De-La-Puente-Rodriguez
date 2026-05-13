# Tarea-Modulo-20-Pedro-Eduardo-De-La-Puente-Rodriguez
# World Time Calculator

## Project Overview
This project is a functional web-based World Time Calculator developed as part of an AI-Pair Programming and Git integration task. It allows users to view the current time and date for various global locations using a modern, interactive interface. The application logic focuses on real-time data synchronization and international time standards.

## Features
* **Real-Time Clock**: Displays hours, minutes, and seconds with a one-second refresh interval.
* **Global Time Zones**: Supports multiple cities across America, Europe, Asia, Oceania, and Africa using IANA standard time zone strings.
* **Internationalization**: Implements the JavaScript Internationalization API for accurate date and time formatting in Spanish.
* **Adaptive Design**: Features a Glassmorphism aesthetic with a dynamic animated background and responsive layout.

## Technical Implementation

### HTML Structure
The `index.html` file establishes a semantic hierarchy for the application. It utilizes the `optgroup` element to categorize cities by continent, improving user navigation. The time and date are rendered within specific `div` and `p` containers that are dynamically updated via JavaScript.

### Styling and Theme
The `style.css` file implements a Skyline theme using a CSS linear gradient animation. Key design choices include:
* **Glassmorphism**: The main clock card uses `backdrop-filter: blur` and semi-transparent backgrounds to create a modern glass effect.
* **Typography**: The use of `JetBrains Mono` ensures that digits remain aligned during time transitions, providing a professional digital clock feel.
* **Animations**: A keyframe animation moves the background gradient to simulate the transition of light throughout the day.

### JavaScript Logic
The `script.js` file manages the core functionality:
* **DOM Selection**: Captures user input from the dropdown menu and targets display elements.
* **Intl.DateTimeFormat**: Instead of manual offsets, the program uses the native browser API to handle complex time zone calculations, including Daylight Saving Time.
* **Update Loop**: A `setInterval` function executes every 1000 milliseconds to ensure the clock remains accurate without requiring a page refresh.

## Git Workflow
The project follows a standard professional version control workflow:
1. **Initialization**: Local repository setup via `git init`.
2. **Branching**: A `feature-update` branch was used to implement and test specific modifications before merging into the `main` branch.
3. **Commit History**: Descriptive messages were used to document the evolution of the HTML, CSS, and documentation.
4. **Remote Integration**: The local history was pushed to a public GitHub repository.