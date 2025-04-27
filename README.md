## Mystic Campers React SPA
Welcome to the Mystic Campers e-commerce site rebuild! This project is a modern, responsive single-page application (SPA) built with React and TypeScript, using component-based architecture and best practices.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Setup & Installation](#setup--installation)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)

---

## Project Overview

This SPA is a complete reimagining of the original Mystic Campers website using React. It features modular, reusable components, state and context management, and clean, scalable code organization. In future phases, we'll integrate backend functionality.

---

## Features

- **Responsive design** for desktop and mobile
- **Reusable components** with props and state
- **Product catalog & filtering**
- **Shopping cart** with add/remove/quantity management
- **User account** pages (profile, registration, order history)
- **Contact form** with validation
- **About/team/lore** informational sections
- **Mini-game(hangman), scavenger hunt, and blog** under "The Hunt"
- **CSS modules** for scoped, maintainable styling

---

## Tech Stack
 
- [React](https://react.dev/) (with [TypeScript](https://www.typescriptlang.org/))
- [React Router](https://reactrouter.com/) (for SPA navigation)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Context API](https://react.dev/reference/react/useContext) (state management)
- [Create React App](https://create-react-app.dev/) (project scaffolding)

---

## Folder Structure
src/
├── assets/
│   └── images/                 # all banner, catalog, icon assets
├── components/
│   ├── Layout/
│   │   ├── Header.tsx
│   │   ├── NavBar.tsx
│   │   └── Footer.tsx
│   ├── Home/
│   │   ├── BannerCarousel.tsx
│   │   └── FeaturedProducts.tsx
│   ├── Products/
│   │   ├── FilterPanel.tsx
│   │   ├── ProductCard.tsx
│   │   └── ProductGrid.tsx
│   ├── Categories/
│   │   └── CategoryList.tsx
│   ├── Cart/
│   │   ├── CartItem.tsx
│   │   └── CartSummary.tsx
│   ├── Account/
│   │   ├── AccountNav.tsx
│   │   ├── ProfileForm.tsx
│   │   ├── RegisterForm.tsx
│   │   ├── SettingsForm.tsx
│   │   └── OrderHistory.tsx
│   ├── Contact/
│   │   └── ContactForm.tsx
│   ├── About/
│   │   ├── AboutUs.tsx
│   │   ├── Team.tsx
│   │   └── Lore.tsx
│   └── Hunt/
│       ├── HuntOverview.tsx
│       ├── BlogList.tsx
│       ├── BlogPost.tsx
│       ├── ScavengerHunt.tsx
│       └── GameComponent.tsx    # wraps game.ts logic
├── pages/
│   ├── HomePage.tsx
│   ├── ShopPage.tsx
│   ├── ProductPage.tsx           # dynamic via product ID
│   ├── CategoriesPage.tsx
│   ├── CartPage.tsx
│   ├── ContactPage.tsx
│   ├── Account/
│   │   ├── AccountPage.tsx
│   │   ├── ProfilePage.tsx
│   │   ├── RegisterPage.tsx
│   │   ├── SettingsPage.tsx
│   │   └── OrderHistoryPage.tsx
│   ├── About/
│   │   ├── AboutUsPage.tsx
│   │   ├── TeamPage.tsx
│   │   └── LorePage.tsx
│   └── TheHunt/
│       ├── TheHuntPage.tsx
│       ├── BlogPage.tsx
│       ├── GamePage.tsx
│       └── ScavengerHuntPage.tsx
├── context/
│   ├── CartContext.tsx
│   └── AuthContext.tsx
├── hooks/
│   ├── useProducts.ts
│   ├── useCart.ts
│   ├── useAuth.ts
│   └── useGame.ts               # encapsulate game state & logic
├── data/
│   └── products.json            # migration of the JS product array here
├── App.tsx
├── index.tsx
├── routes.tsx                  
└── tsconfig.json

## Setup & Installation


---

## Setup & Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/YOUR-USERNAME/mystic-campers.git
    cd mystic-campers
    ```

2. **Install dependencies:**

    ```bash
    npm install
    # or, if using yarn
    yarn install
    ```

3. **Start the development server:**

    ```bash
    npm start
    # or
    yarn start
    ```

4. Open [http://localhost:3000](http://localhost:3000) to view in your browser.

---

## Available Scripts

- `npm start` — Runs the app in development mode.
- `npm run build` — Builds the app for production.
- `npm test` — Launches the test runner.
- `npm run lint` — Runs linter (if configured).
- `npm run format` — Formats code (if Prettier is configured).

---

## Contributing

1. **Fork** the repo and create your feature branch (`git checkout -b feature/YourFeature`).
2. **Commit your changes** (`git commit -am 'Add some feature'`).
3. **Push to the branch** (`git push origin feature/YourFeature`).
4. **Open a Pull Request** describing your changes.

Please follow the existing folder structure and naming conventions. All major changes should be discussed in advance.
