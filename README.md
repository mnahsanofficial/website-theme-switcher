# 🌓 Website Theme Switcher

A lightweight, framework-agnostic JavaScript library for seamless theme switching between light and dark modes. Perfect for any web project that needs elegant theme management with automatic persistence and smooth transitions.

[![npm version](https://badgen.net/npm/v/website-theme-switcher)](https://www.npmjs.com/package/website-theme-switcher)
[![bundle size](https://badgen.net/bundlephobia/minzip/website-theme-switcher)](https://bundlephobia.com/result?p=website-theme-switcher)
[![downloads](https://badgen.net/npm/dt/website-theme-switcher)](https://www.npmjs.com/package/website-theme-switcher)
[![license](https://badgen.net/npm/license/website-theme-switcher)](https://github.com/mnahsanofficial/website-theme-switcher)
[![GitHub stars](https://badgen.net/github/stars/mnahsanofficial/website-theme-switcher)](https://github.com/mnahsanofficial/website-theme-switcher)

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
  WebsiteThemeSwitcher.init();
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

## 🎯 Simple Theme Toggle (5 minutes)

Add a toggle button to your navbar that switches between light and dark themes **without changing your website design**.

### 1. Add Toggle Button to Your Navbar

```html
<button class="theme-toggle" data-toggle-theme="dark,light">
    🌓 Toggle Theme
</button>
```

### 2. Add CSS Variables

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

### 3. Replace Hardcoded Colors

```css
body {
  background-color: var(--bg-color);    /* Only this changes */
  color: var(--text-color);             /* Only this changes */
}
```

### 4. Initialize Theme Switcher

```html
<script src="https://unpkg.com/website-theme-switcher@latest/dist/index.js"></script>
<script>
  WebsiteThemeSwitcher.init();
</script>
```

### 🧪 Test It

Open `demo/package-demo.html` in your browser to see the working toggle button!

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
    <button data-toggle-theme="dark,light">
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
    <button class="btn btn-primary" data-toggle-theme="dark,light">
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

### API Methods

```javascript
// Get current theme
const currentTheme = WebsiteThemeSwitcher.getInstance().getCurrentTheme();

// Set theme programmatically
WebsiteThemeSwitcher.getInstance().setTheme('dark');

// Toggle between themes
WebsiteThemeSwitcher.getInstance().toggleTheme(['light', 'dark']);

// Check if dark mode is active
const isDark = WebsiteThemeSwitcher.getInstance().isDarkMode();

// Get system preference
const systemPrefersDark = WebsiteThemeSwitcher.getSystemPreference();
```

## 🌐 Framework Examples

### React
```jsx
import React, { useEffect } from 'react';
import { WebsiteThemeSwitcher } from 'website-theme-switcher';

function App() {
  useEffect(() => {
    WebsiteThemeSwitcher.init();
  }, []);

  return (
    <div className="app">
      <button data-toggle-theme="dark,light">
        🌓 Toggle Theme
      </button>
    </div>
  );
}
```

### Vue 3
```vue
<template>
  <button data-toggle-theme="dark,light">
    🌓 Toggle Theme
  </button>
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
  selector: 'app-root',
  template: `
    <button data-toggle-theme="dark,light">
      🌓 Toggle Theme
    </button>
  `
})
export class AppComponent implements OnInit {
  ngOnInit() {
    WebsiteThemeSwitcher.init();
  }
}
```

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
<button data-set-theme="sepia">🍂 Sepia</button>
```

### Dynamic Theme Loading

```javascript
// Load theme dynamically
WebsiteThemeSwitcher.getInstance().loadTheme('custom-theme', {
  '--bg-primary': '#1e293b',
  '--text-primary': '#f1f5f9'
});
```

## 📊 Version Comparison Table

| Feature | v1.2.2 (Current) | v1.1.0 | v1.0.0 | v0.9.0 |
|---------|------------------|---------|---------|---------|
| **Bundle Size** | ~5.1KB | ~5.8KB | ~6.2KB | ~7.1KB |
| **TypeScript** | ✅ Full Support | ✅ Full Support | ✅ Full Support | ❌ None |
| **ES Modules** | ✅ ESM + CJS + UMD | ✅ ESM + CJS | ✅ ESM + CJS | ❌ CJS Only |
| **Touch Gestures** | ✅ Mobile Swipe | ✅ Basic Touch | ❌ None | ❌ None |
| **System Preference** | ✅ Auto Detection | ✅ Auto Detection | ✅ Auto Detection | ❌ None |
| **Custom Themes** | ✅ Dynamic Loading | ✅ Static Only | ✅ Static Only | ❌ None |
| **localStorage** | ✅ Immediate Save | ✅ Immediate Save | ✅ Immediate Save | ❌ Delayed |
| **Tailwind CSS** | ✅ Full Integration | ✅ Basic Support | ✅ Basic Support | ❌ None |
| **Bootstrap** | ✅ CSS Variables | ✅ CSS Variables | ✅ CSS Variables | ❌ None |
| **Framework Support** | ✅ All Major | ✅ All Major | ✅ All Major | ❌ Limited |
| **Performance** | ⚡ Optimized | ⚡ Good | ⚡ Good | ⚡ Basic |
| **Browser Support** | 🌐 Modern + IE11 | 🌐 Modern + IE11 | 🌐 Modern + IE11 | 🌐 Limited |

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

## 🧪 Live Demo

**Try it out live**: [https://my-portfolio-mnahsanofficials-projects.vercel.app/](https://my-portfolio-mnahsanofficials-projects.vercel.app/)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

## 📄 License

MIT License - see [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments

- Built with modern web standards
- Community-driven development

## 📞 Support

- 🐛 Issues: [GitHub Issues](https://github.com/mnahsanofficial/website-theme-switcher/issues)
- 📖 Documentation: [GitHub Repository](https://github.com/mnahsanofficial/website-theme-switcher)
- 💼 Company: [Triotrix Tech Solutions](https://www.linkedin.com/company/triotrix-tech-solutions/)

## 👨‍💻 Creator

**Muhammad Nazmul Ahsan**  
- 🚀 Full Stack Developer
- 🏢 **Triotrix Tech Solutions**
- 🔗 [LinkedIn Profile](https://www.linkedin.com/in/mn-ahsan/)
- 🌐 [Portfolio](https://my-portfolio-mnahsanofficials-projects.vercel.app/)
- 💼 [Company LinkedIn](https://www.linkedin.com/company/triotrix-tech-solutions/)

---

Made with ❤️ by [**Triotrix Tech Solutions**](https://www.linkedin.com/company/triotrix-tech-solutions/)  
Empowering Tomorrow's Digital World 🚀
