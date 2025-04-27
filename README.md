# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Information from initial README.md

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
│   │   ├── Header.jsx
│   │   ├── NavBar.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.css
│   ├── Buttons/
│   │   ├── Buttons.jsx
│   │   └── Buttons.css
│   ├── Home/
│   │   ├── BannerCarousel.jsx
│   │   └── FeaturedProducts.jsx
│   ├── Products/
│   │   ├── FilterPanel.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   └── Products.css
│   ├── Categories/
│   │   └── CategoryList.jsx
│   ├── Cart/
│   │   ├── CartItem.jsx
│   │   └── CartSummary.jsx
│   ├── Account/
│   │   ├── AccountNav.jsx
│   │   ├── ProfileForm.jsx
│   │   ├── RegisterForm.jsx
│   │   ├── SettingsForm.jsx
│   │   └── OrderHistory.jsx
│   ├── Contact/
│   │   └── ContactForm.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── ShopPage.jsx
│   ├── ProductPage.jsx           # dynamic via product ID
│   ├── CategoriesPage.jsx
│   ├── CartPage.jsx
│   ├── ContactPage.jsx
│   ├── Account/
│   │   ├── AccountPage.jsx
│   │   ├── ProfilePage.jsx
│   │   ├── RegisterPage.jsx
│   │   ├── SettingsPage.jsx
│   │   └── OrderHistoryPage.jsx
│   ├── About/
│   │   ├── AboutUsPage.jsx
│   │   ├── TeamPage.jsx
│   │   └── LorePage.jsx
│   └── TheHunt/
│       ├── TheHuntPage.jsx
│       ├── BlogPage.jsx
│       ├── GamePage.jsx
│       └── ScavengerHuntPage.jsx
├── context/
│   ├── CartContext.jsx
│   └── AuthContext.jsx
├── hooks/
│   ├── useProducts.js
│   ├── useCart.js
│   ├── useAuth.js
│   └── useGame.js               # encapsulate game state & logic
├── data/
│   └── products.json            # migration of the JS product array here
├── App.jsx
├── App.css (images, text styles, global styles, display rows/columns)
├── index.jsx
├── routes.jsx               
└── tsconfig.json

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
