# Assignment2

A small web project built with JavaScript, HTML, and SCSS/CSS. This repository contains the source for a front-end assignment (Assignment2) — implemention details, usage instructions, and development notes are below.

## Table of contents
- [About](#about)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Demo / Preview](#demo--preview)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Install & Run (development)](#install--run-development)
  - [Build / Production (if applicable)](#build--production-if-applicable)
- [Project structure](#project-structure)
- [How to use](#how-to-use)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About
This project is an assignment that demonstrates front-end development skills using JavaScript with HTML and SCSS. It includes interactive UI behavior, styling with SCSS/CSS, and any small app logic required by the assignment prompt.

## Features
- Vanilla JavaScript implementation for DOM interactions and app logic
- Modular styles using SCSS (compiled to CSS)
- Simple, accessible UI designed for clarity and responsiveness
- Build or dev-server-ready (instructions below)

## Tech stack
- JavaScript (ES6+)
- HTML5
- SCSS / CSS
- (Optional) Node.js and npm for tooling, bundling, or live-reload

## Demo / Preview
Add screenshots or GIFs here to show the app. Example:

![Preview placeholder](docs/screenshot.png)

Replace the placeholder with real images from the `docs/` directory or link to a live deployment.

## Getting started

### Prerequisites
- A modern browser (Chrome, Firefox, Edge, Safari)
- Optionally, Node.js (v14+) and npm if you want to use a local dev server, build tooling, or SCSS compilation

### Install & Run (development)
If the project only contains static files:
1. Clone the repo:
   - git clone https://github.com/AmanaFaizal/Assignment2.git
2. Open `index.html` in your browser.

If you prefer or need a local server (recommended for modules, fetch, or routing):
- Using npx http-server:
  - npx http-server . -c-1
  - Open http://localhost:8080 (or the port shown)
- Using live-server:
  - npx live-server

If the repo includes a package.json with scripts:
1. npm install
2. npm run start
(Replace `start` with the appropriate dev script name if different.)

### Build / Production (if applicable)
If the project uses a bundler or SCSS compilation:
- npm run build
- Serve the generated `dist/` (or configured output) folder with a static server.

## Project structure (suggested — adapt to this repo)
- index.html — main entry
- src/ or js/ — JavaScript source files
- scss/ or styles/ — SCSS source files
- css/ — compiled CSS (if committed)
- assets/ — images, icons
- docs/ — screenshots, design notes
- package.json — npm scripts and dependencies (optional)

Adjust these paths to match the repository layout.

## How to use
- Open the app, interact with UI controls (buttons, inputs)
- Describe any specific controls or flows here (e.g., "Click Add to create a new item; double-click to edit...")

(Add specific usage examples relevant to the assignment.)

## Testing
If there are tests, document how to run them:
- npm test

If not, add manual test steps or testing checklist items.

## Contributing
Contributions and improvements are welcome:
1. Fork the repo
2. Create a branch: git checkout -b feature/your-feature
3. Commit your changes: git commit -m "Add feature"
4. Push to your branch: git push origin feature/your-feature
5. Open a pull request describing your changes

Please include screenshots and a short description for UI changes.

## License
If you want a permissive license, consider:
MIT License — see LICENSE file for details.

(If you prefer a different license, replace this section.)

## Contact
Maintainer: AmanaFaizal  
Repository: https://github.com/AmanaFaizal/Assignment2

---

Notes:
- Replace placeholders (screenshots, specific run/build commands) with exact project details.
- If you want, I can detect existing scripts and fill in exact commands based on this repo's package.json and file layout.
