# Bowie 404 - A Space Oddity

![React Version](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)
![SCSS](https://img.shields.io/badge/SCSS-Powered-CC6699?style=flat-square&logo=sass)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)

A cosmic 404 error page inspired by the legendary David Bowie. This isn't just any error page – it's a tribute to the Starman himself, featuring animated lyrics, cosmic design elements, and references to Bowie's iconic aesthetic.

## Features

- Rotating Bowie lyrics and song titles
- Animated lightning bolt inspired by Aladdin Sane
- Dynamic starry background effect
- Gradient color schemes from Bowie's iconic looks
- Fully responsive design
- Built with React and SCSS

## Live Demo

[View the Demo](https://your-demo-url.here) - *Coming soon*

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bowie-404.git
```

2. Navigate to the project directory:
```bash
cd bowie-404
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

## Usage

Import the NotFound component into your React application:

```javascript
import NotFound from './components/NotFound';

// Use it in your router or component
<NotFound />
```

## Customization

### Changing the Phrases

Edit the `phrases` array in `NotFound.js` to add or modify the rotating text:

```javascript
const phrases = [
  "Life on Mars?",
  "Ground Control to Major Tom",
  // Add your own Bowie references
];
```

### Modifying Styles

The styles are written in SCSS and can be found in `NotFound.scss`. Key customizable elements include:

- Background gradients
- Animation timings
- Color schemes
- Typography

## Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by David Bowie's incredible artistry and style
- Lightning bolt design inspired by the Aladdin Sane album cover
- Color schemes derived from various Bowie eras

---

<p align="center">
  Made with ⚡ by <a href="https://github.com/ttvtimotheus">Timo Haseloff</a>
</p>
