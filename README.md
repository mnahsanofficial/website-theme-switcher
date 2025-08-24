# 🌓 Website Theme Switcher

A lightweight, framework-agnostic JavaScript library for seamless theme switching between light and dark modes. Perfect for any web project that needs elegant theme management with automatic persistence and smooth transitions.

[![npm version](https://badgen.net/npm/v/website-theme-switcher)](https://www.npmjs.com/package/website-theme-switcher)
[![bundle size](https://badgen.net/bundlephobia/minzip/website-theme-switcher)](https://bundlephobia.com/result?p=website-theme-switcher)
[![downloads](https://badgen.net/npm/dt/website-theme-switcher)](https://www.npmjs.com/package/website-theme-switcher)
[![license](https://badgen.net/npm/license/website-theme-switcher)](https://github.com/your-username/website-theme-switcher)

## ✨ Features

- 🌓 **Light & Dark Themes**: Built-in light and dark theme support
- 🎨 **Framework Agnostic**: Works with React, Vue, Angular, Svelte, and vanilla JavaScript
- 💾 **Automatic Persistence**: Remembers user preference in localStorage
- 🚀 **Zero Dependencies**: Lightweight and fast
- 🎯 **Tailwind CSS Ready**: Seamless integration with Tailwind CSS
- 🎨 **Bootstrap Compatible**: Works with Bootstrap CSS variables
- 🔧 **Customizable**: Easy to extend with custom themes
- 📱 **Mobile Friendly**: Touch-optimized theme switchers
- ⚡ **Performance**: Minimal impact on page load and performance

## 🚀 Quick Start

### CDN (Recommended for quick testing)

```html
<script src="https://unpkg.com/website-theme-switcher@latest/dist/index.js"></script>
<script>
  // Initialize theme switcher
  window.WebsiteThemeSwitcher.init();
</script>
```

### NPM Installation

```bash
npm install website-theme-switcher
# or
yarn add website-theme-switcher
# or
pnpm add website-theme-switcher
```

## 🎯 Basic Usage

### 1. CSS Setup

Define your theme variables in CSS:

```css
:root {
  /* Light theme (default) */
  --bg-primary: #ffffff;
  --text-primary: #1a1a1a;
  --accent-color: #3b82f6;
}

[data-theme="dark"] {
  /* Dark theme */
  --bg-primary: #1a1a1a;
  --text-primary: #ffffff;
  --accent-color: #60a5fa;
}

/* Apply variables to elements */
body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

### 2. HTML Theme Switchers

Choose from multiple switcher types:

#### Button Switcher
```html
<button data-theme-switcher="toggle" data-themes="light,dark">
  🌓 Toggle Theme
</button>
```

#### Individual Theme Buttons
```html
<button data-theme-switcher="set" data-theme="light">☀️ Light</button>
<button data-theme-switcher="set" data-theme="dark">🌙 Dark</button>
```

#### Select Dropdown
```html
<select data-theme-switcher="select">
  <option value="light">☀️ Light</option>
  <option value="dark">🌙 Dark</option>
</select>
```

#### Toggle Switch
```html
<label class="theme-toggle">
  <input type="checkbox" data-theme-switcher="toggle" data-themes="light,dark">
  <span class="slider"></span>
</label>
```

### 3. JavaScript Initialization

```javascript
import { WebsiteThemeSwitcher } from 'website-theme-switcher';

// Initialize with default options
WebsiteThemeSwitcher.init();

// Or with custom options
WebsiteThemeSwitcher.init({
  defaultTheme: 'light',
  storageKey: 'my-theme',
  enableSystemPreference: true,
  transitionDuration: 300
});
```

## 🎨 Tailwind CSS Integration

### 1. Configure Tailwind

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media' for system preference
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      }
    }
  }
}
```

### 2. CSS Variables

```css
:root {
  --color-primary: #3b82f6;
  --color-secondary: #64748b;
}

.dark {
  --color-primary: #60a5fa;
  --color-secondary: #94a3b8;
}
```

### 3. HTML Structure

```html
<html class="light" data-theme="light">
  <body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <button data-theme-switcher="toggle" data-themes="light,dark">
      🌓 Toggle
    </button>
  </body>
</html>
```

## 🎨 Bootstrap CSS Integration

### 1. CSS Variables

```css
:root {
  --bs-body-bg: #ffffff;
  --bs-body-color: #212529;
  --bs-primary: #0d6efd;
}

[data-theme="dark"] {
  --bs-body-bg: #212529;
  --bs-body-color: #f8f9fa;
  --bs-primary: #6ea8fe;
}
```

### 2. HTML Usage

```html
<body class="bg-body text-body">
  <div class="container">
    <button class="btn btn-primary" data-theme-switcher="toggle" data-themes="light,dark">
      🌓 Switch Theme
    </button>
  </div>
</body>
```

## 🔧 Advanced Configuration

### Custom Options

```javascript
WebsiteThemeSwitcher.init({
  // Default theme when no preference is saved
  defaultTheme: 'light',
  
  // Custom localStorage key
  storageKey: 'app-theme',
  
  // Enable system preference detection
  enableSystemPreference: true,
  
  // Transition duration in milliseconds
  transitionDuration: 300,
  
  // Custom theme names
  themes: ['light', 'dark', 'custom'],
  
  // Callback when theme changes
  onThemeChange: (theme) => {
    console.log('Theme changed to:', theme);
  }
});
```

### Custom Theme Switchers

```javascript
// Create custom switcher
const customSwitcher = WebsiteThemeSwitcher.createSwitcher({
  type: 'custom',
  element: document.querySelector('.my-custom-switcher'),
  themes: ['light', 'dark', 'sepia'],
  onChange: (theme) => {
    // Custom logic
  }
});
```

### API Methods

```javascript
// Get current theme
const currentTheme = WebsiteThemeSwitcher.getCurrentTheme();

// Set theme programmatically
WebsiteThemeSwitcher.setTheme('dark');

// Toggle between themes
WebsiteThemeSwitcher.toggleTheme(['light', 'dark']);

// Check if dark mode is active
const isDark = WebsiteThemeSwitcher.isDarkMode();

// Get system preference
const systemPrefersDark = WebsiteThemeSwitcher.getSystemPreference();
```

## 🌐 Framework Examples

See the [Framework Installation Guide](./FRAMEWORK_INSTALLATION.md) for detailed setup instructions for:

- React (with hooks)
- Vue 3 (Composition API)
- Angular
- Svelte
- Next.js
- Nuxt.js
- Vite
- Webpack

## 🎨 Custom Themes

### Adding Custom Themes

```css
[data-theme="sepia"] {
  --bg-primary: #faf8f3;
  --text-primary: #5c4b37;
  --accent-color: #d97706;
}
```

```html
<button data-theme-switcher="set" data-theme="sepia">🍂 Sepia</button>
```

### Dynamic Theme Loading

```javascript
// Load theme dynamically
WebsiteThemeSwitcher.loadTheme('custom-theme', {
  '--bg-primary': '#1e293b',
  '--text-primary': '#f1f5f9'
});
```

## 🚀 Performance

- **Bundle Size**: < 5KB minified + gzipped
- **Zero Dependencies**: No external libraries required
- **Lazy Loading**: Themes load only when needed
- **Efficient DOM**: Minimal DOM manipulation
- **Memory Optimized**: Clean event handling

## 🔒 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- IE 11 (with polyfills)

## 📱 Mobile Support

- Touch-optimized controls
- Responsive design
- Gesture support
- Mobile-first approach

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

## 📄 License

MIT License - see [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [theme-change](https://github.com/saadeghi/theme-change)
- Built with modern web standards
- Community-driven development

## 📞 Support

- 📧 Email: support@website-theme-switcher.com
- 🐛 Issues: [GitHub Issues](https://github.com/your-username/website-theme-switcher/issues)
- 📖 Documentation: [Full Documentation](https://website-theme-switcher.com)
- 💬 Discord: [Join our community](https://discord.gg/website-theme-switcher)

---

Made with ❤️ by the Website Theme Switcher team
# website-theme-switcher
