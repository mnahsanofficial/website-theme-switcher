# 🌐 Framework Installation Guide

This guide provides detailed installation and setup instructions for `website-theme-switcher` across different frameworks and build tools.

## 📦 Installation

All frameworks use the same base installation:

```bash
npm install website-theme-switcher
# or
yarn add website-theme-switcher
# or
pnpm add website-theme-switcher
```

## ⚛️ React

### Basic Setup

```jsx
import React, { useEffect } from 'react';
import { WebsiteThemeSwitcher } from 'website-theme-switcher';

function App() {
  useEffect(() => {
    // Initialize theme switcher
    WebsiteThemeSwitcher.init();
  }, []);

  return (
    <div className="app">
      <button data-theme-switcher="toggle" data-themes="light,dark">
        🌓 Toggle Theme
      </button>
      {/* Your app content */}
    </div>
  );
}

export default App;
```

### Custom Hook

```jsx
// hooks/useTheme.js
import { useState, useEffect } from 'react';
import { WebsiteThemeSwitcher } from 'website-theme-switcher';

export function useTheme() {
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    // Initialize and get current theme
    WebsiteThemeSwitcher.init({
      onThemeChange: (theme) => setCurrentTheme(theme)
    });
    
    setCurrentTheme(WebsiteThemeSwitcher.getCurrentTheme());
  }, []);

  const toggleTheme = () => {
    WebsiteThemeSwitcher.toggleTheme(['light', 'dark']);
  };

  const setTheme = (theme) => {
    WebsiteThemeSwitcher.setTheme(theme);
  };

  return { currentTheme, toggleTheme, setTheme };
}
```

### Usage with Hook

```jsx
import React from 'react';
import { useTheme } from './hooks/useTheme';

function ThemeToggle() {
  const { currentTheme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {currentTheme === 'light' ? '🌙' : '☀️'} 
      {currentTheme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}
```

### Next.js Integration

```jsx
// pages/_app.js or app/layout.js
import { useEffect } from 'react';
import { WebsiteThemeSwitcher } from 'website-theme-switcher';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    WebsiteThemeSwitcher.init({
      defaultTheme: 'light',
      enableSystemPreference: true
    });
  }, []);

  return <Component {...pageProps} />;
}
```

### CSS Modules

```css
/* styles/theme.module.css */
:root {
  --bg-primary: #ffffff;
  --text-primary: #1a1a1a;
}

[data-theme="dark"] {
  --bg-primary: #1a1a1a;
  --text-primary: #ffffff;
}

.container {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: all 0.3s ease;
}
```

## 🟢 Vue 3

### Composition API

```vue
<template>
  <div class="app" :data-theme="currentTheme">
    <button @click="toggleTheme">
      {{ currentTheme === 'light' ? '🌙' : '☀️' }} Toggle
    </button>
    <!-- Your app content -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { WebsiteThemeSwitcher } from 'website-theme-switcher';

const currentTheme = ref('light');

onMounted(() => {
  WebsiteThemeSwitcher.init({
    onThemeChange: (theme) => {
      currentTheme.value = theme;
    }
  });
  
  currentTheme.value = WebsiteThemeSwitcher.getCurrentTheme();
});

const toggleTheme = () => {
  WebsiteThemeSwitcher.toggleTheme(['light', 'dark']);
};
</script>

<style>
:root {
  --bg-primary: #ffffff;
  --text-primary: #1a1a1a;
}

[data-theme="dark"] {
  --bg-primary: #1a1a1a;
  --text-primary: #ffffff;
}

.app {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: all 0.3s ease;
}
</style>
```

### Options API

```vue
<template>
  <div class="app" :data-theme="currentTheme">
    <button @click="toggleTheme">🌓 Toggle Theme</button>
  </div>
</template>

<script>
import { WebsiteThemeSwitcher } from 'website-theme-switcher';

export default {
  data() {
    return {
      currentTheme: 'light'
    };
  },
  mounted() {
    WebsiteThemeSwitcher.init({
      onThemeChange: (theme) => {
        this.currentTheme = theme;
      }
    });
    
    this.currentTheme = WebsiteThemeSwitcher.getCurrentTheme();
  },
  methods: {
    toggleTheme() {
      WebsiteThemeSwitcher.toggleTheme(['light', 'dark']);
    }
  }
};
</script>
```

### Nuxt.js Integration

```vue
<!-- plugins/theme.client.js -->
import { WebsiteThemeSwitcher } from 'website-theme-switcher';

export default defineNuxtPlugin(() => {
  if (process.client) {
    WebsiteThemeSwitcher.init({
      defaultTheme: 'light',
      enableSystemPreference: true
    });
  }
});
```

