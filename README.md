# Anshul Subramanian - Portfolio Website

A modern, responsive portfolio website built with Node.js, TypeScript, and Express. The design is inspired by Sand Studio's clean and minimal aesthetic, featuring smooth animations, interactive elements, and a beautiful user interface.

![Portfolio Website](https://img.shields.io/badge/Node.js-18+-green) ![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-blue) ![Express](https://img.shields.io/badge/Express-4.18+-lightgrey)

## ✨ Features

- 🎨 **Modern Design**: Clean, minimal aesthetic inspired by Sand Studio
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Smooth Animations**: Interactive elements with hover effects and transitions
- 🎯 **Interactive Gallery**: Auto-rotating image gallery for project showcases
- 📊 **Comprehensive Sections**: Projects, experience, patents, certifications, and achievements
- 🚀 **Fast Performance**: Optimized assets and efficient code
- 🎬 **Video Support**: Embedded video demonstrations for projects
- 📄 **Resume Download**: Direct download link for resume PDF

## 🛠️ Tech Stack

- **Backend**: 
  - Node.js
  - Express.js
  - TypeScript
  
- **Frontend**: 
  - HTML5
  - CSS3 (Custom CSS with CSS Variables)
  - Vanilla JavaScript
  
- **Fonts**: Inter (Google Fonts)

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## 🚀 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd latest_anshul_portfolio
```

2. Install dependencies:
```bash
npm install
```

## 💻 Development

1. Build TypeScript files:
```bash
npm run build
```

2. Start the development server with hot reload:
```bash
npm run dev
```

The server will start on `http://localhost:3000`

## 🏭 Production

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

The server will run on the port specified in the `PORT` environment variable (default: 3000).

## 📁 Project Structure

```
latest_anshul_portfolio/
├── src/
│   └── server.ts                    # Express server configuration
├── public/
│   ├── index.html                   # Main HTML file
│   ├── styles.css                   # All styles and CSS variables
│   ├── script.js                    # Client-side JavaScript
│   └── assets/
│       ├── home/
│       │   └── anshul-passport.jpeg # Profile image (favicon)
│       ├── Resume/
│       │   └── November_2025_Anshul_Subramanian_Resume.pdf
│       ├── GAN Based Time-Weather Translation/
│       │   └── [12 time-weather images]
│       ├── Focal Length Translation/
│       │   └── focal_length.mp4
│       ├── Figma To Android/
│       │   └── figma2android.png
│       └── Weapon Detection System/
│           └── weapon_detection.png
├── dist/                            # Compiled TypeScript (generated)
├── node_modules/                    # Dependencies (generated)
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
├── .gitignore                       # Git ignore rules
└── README.md                        # This file
```

## 📜 Available Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run dev` - Start development server with hot reload (ts-node-dev)
- `npm start` - Start production server (runs compiled JavaScript)
- `npm run watch` - Watch TypeScript files for changes and recompile

## 🎯 Website Sections

- **Hero Section**: Introduction with animated background shapes
- **Areas of Expertise**: Rotating tags displaying key skills (auto-rotates every 1 second)
- **Featured Projects**: 
  - GAN Based Time-Weather Translation (image gallery)
  - Focal Length Translation (video)
  - Figma To Android (image)
  - Weapon Detection System (image)
- **Other Projects**: Additional project highlights
- **Patents & Research**: Published and pending patents
- **Work Experience**: Timeline of professional experience at Samsung and Incedo
- **Certifications**: Professional certifications from IIT Ropar, Samsung, Google, and Coursera
- **Achievements**: Notable accomplishments and awards
- **Contact**: Contact information including Email, LinkedIn, Naukri, and GitHub

## 🎨 Customization

### Colors

Edit CSS variables in `public/styles.css`:

```css
:root {
    --bg-primary: #0a0a0a;
    --bg-secondary: #111111;
    --bg-card: #1a1a1a;
    --text-primary: #ffffff;
    --text-secondary: #a0a0a0;
    --accent: #ff6b6b;
    --accent-hover: #ff5252;
    /* ... more variables */
}
```

### Content

Edit the HTML content in `public/index.html` to update:
- Personal information
- Projects and descriptions
- Work experience
- Certifications
- Achievements
- Contact details

### Images and Assets

Add or replace images in the `public/assets/` directory:
- Update project images in respective folders
- Replace resume PDF in `public/assets/Resume/`
- Update favicon/profile image in `public/assets/home/`

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Features in Detail

### Image Gallery
The GAN Time-Weather Translation project features an auto-rotating image gallery that cycles through 12 different time-weather combinations every 1 second. Users can click on indicators to manually navigate.

### Responsive Navigation
Fixed navigation bar with smooth scroll effects and active section highlighting. Includes a red resume download button.

### Smooth Animations
- Fade-in animations on scroll
- Hover effects on interactive elements
- Smooth transitions between sections
- Parallax effects on hero section shapes

## 📝 License

MIT License

## 👤 Author

**Anshul Subramanian**
- AI/ML Engineer with 4+ years of experience
- Specializing in Computer Vision and Deep Learning
- Currently at Samsung Research and Development Institute Noida

## 🔗 Links

- **Portfolio**: [Live Website](#)
- **GitHub**: [github.com/anshulsubramanian](https://github.com/anshulsubramanian)
- **LinkedIn**: [linkedin.com/in/anshul-subramanian](https://www.linkedin.com/in/anshul-subramanian)
- **Email**: anshulsubramanianapplications@gmail.com

---

Built with ❤️ using Node.js and TypeScript
