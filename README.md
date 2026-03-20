# Recipes App

A recipe browser built with React that lets you explore a collection of recipes, search by name or health label, and view detailed nutritional information.

## Features

- Browse an overview of all recipes with key details
- Click any recipe card for a detailed view
- Search recipes by name or health labels
- View detailed nutrient information via a slide-out drawer
- Navigate back to the full recipes overview

## Tech Stack

![React](https://img.shields.io/badge/-React_18-61DAFB?style=flat-square&logo=react&logoColor=black)
![Chakra UI](https://img.shields.io/badge/-Chakra_UI-319795?style=flat-square&logo=chakraui&logoColor=white)
![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

- **React 18** for the UI
- **Chakra UI** for component styling and layout
- **Framer Motion** for animations
- **Vite** for fast development and bundling

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── RecipeCard.jsx
│   ├── RecipeSearch.jsx
│   ├── SearchList.jsx
│   └── ui/
│       ├── Header.jsx
│       ├── InfoDrawer.jsx
│       └── SearchInput.jsx
├── pages/
│   ├── RecipeListPage.jsx
│   └── RecipePage.jsx
└── utils/
    └── data.js           # Recipe dataset
```