## 🅰️ Angular

### Basic Setup

```typescript
// app.component.ts
import { Component, OnInit } from '@angular/core';
import { WebsiteThemeSwitcher } from 'website-theme-switcher';

@Component({
  selector: 'app-root',
  template: `
    <div class="app" [attr.data-theme]="currentTheme">
      <button (click)="toggleTheme()">🌓 Toggle Theme</button>
      <!-- Your app content -->
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentTheme = 'light';

  ngOnInit() {
    WebsiteThemeSwitcher.init({
      onThemeChange: (theme: string) => {
        this.currentTheme = theme;
      }
    });
    
    this.currentTheme = WebsiteThemeSwitcher.getCurrentTheme();
  }

  toggleTheme() {
    WebsiteThemeSwitcher.toggleTheme(['light', 'dark']);
  }
}
```

### Service

```typescript
// services/theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WebsiteThemeSwitcher } from 'website-theme-switcher';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentThemeSubject = new BehaviorSubject<string>('light');
  public currentTheme$ = this.currentThemeSubject.asObservable();

  constructor() {
    WebsiteThemeSwitcher.init({
      onThemeChange: (theme: string) => {
        this.currentThemeSubject.next(theme);
      }
    });
    
    this.currentThemeSubject.next(WebsiteThemeSwitcher.getCurrentTheme());
  }

  toggleTheme() {
    WebsiteThemeSwitcher.toggleTheme(['light', 'dark']);
  }

  setTheme(theme: string) {
    WebsiteThemeSwitcher.setTheme(theme);
  }
}
```

### Usage in Components

```typescript
// components/theme-toggle.component.ts
import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  template: `
    <button (click)="toggleTheme()">
      {{ (currentTheme$ | async) === 'light' ? '🌙' : '☀️' }} 
      {{ (currentTheme$ | async) === 'light' ? 'Dark' : 'Light' }} Mode
    </button>
  `
})
export class ThemeToggleComponent {
  currentTheme$ = this.themeService.currentTheme$;

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
```

### Global Styles

```scss
// styles.scss
:root {
  --bg-primary: #ffffff;
  --text-primary: #1a1a1a;
}

[data-theme="dark"] {
  --bg-primary: #1a1a1a;
  --text-primary: #ffffff;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: all 0.3s ease;
}
```

## 🟠 Svelte

### Basic Component

```svelte
<script>
  import { onMount } from 'svelte';
  import { WebsiteThemeSwitcher } from 'website-theme-switcher';

  let currentTheme = 'light';

  onMount(() => {
    WebsiteThemeSwitcher.init({
      onThemeChange: (theme) => {
        currentTheme = theme;
      }
    });
    
    currentTheme = WebsiteThemeSwitcher.getCurrentTheme();
  });

  function toggleTheme() {
    WebsiteThemeSwitcher.toggleTheme(['light', 'dark']);
  }
</script>

<div class="app" data-theme={currentTheme}>
  <button on:click={toggleTheme}>🌓 Toggle Theme</button>
  <!-- Your app content -->
</div>

<style>
  :root {
    --bg-primary: #ffffff;
    --text-primary: #1a1a1a;
  }

  [data-theme="dark"] {
    --bg-primary: #1a1a1a;
    --text-primary: #ffffff;
  }

  .app {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    transition: all 0.3s ease;
  }
</style>
```

### Store

```javascript
// stores/theme.js
import { writable } from 'svelte/store';
import { WebsiteThemeSwitcher } from 'website-theme-switcher';

function createThemeStore() {
  const { subscribe, set } = writable('light');

  // Initialize
  WebsiteThemeSwitcher.init({
    onThemeChange: (theme) => {
      set(theme);
    }
  });
  
  set(WebsiteThemeSwitcher.getCurrentTheme());

  return {
    subscribe,
    toggle: () => WebsiteThemeSwitcher.toggleTheme(['light', 'dark']),
    set: (theme) => WebsiteThemeSwitcher.setTheme(theme)
  };
}

export const themeStore = createThemeStore();
```

### Usage with Store

```svelte
<script>
  import { themeStore } from './stores/theme.js';
</script>

<div class="app" data-theme={$themeStore}>
  <button on:click={() => themeStore.toggle()}>
    {$themeStore === 'light' ? '🌙' : '☀️'} Toggle
  </button>
</div>
```

## 🚀 Vite

### Basic Setup

```javascript
// main.js
import { WebsiteThemeSwitcher } from 'website-theme-switcher';
import './style.css';

// Initialize theme switcher
WebsiteThemeSwitcher.init();

// Your app code...
```

### CSS Variables

```css
/* style.css */
:root {
  --bg-primary: #ffffff;
  --text-primary: #1a1a1a;
}

[data-theme="dark"] {
  --bg-primary: #1a1a1a;
  --text-primary: #ffffff;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: all 0.3s ease;
}
```

### Plugin Integration

```javascript
// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          :root {
            --bg-primary: #ffffff;
            --text-primary: #1a1a1a;
          }
          
          [data-theme="dark"] {
            --bg-primary: #1a1a1a;
            --text-primary: #ffffff;
          }
        `
      }
    }
  }
});
```

