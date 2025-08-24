import type { ThemeOptions, ThemeSwitcherConfig, ThemeData } from './types';

export class WebsiteThemeSwitcher {
  private static instance: WebsiteThemeSwitcher | undefined;
  private options: Required<ThemeOptions>;
  private currentTheme: string = 'light';

  constructor(options: ThemeOptions = {}) {
    this.options = {
      defaultTheme: 'light',
      storageKey: 'theme',
      enableSystemPreference: false,
      transitionDuration: 300,
      themes: ['light', 'dark'],
      onThemeChange: () => {},
      debug: false,
      enableTouchGestures: false,
      touchThreshold: 50,
      ...options
    };
  }

  /**
   * Initialize the theme switcher
   */
  public static init(options?: ThemeOptions): WebsiteThemeSwitcher {
    if (!WebsiteThemeSwitcher.instance) {
      WebsiteThemeSwitcher.instance = new WebsiteThemeSwitcher(options);
      WebsiteThemeSwitcher.instance.setupEventListeners();
      WebsiteThemeSwitcher.instance.setInitialTheme();
    }
    return WebsiteThemeSwitcher.instance;
  }

  /**
   * Get the current instance
   */
  public static getInstance(): WebsiteThemeSwitcher | undefined {
    return WebsiteThemeSwitcher.instance;
  }

  /**
   * Set up event listeners for theme switchers
   */
  private setupEventListeners(): void {
    // Handle button theme setters
    this.setupButtonSwitchers();
    
    // Handle toggle switchers
    this.setupToggleSwitchers();
    
    // Handle select switchers
    this.setupSelectSwitchers();
    
    // Handle touch gestures if enabled
    if (this.options.enableTouchGestures) {
      this.setupTouchGestures();
    }
  }

