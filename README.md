# Global Clock Grid

A responsive, tech-inspired world clock application displaying the time for major global cities in a 3x3 grid. Built with React, Vite, and Tailwind CSS.

![Screenshot](https://raw.githubusercontent.com/agenticso/global-clock/main/screenshot.png) <!-- Placeholder for screenshot -->

## Features

*   Displays time for 9 major world cities (Beijing first, then Tokyo, London, New York, Paris, Sydney, Moscow, Cairo, Rio de Janeiro).
*   Shows city name, country, and flag emoji.
*   Includes both analog and digital clock displays (updating every second).
*   Responsive design for desktop and mobile devices.
*   Modern, tech-inspired UI using Tailwind CSS with custom fonts and colors.
*   Easy to deploy to Vercel.

## Tech Stack

*   **Framework:** React (via Vite)
*   **Styling:** Tailwind CSS
*   **Time/Date:** `date-fns` & `date-fns-tz`
*   **Build Tool:** Vite

## Local Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/agenticso/global-clock.git
    cd global-clock
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    # or
    # pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    # yarn dev
    # or
    # pnpm dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

## Deployment

### Vercel

Deploy this project with one click using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fagenticso%2Fglobal-clock&project-name=global-clock&repository-name=global-clock&branch=main)

**Manual Vercel Deployment:**

1.  Push your code to your GitHub repository (`main` branch).
2.  Go to [Vercel](https://vercel.com/) and sign up or log in.
3.  Click "Add New..." -> "Project".
4.  Import your `global-clock` repository from GitHub.
5.  Vercel will automatically detect it as a Vite project.
6.  Ensure the "Root Directory" is correct and the "Framework Preset" is Vite.
7.  Click "Deploy". Your site will be live shortly!

## Customization

To change the cities displayed, modify the `initialCities` array in `src/App.jsx`.

```javascript
// src/App.jsx
const initialCities = [
  { name: 'Beijing', country: 'China', timezone: 'Asia/Shanghai', flag: '🇨🇳' },
  // Add, remove, or modify cities here (up to 9 for the grid).
  // Ensure you use valid IANA timezone names.
  // e.g., { name: 'Berlin', country: 'Germany', timezone: 'Europe/Berlin', flag: '🇩🇪' },
];
```

Find valid IANA timezone names [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

*Note: You might need to add a screenshot to the README manually after deployment or local setup.*