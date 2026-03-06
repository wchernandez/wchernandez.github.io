# William Hernandez | Software Engineer Portfolio

![Portfolio Header](https://img.shields.io/badge/Portfolio-2026-blueviolet?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

A high-fidelity, cinematic portfolio built with **React**, **Vite**, and **Tailwind CSS**. This project showcases my journey as a Software Engineering student at the University of Waikato, focusing on cybersecurity, AI, and scalable system design.

🌐 **Live Demo:** [wchernandez.github.io](https://wchernandez.xyz)

---

## ✨ Features

- **Cinematic UI/UX:** A bespoke dark-themed design with smooth gradients, custom micro-animations, and glassmorphism.
- **Dynamic Project Showcase:** An interactive, snap-scroll carousel highlighting key projects with tiered badges (Gold, Silver, Bronze).
- **Responsive Navigation:** A mobile-first approach with a custom burger menu and seamless section scrolling.
- **Integrated Contact Form:** A fully functional contact system using **Express.js** and the **Resend API**, deployed via Vercel Serverless Functions.
- **Performance Optimized:** Built with Vite for lightning-fast HMR and minimal bundle sizes.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 19 (Vite)
- **Styling:** Tailwind CSS
- **Animations:** Custom CSS Animations & GSAP
- **Icons:** Lucide React & DevIcons

### Backend (API)
- **Runtime:** Node.js
- **Framework:** Express.js
- **Email Service:** Resend API

### My Creative Stack
| Tool | Purpose |
| :--- | :--- |
| **VS Code / Visual Studio** | Primary IDEs |
| **Figma / Canva** | Design & Prototyping |
| **Blender** | 3D Modeling |
| **Godot Engine** | Game Development |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/wchernandez/portfolio-v2.git
   cd portfolio-v2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Resend API Key:
   ```env
   RESEND_API_KEY=your_re_key_here
   ```

### Running Locally

To run both the frontend development server and the backend Express server:

```bash
npm run dev:all
```

- **Frontend:** [http://localhost:5173](http://localhost:5173)
- **Backend:** [http://localhost:3001](http://localhost:3001)

---

## 📦 Deployment

### Vercel (Recommended)
The project is configured for Vercel with a `vercel.json` file that handles both the frontend build and the serverless functions in the `api/` directory.

### GitHub Pages
The project includes a `deploy` script for GitHub Pages:
```bash
npm run deploy
```

---

## 👤 Author

**William Hernandez**
- **GitHub:** [@wchernandez](https://github.com/wchernandez)
- **LinkedIn:** [William Hernandez](https://linkedin.com/in/wchernandez)
- **Email:** wchernandez2006@gmail.com

---

## 📄 License

This project is open-source and available under the MIT License.
