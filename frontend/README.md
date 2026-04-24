# Portfolio Frontend (React + Vite + Tailwind)

This is a responsive portfolio frontend built with React, Vite, and Tailwind CSS.

## Features

- Mobile-first responsive layout
- Dark mode toggle with persistence
- Hero typing animation
- 3 sample project cards (easy to replace)
- Contact form submission to `http://localhost:5000/api/contact`
- Toast notifications for submit success/error

## Project Structure

frontend/
- public/
- src/
  - api/contactApi.js
  - components/Navbar.jsx
  - components/Hero.jsx
  - components/Projects.jsx
  - components/Skills.jsx
  - components/Contact.jsx
  - components/Footer.jsx
  - pages/HomePage.jsx
  - services/contactService.js
  - App.jsx
  - main.jsx
- package.json
- vite.config.js
- README.md

## Setup

```bash
npm install
npm run dev
```

## Backend Requirement

The contact form expects a backend endpoint:

`POST http://localhost:5000/api/contact`