## 📦 Webpack

### Basic Setup

```javascript
// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
```

### Usage

```javascript
// src/index.js
import { WebsiteThemeSwitcher } from 'website-theme-switcher';
import './styles.css';

WebsiteThemeSwitcher.init();
```

## 🎨 Tailwind CSS Integration

### Configuration

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class', // Important for theme switching
  content: [
    "./src/**/*.{js,jsx,ts,tsx,vue,svelte}",
    "./public/index.html"
  ],
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

### CSS Variables

```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-primary: #3b82f6;
  --color-secondary: #64748b;
}

.dark {
  --color-primary: #60a5fa;
  --color-secondary: #94a3b8;
}
```

### HTML Structure

```html
<html class="light" data-theme="light">
  <body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <button data-theme-switcher="toggle" data-themes="light,dark">
      🌓 Toggle
    </button>
  </body>
</html>
```

## 🎨 Bootstrap Integration

### CSS Variables

```css
:root {
  --bs-body-bg: #ffffff;
  --bs-body-color: #212529;
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
}

[data-theme="dark"] {
  --bs-body-bg: #212529;
  --bs-body-color: #f8f9fa;
  --bs-primary: #6ea8fe;
  --bs-secondary: #adb5bd;
}
```

### HTML Usage

```html
<body class="bg-body text-body">
  <div class="container">
    <button class="btn btn-primary" data-theme-switcher="toggle" data-themes="light,dark">
      🌓 Switch Theme
    </button>
  </div>
</body>
```

## 🔧 Build Tool Integration

### Rollup

```javascript
// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'MyApp'
  },
  plugins: [
    resolve(),
    commonjs()
  ]
};
```

### Parcel

```json
// package.json
{
  "scripts": {
    "build": "parcel src/index.html",
    "dev": "parcel src/index.html"
  }
}
```

### ESBuild

```javascript
// build.js
const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/index.js'],
  bundle: true,
  outfile: 'dist/bundle.js',
  format: 'iife',
  globalName: 'MyApp'
});
```

## 📱 Mobile & PWA

### Touch Events

```javascript
// Enhanced touch support
WebsiteThemeSwitcher.init({
  enableTouchGestures: true,
  touchThreshold: 50, // pixels
  onThemeChange: (theme) => {
    // Haptic feedback on mobile
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }
  }
});
```

### Service Worker

```javascript
// sw.js
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
```

## 🧪 Testing

### Jest Setup

```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapping: {
    '^website-theme-switcher$': '<rootDir>/src/__mocks__/website-theme-switcher.js'
  }
};
```

### Mock

```javascript
// src/__mocks__/website-theme-switcher.js
export const WebsiteThemeSwitcher = {
  init: jest.fn(),
  setTheme: jest.fn(),
  getCurrentTheme: jest.fn(() => 'light'),
  toggleTheme: jest.fn()
};
```

## 🚀 Performance Tips

1. **Lazy Load**: Only initialize when needed
2. **CSS Variables**: Use CSS variables for smooth transitions
3. **Debounce**: Debounce rapid theme changes
4. **Prefetch**: Preload theme assets
5. **Minimize DOM**: Avoid unnecessary DOM manipulation

## 🔍 Troubleshooting

### Common Issues

1. **Theme not persisting**: Check localStorage permissions
2. **Flickering**: Ensure CSS variables are defined before initialization
3. **Performance**: Use `requestAnimationFrame` for smooth transitions
4. **Mobile issues**: Test touch events and viewport settings

### Debug Mode

```javascript
WebsiteThemeSwitcher.init({
  debug: true, // Enable console logging
  onThemeChange: (theme) => {
    console.log('Theme changed to:', theme);
  }
});
```

---

For more detailed examples and advanced usage, visit our [documentation](https://website-theme-switcher.com/docs).
