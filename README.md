# Sammunat Landing Page

A modern, responsive landing page for **Sammunat LLC**, built with **React**, **Vite**, and **Tailwind CSS**. The design showcases a clean dark‑mode aesthetic, glass‑morphism effects, and smooth animations while presenting the company's services, portfolio, and contact information.

---

## Demo

You can view a live preview of the landing page by running the development server (see **Getting Started**) and opening `http://localhost:5173` in your browser. The page should display the following sections:

- **Navbar** with logo and navigation links
- **Hero** with headline, sub‑headline, and CTA buttons
- **Stats** counters (projects, customers, employees, rating)
- **Services** cards highlighting core offerings
- **Portfolio** grid of recent projects
- **Features** detailed service showcases (Video Editing, CRM & ERP, Web Development)
- **Contact** form and contact details
- **Footer** with social links and copyright

---

## Features

- **Responsive design** – mobile‑first layout that works on all screen sizes.
- **Dark theme with glass‑morphism** – modern visual style using Tailwind utilities.
- **Animated counters** – smooth count‑up effects when the stats section enters the viewport.
- **Hover‑lift interactions** – subtle lift and shadow on cards for a premium feel.
- **Reusable React components** – clean component architecture for easy maintenance.
- **Tailwind CSS custom utilities** – gradient text, glass effects, and micro‑animations.
- **Accessible markup** – semantic HTML, proper heading hierarchy, and ARIA‑friendly components.

---

## Tech Stack

- **Framework:** React (17+) with Vite for fast development and HMR.
- **Styling:** Tailwind CSS (v3) with custom utilities and gradients.
- **Icons:** Inline SVGs (no external icon libraries required).
- **Build:** Vite bundler, outputting optimized static assets.
- **Deployment:** Any static‑site host (Netlify, Vercel, GitHub Pages, etc.).

---

## Getting Started

### Prerequisites

- **Node.js** (>= 18) and **npm** (>= 9) installed on your machine.

### Installation

```bash
# Clone the repository (or copy the folder if you already have it)
git clone <repository-url> sammunat-app-c
cd sammunat-app-c

# Install dependencies
npm install
```

### Development

Start the development server with hot‑module replacement:

```bash
npm run dev
```

Open your browser at `http://localhost:5173` to see the landing page. The server will automatically reload when you edit source files.

### Build for Production

When you’re ready to deploy, generate an optimized production build:

```bash
npm run build
```

The compiled assets will be placed in the `dist/` directory, ready to be served by any static‑file host.

---

## Project Structure

```
sammunat-app-c/
├─ public/                # Static assets (favicon, etc.)
├─ src/
│  ├─ assets/            # Images, SVGs, fonts
│  ├─ components/        # Reusable React components
│  │   ├─ Navbar.jsx
│  │   ├─ Hero.jsx
│  │   ├─ Stats.jsx
│  │   ├─ Services.jsx
│  │   ├─ Portfolio.jsx
│  │   ├─ Features.jsx
│  │   ├─ Contact.jsx
│  │   └─ Footer.jsx
│  ├─ App.jsx            # Root component composing the page
│  ├─ index.css          # Tailwind directives + custom utilities
│  └─ main.jsx           # React entry point
├─ tailwind.config.js    # Tailwind configuration
├─ vite.config.js        # Vite configuration (includes Tailwind plugin)
├─ package.json
└─ README.md             # This documentation
```

---

## Deployment

The `dist/` folder can be deployed to any static‑site hosting service. Example for **Vercel**:

```bash
npm i -g vercel
vercel deploy --prod
```

Or for **Netlify** (drag‑and‑drop the `dist/` folder in the UI).

---

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for:

- New component ideas or visual enhancements.
- Accessibility improvements.
- Bug fixes or performance optimizations.

Please follow the existing code style (Prettier + Tailwind conventions) and ensure the development server runs without errors before submitting.

---

## License

This project is licensed under the **MIT License** – see the `LICENSE` file for details.

---

## Acknowledgements

- **Vite** – fast dev server and bundler.
- **Tailwind CSS** – utility‑first styling.
- **React** – component‑based UI.
- Inspired by the original `sammunat.com` content (used for copy, not design).