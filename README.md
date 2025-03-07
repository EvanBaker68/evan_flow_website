# Artist Portfolio Website

A sleek, modern portfolio website for a musical artist built with React and Tailwind CSS.

## Features

- Responsive design that works on mobile and desktop
- Modern UI with smooth animations using Framer Motion
- Image gallery with lightbox functionality
- Music showcase with Spotify embeds
- Contact form
- Dark/light sections for visual interest

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.0.0 or later)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

## Getting Started

1. Clone this repository or download the files

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
artist-portfolio/
├── public/              # Static assets
├── src/                 # Source files
│   ├── assets/          # Images and other assets
│   ├── components/      # React components
│   │   ├── layout/      # Layout components
│   │   └── sections/    # Page section components
│   ├── styles/          # CSS styles
│   ├── App.jsx          # Main App component
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── package.json         # Project dependencies
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```

## Customization

### Personal Information

Update your personal information in the following files:
- `src/components/layout/Header.jsx` - Your name/logo
- `src/components/layout/Footer.jsx` - Your name and social links
- `src/components/sections/About.jsx` - Your bio and photo
- `src/components/sections/Music.jsx` - Your music links
- `src/components/sections/Contact.jsx` - Your contact information

### Images

1. Replace the placeholder images in the `public/img/` directory with your own images
2. Update the image paths in `src/components/sections/Gallery.jsx` and `src/components/sections/About.jsx`

### Music

Update the Spotify embed links in `src/components/sections/Music.jsx` with your own tracks.

### Colors and Styling

The main color scheme can be adjusted in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#1DB954', // Change this to your preferred primary color
      // ...other colors
    }
  }
}
```

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build files will be in the `dist` directory, ready to be deployed to any static hosting service like GitHub Pages, Netlify, or Vercel.

## Deployment

### GitHub Pages

1. Update the `vite.config.js` file to include your repository name:

```js
export default defineConfig({
  base: '/your-repo-name/',
  // ...other config
})
```

2. Add a deploy script to `package.json`:

```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

3. Install the gh-pages package:

```bash
npm install --save-dev gh-pages
```

4. Build and deploy:

```bash
npm run build
npm run deploy
```

## License

This project is open source and available under the [MIT License](LICENSE).
