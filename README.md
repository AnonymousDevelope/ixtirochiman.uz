# Ixtirochiman.uz - Tashkent Region Youth Technopark

![Tashkent Region Youth Technopark](https://via.placeholder.com/1200x400.png?text=Ixtirochiman.uz) <!-- Logo yoki banner uchun placeholder -->

Ixtirochiman.uz is the official website for the Tashkent Region Youth Technopark, a hub dedicated to empowering the next generation of innovators in Uzbekistan. The platform provides access to cutting-edge technology, world-class education, and comprehensive startup support through various centers, programs, and resources.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Overview
The Tashkent Region Youth Technopark website serves as a digital platform to showcase its initiatives, including:
- **Learning Center**: Offering courses in robotics, frontend, backend development, and 3D modeling.
- **FABLAB**: A state-of-the-art fabrication laboratory for prototyping.
- **Startup School**: Supporting young entrepreneurs with mentorship and resources.
- **Blog & Resources**: Sharing insights, success stories, and tech trends.

The website is designed to be responsive, accessible, and user-friendly, with smooth scroll navigation and modern UI components.

## Features
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices using Tailwind CSS.
- **Smooth Scroll Navigation**: Seamless transitions between sections using custom `SmoothLink` component.
- **Interactive Contact Form**: Allows users to send inquiries (sandboxed environment, no `form` submission).
- **Blog Section**: Displays articles with categories, tags, and read time.
- **Footer with Links**: Organized navigation to centers, programs, and resources.
- **Custom Styling**: Gradient text, tech-themed colors, and custom scrollbars.
- **TypeScript Support**: Ensures type safety across components.
- **Lucide Icons**: Lightweight, accessible SVG icons for UI elements.

## Tech Stack
- **Frontend**: React (TypeScript)
- **Styling**: Tailwind CSS with custom plugins (gradient-text, scrollbar-custom)
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge (for className merging)
- **Build Tool**: Vite (recommended for fast development)
- **Package Manager**: npm
- **Environment**: Compatible with Pyodide for browser-based execution (no local file I/O or network calls)

## Project Structure
```bash
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx           # Reusable button component
│   │   ├── Input.tsx            # Reusable input component
│   │   ├── Textarea.tsx         # Reusable textarea component
│   │   ├── SmoothLink.tsx       # Reusable smooth scroll link component
│   │   ├── SocialLink.tsx       # Reusable social media link component
│   ├── BlogSection.tsx          # Blog section with article cards
│   ├── ContactSection.tsx       # Contact section with form and map
│   ├── Footer.tsx               # Footer with branding and links
│   ├── FooterBranding.tsx       # Footer branding component
│   ├── FooterLinks.tsx          # Footer navigation links component
│   ├── FooterBottom.tsx         # Footer copyright and legal links
│   ├── ContactHeader.tsx        # Contact section header
│   ├── ContactInfo.tsx          # Contact details component
│   ├── MapCard.tsx              # Interactive map placeholder
│   ├── ContactForm.tsx          # Contact form component
├── lib/
│   ├── utils.ts                 # Utility functions (e.g., cn for className merging)
├── styles/
│   ├── global.css               # Global styles (scrollbar, gradient-text)
├── App.tsx                      # Main app component
├── index.tsx                    # Entry point with scrollbar setup
├── tailwind.config.js           # Tailwind CSS configuration
├── package.json                 # Project dependencies

Installation

Clone the repository:
git clone https://github.com/AnonymousDevelope/ixtirochiman.uz.git
cd ixtirochiman.uz


Install dependencies:
npm install


Set up Tailwind CSS:Ensure tailwind.config.js is configured as provided. Run:
npx tailwindcss init -p


Start the development server:
npm run dev

The app will be available at http://localhost:5173 (Vite default).


Usage

Navigation: Use footer links (e.g., #blog, #startup-school) to navigate sections with smooth scrolling.
Contact Form: Fill out the form to send inquiries (logs to console in sandboxed environment).
Blog Section: Explore articles with categories like Technology, Maker Space, and Education.
Customization:
Update tailwind.config.js for custom colors (e.g., tech-cyan, tech-darker).
Modify global.css for scrollbar or gradient text styles.
Add real routes to SmoothLink if using react-router-dom.



Contributing
We welcome contributions to enhance Ixtirochiman.uz! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make changes and commit (git commit -m "Add your feature").
Push to your fork (git push origin feature/your-feature).
Open a Pull Request with a clear description.

Please follow the Code of Conduct and ensure code is type-safe (TypeScript) and styled with Tailwind CSS.
License
This project is licensed under the MIT License. See LICENSE for details.
Contact

Website: ixtirochiman.uz
Email: info@ixtirochiman.uz
Phone: +998 33 634 00 00
Address: Toshkent viloyati, Ohangaron shahri, AMIR TEMUR 18

Built with 💙 in Uzbekistan by the Tashkent Region Youth Technopark team.```