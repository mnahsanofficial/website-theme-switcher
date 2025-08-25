# 🌓 Website Theme Switcher

[![npm version](https://img.shields.io/npm/v/website-theme-switcher.svg)](https://www.npmjs.com/package/website-theme-switcher)
[![npm downloads](https://img.shields.io/npm/dm/website-theme-switcher.svg)](https://www.npmjs.com/package/website-theme-switcher)
[![npm bundle size](https://img.shields.io/bundlephobia/min/website-theme-switcher.svg)](https://www.npmjs.com/package/website-theme-switcher)
[![License](https://img.shields.io/npm/l/website-theme-switcher.svg)](https://github.com/mnahsanofficial/website-theme-switcher/blob/main/LICENSE)

A lightweight, framework-agnostic theme switcher that seamlessly integrates with any website to provide smooth light/dark theme switching. Perfect for React, Vue, Angular, Svelte, and vanilla JavaScript projects.

## 🎥 Demo Video

<div align="center">
  <video width="800" height="450" autoplay loop muted playsinline>
    <source src="src/assets/videos/Screen Recording 2025-08-25 at 7.42.28 PM.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p><em>🎬 Auto-playing demo showing theme switching in action</em></p>
</div>

> **🎬 Auto-Play Feature:** The demo video automatically plays and loops continuously to showcase the smooth theme switching experience. The video demonstrates the instant theme changes, smooth transitions, and responsive design of the theme switcher.

## ✨ Features

- **🎯 Simple Toggle Button** - One button to switch between light and dark themes
- **🚀 Framework Agnostic** - Works with React, Vue, Angular, or vanilla JavaScript
- **🎨 CSS Framework Compatible** - Integrates with Tailwind CSS, Bootstrap, or custom CSS
- **💾 Automatic Persistence** - Saves theme preference to localStorage
- **📱 Mobile Friendly** - Touch gestures and responsive design
- **⚡ Lightweight** - Only 16.6 kB minified
- **🔧 Easy to Use** - Simple HTML attributes, no complex setup

## 🎯 Quick Start (5 minutes)

### 1. Install the Package

```bash
npm install website-theme-switcher
```

### 2. Add Toggle Button to Your Navbar

```html
<button class="theme-toggle" data-toggle-theme="dark,light">
    🌓 Toggle Theme
</button>
```

### 3. Add CSS Variables

```css
:root {
  /* Light theme (your existing website - unchanged) */
  --bg-color: #ffffff;        /* White background */
  --text-color: #333333;      /* Dark text */
}

[data-theme="dark"] {
  /* Dark theme (minimal changes) */
  --bg-color: #000000;        /* Black background */
  --text-color: #ffffff;      /* White text for readability */
}
```

### 4. Replace Hardcoded Colors

```css
body {
  background-color: var(--bg-color);    /* Only this changes */
  color: var(--text-color);             /* Only this changes */
}
```

### 5. Initialize Theme Switcher

```html
<script src="https://unpkg.com/website-theme-switcher@latest/dist/index.js"></script>
<script>
  WebsiteThemeSwitcher.init();
</script>
```

### 🧪 Test It

**Open `demo/simple-working-demo.html` in your browser to see the working toggle button!**

## 🎨 HTML Attributes

The package automatically detects these HTML attributes:

### Toggle Between Themes
```html
<button data-toggle-theme="dark,light">🌓 Toggle</button>
```

### Set Specific Theme
```html
<button data-set-theme="dark">🌙 Dark</button>
<button data-set-theme="light">☀️ Light</button>
```

### Select Dropdown
```html
<select data-choose-theme>
  <option value="light">☀️ Light</option>
  <option value="dark">🌙 Dark</option>
</select>
```

### Custom Storage Key
```html
<button data-toggle-theme="dark,light" data-key="my-theme">Toggle</button>
```

### Active Class
```html
<button data-set-theme="dark" data-act-class="active">Dark</button>
```

## 🚀 Framework Examples

### React
```jsx
import { useEffect } from 'react';
import { WebsiteThemeSwitcher } from 'website-theme-switcher';

function App() {
  useEffect(() => {
    WebsiteThemeSwitcher.init();
  }, []);

  return (
    <nav>
      <button data-toggle-theme="dark,light">🌓 Toggle</button>
    </nav>
  );
}
```

### Vue 3
```vue
<template>
  <nav>
    <button data-toggle-theme="dark,light">🌓 Toggle</button>
  </nav>
</template>

<script setup>
import { onMounted } from 'vue';
import { WebsiteThemeSwitcher } from 'website-theme-switcher';

onMounted(() => {
  WebsiteThemeSwitcher.init();
});
</script>
```

### Angular
```typescript
import { Component, OnInit } from '@angular/core';
import { WebsiteThemeSwitcher } from 'website-theme-switcher';

@Component({
  selector: 'app-navbar',
  template: `
    <nav>
      <button data-toggle-theme="dark,light">🌓 Toggle</button>
    </nav>
  `
})
export class NavbarComponent implements OnInit {
  ngOnInit() {
    WebsiteThemeSwitcher.init();
  }
}
```

## ⚙️ Configuration

```javascript
WebsiteThemeSwitcher.init({
  defaultTheme: 'light',           // Default theme
  storageKey: 'theme',             // localStorage key
  enableSystemPreference: false,   // Use system preference
  transitionDuration: 300,         // CSS transition duration
  themes: ['light', 'dark'],       // Available themes
  onThemeChange: (theme) => {},    // Theme change callback
  debug: false,                    // Enable debug logging
  enableTouchGestures: false,      // Enable touch gestures
  touchThreshold: 50               // Touch gesture threshold
});
```

## 🎨 Custom Themes

### Load Custom Theme
```javascript
const themeSwitcher = WebsiteThemeSwitcher.getInstance();
themeSwitcher.loadTheme('custom', {
  '--bg-color': '#1a1a2e',
  '--text-color': '#ffffff',
  '--accent-color': '#0f3460'
});
```

### Use Custom Theme
```html
<button data-set-theme="custom">🎨 Custom</button>
```

## 📱 Mobile Support

### Touch Gestures
```javascript
WebsiteThemeSwitcher.init({
  enableTouchGestures: true,
  touchThreshold: 50
});
```

- **Swipe Right**: Previous theme
- **Swipe Left**: Next theme

## 🔧 API Methods

### Get Instance
```javascript
const themeSwitcher = WebsiteThemeSwitcher.getInstance();
```

### Set Theme
```javascript
themeSwitcher.setTheme('dark');
```

### Toggle Theme
```javascript
themeSwitcher.toggleTheme(['light', 'dark']);
```

### Get Current Theme
```javascript
const currentTheme = themeSwitcher.getCurrentTheme();
```

### Check Dark Mode
```javascript
const isDark = themeSwitcher.isDarkMode();
```

### Remove Theme
```javascript
themeSwitcher.removeTheme();
```

## 📊 Version Comparison

| Feature | v1.0.0 | v1.1.0 | v1.2.0 | v1.2.3 |
|---------|--------|---------|---------|---------|
| Basic Theme Switching | ✅ | ✅ | ✅ | ✅ |
| TypeScript Support | ❌ | ✅ | ✅ | ✅ |
| Multiple Build Formats | ❌ | ✅ | ✅ | ✅ |
| localStorage Persistence | ❌ | ❌ | ✅ | ✅ |
| System Preference Detection | ❌ | ❌ | ✅ | ✅ |
| Touch Gestures | ❌ | ❌ | ✅ | ✅ |
| **Working Demo** | ❌ | ❌ | ❌ | ✅ |
| **Toggle Button Fix** | ❌ | ❌ | ❌ | ✅ |
| **Self-Contained Demo** | ❌ | ❌ | ❌ | ✅ |

## 🧪 Testing

### Run Tests
```bash
npm test
```

### Build Package
```bash
npm run build
```

### Check Bundle Size
```bash
npm run size
```

## 📦 Installation

### npm
```bash
npm install website-theme-switcher
```

### CDN
```html
<script src="https://unpkg.com/website-theme-switcher@latest/dist/index.js"></script>
```

### Download
- [Latest Release](https://github.com/mnahsanofficial/website-theme-switcher/releases)
- [Source Code](https://github.com/mnahsanofficial/website-theme-switcher)

## 🌟 What's New in v1.2.3

- **✅ Working Theme Switcher Demo** - `simple-working-demo.html` with self-contained, fully functional theme switcher
- **✅ Improved Toggle Functionality** - Enhanced `data-toggle-theme` attribute detection and theme switching
- **✅ Self-Contained Demo** - Created demo that works without external dependencies
- **✅ Fixed Toggle Button** - Resolved issue where toggle buttons were not switching themes
- **✅ Enhanced Package** - Better toggle button detection and theme switching logic

## 🚀 Demo

Experience the theme switcher in action with our auto-playing demo video above! The video showcases:

- **🎬 Instant Theme Switching**: See how themes change instantly between light and dark modes
- **✨ Smooth Transitions**: Watch the beautiful animations and transitions
- **💾 localStorage Persistence**: Observe how theme preferences are saved
- **📱 Responsive Design**: See the theme switcher working across different screen sizes
- **🔄 Auto-Loop**: The video automatically plays and loops to continuously demonstrate features

> **🎬 Video Demo:** The demo video above automatically plays and loops to showcase the theme switcher in action. Watch how smoothly themes transition and how the interface adapts to different themes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Creator**: [Muhammad Nazmul Ahsan](https://www.linkedin.com/in/mn-ahsan/)
- **Company**: [Triotrix Tech Solutions](https://www.linkedin.com/company/triotrix-tech-solutions/)
- **Live Demo**: [Portfolio](https://my-portfolio-mnahsanofficials-projects.vercel.app/)

## 📞 Contact

- **GitHub**: [mnahsanofficial/website-theme-switcher](https://github.com/mnahsanofficial/website-theme-switcher)
- **Company**: [Triotrix Tech Solutions](https://www.linkedin.com/company/triotrix-tech-solutions/)

---

**⭐ Star this repository if you find it helpful!**