  /**
   * Setup button switchers (data-set-theme)
   */
  private setupButtonSwitchers(): void {
    const buttons = document.querySelectorAll('[data-set-theme]');
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const theme = button.getAttribute('data-set-theme') || '';
        const activeClass = button.getAttribute('data-act-class');
        const customKey = button.getAttribute('data-key');
        
        if (theme) {
          this.setTheme(theme, customKey || undefined);
        }
        
        // Handle active class
        if (activeClass) {
          // Remove active class from all buttons
          document.querySelectorAll('[data-set-theme]').forEach(btn => {
            btn.classList.remove(activeClass);
          });
          // Add active class to clicked button
          button.classList.add(activeClass);
        }
      });
    });
  }

  /**
   * Setup toggle switchers (data-toggle-theme)
   */
  private setupToggleSwitchers(): void {
    const toggles = document.querySelectorAll('[data-toggle-theme]');
    toggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const themesList = toggle.getAttribute('data-toggle-theme');
        const activeClass = toggle.getAttribute('data-act-class');
        const customKey = toggle.getAttribute('data-key');
        
        if (themesList) {
          const themesArray = themesList.split(',');
          const currentTheme = this.getCurrentTheme(customKey || undefined);
          
          // Simple toggle logic - switch between first two themes
          if (themesArray.length >= 2) {
            const newTheme = currentTheme === themesArray[0] ? themesArray[1] : themesArray[0];
            this.setTheme(newTheme, customKey || undefined);
          }
        }
        
        // Handle active class
        if (activeClass) {
          document.querySelectorAll('[data-toggle-theme]').forEach(tgl => {
            tgl.classList.toggle(activeClass);
          });
        }
      });
    });
  }

  /**
   * Setup select switchers (data-choose-theme)
   */
  private setupSelectSwitchers(): void {
    const selects = document.querySelectorAll('[data-choose-theme]');
    selects.forEach(select => {
      select.addEventListener('change', (e) => {
        const target = e.target as HTMLSelectElement;
        const theme = target.value;
        const customKey = select.getAttribute('data-key');
        
        if (theme) {
          if (customKey) {
            this.setTheme(theme, customKey);
          } else {
            this.setTheme(theme);
          }
        } else {
          if (customKey) {
            this.removeTheme(customKey);
          } else {
            this.removeTheme();
          }
        }
      });
    });
  }

  /**
   * Setup touch gestures for mobile
   */
  private setupTouchGestures(): void {
    let startX = 0;
    let startY = 0;
    let isSwiping = false;

    document.addEventListener('touchstart', (e: TouchEvent) => {
      startX = e.touches[0]?.clientX || 0;
      startY = e.touches[0]?.clientY || 0;
      isSwiping = false;
    });

    document.addEventListener('touchmove', (e: TouchEvent) => {
      if (!isSwiping) {
        const currentX = e.touches[0]?.clientX || 0;
        const currentY = e.touches[0]?.clientY || 0;
        const diffX = Math.abs(currentX - startX);
        const diffY = Math.abs(currentY - startY);

        if (diffX > this.options.touchThreshold && diffX > diffY) {
          isSwiping = true;
          const direction = currentX > startX ? 'right' : 'left';
          this.handleSwipeGesture(direction);
        }
      }
    });
  }

  /**
   * Handle swipe gesture
   */
  private handleSwipeGesture(direction: 'left' | 'right'): void {
    const currentTheme = this.getCurrentTheme();
    const themeIndex = this.options.themes.indexOf(currentTheme);
    
    if (direction === 'right' && themeIndex > 0) {
      // Swipe right - go to previous theme
      const prevTheme = this.options.themes[themeIndex - 1];
      if (prevTheme) {
        this.setTheme(prevTheme);
      }
    } else if (direction === 'left' && themeIndex < this.options.themes.length - 1) {
      // Swipe left - go to next theme
      const nextTheme = this.options.themes[themeIndex + 1];
      if (nextTheme) {
        this.setTheme(nextTheme);
      }
    }
  }

  /**
   * Set the initial theme
   */
  private setInitialTheme(): void {
    const savedTheme = this.getSavedTheme();
    const systemPrefersDark = WebsiteThemeSwitcher.getSystemPreference();
    
    if (savedTheme && this.options.themes.includes(savedTheme)) {
      this.currentTheme = savedTheme;
    } else if (this.options.enableSystemPreference && systemPrefersDark) {
      this.currentTheme = 'dark';
    } else {
      this.currentTheme = this.options.defaultTheme;
    }
    
    this.applyTheme(this.currentTheme);
  }

  /**
   * Get saved theme from localStorage
   */
  private getSavedTheme(key?: string): string | null {
    try {
      const storageKey = key || this.options.storageKey;
      return localStorage.getItem(storageKey);
    } catch {
      return null;
    }
  }

  /**
   * Save theme to localStorage
   */
  private saveTheme(theme: string, key?: string): void {
    try {
      const storageKey = key || this.options.storageKey;
      localStorage.setItem(storageKey, theme);
    } catch (error) {
      if (this.options.debug) {
        console.warn('WebsiteThemeSwitcher: Failed to save theme to localStorage:', error);
      }
    }
  }

  /**
   * Apply theme to the document
   */
  private applyTheme(theme: string): void {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    
    this.currentTheme = theme;
    
    // Call callback if provided
    if (this.options.onThemeChange) {
      this.options.onThemeChange(theme);
    }
    
    if (this.options.debug) {
      console.log('WebsiteThemeSwitcher: Theme applied:', theme);
    }
  }

  /**
   * Set a specific theme
   */
  public setTheme(theme: string, key?: string): void {
    if (theme && this.options.themes.includes(theme)) {
      this.applyTheme(theme);
      if (key) {
        this.saveTheme(theme, key);
      } else {
        this.saveTheme(theme);
      }
    }
  }

  /**
   * Remove theme (set to default)
   */
  public removeTheme(key?: string): void {
    this.applyTheme('');
    if (key) {
      this.saveTheme('', key);
    } else {
      this.saveTheme('');
    }
  }

  /**
   * Get current theme
   */
  public getCurrentTheme(key?: string): string {
    if (key) {
      return this.getSavedTheme(key) || '';
    }
    return this.currentTheme;
  }

  /**
   * Toggle between themes
   */
  public toggleTheme(themes: string[] = ['light', 'dark']): void {
    const currentTheme = this.getCurrentTheme();
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    if (nextTheme) {
      this.setTheme(nextTheme);
    }
  }

  /**
   * Check if dark mode is active
   */
  public isDarkMode(): boolean {
    return this.currentTheme === 'dark';
  }

  /**
   * Get system preference
   */
  public static getSystemPreference(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  /**
   * Create a custom switcher
   */
  public createSwitcher(config: ThemeSwitcherConfig): void {
    const { type, element, themes, onChange } = config;
    
    if (!element) return;
    
    switch (type) {
      case 'custom':
        element.addEventListener('click', () => {
          const currentTheme = this.getCurrentTheme();
          const currentIndex = themes.indexOf(currentTheme);
          const nextIndex = (currentIndex + 1) % themes.length;
          const nextTheme = themes[nextIndex];
          
          if (nextTheme) {
            this.setTheme(nextTheme);
            if (onChange) onChange(nextTheme);
          }
        });
        break;
    }
  }

  /**
   * Load a custom theme dynamically
   */
  public loadTheme(themeName: string, variables: Record<string, string>): void {
    const style = document.createElement('style');
    style.textContent = `
      [data-theme="${themeName}"] {
        ${Object.entries(variables).map(([key, value]) => `${key}: ${value};`).join('\n        ')}
      }
    `;
    document.head.appendChild(style);
    
    // Add to available themes
    if (!this.options.themes.includes(themeName)) {
      this.options.themes.push(themeName);
    }
  }

  /**
   * Destroy the instance
   */
  public destroy(): void {
    WebsiteThemeSwitcher.instance = undefined as any;
  }
}
