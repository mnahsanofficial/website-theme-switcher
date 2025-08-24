import type { ThemeOptions, ThemeSwitcherConfig, ThemeData } from './types';

export class WebsiteThemeSwitcher {
  private static instance: WebsiteThemeSwitcher;
  private options: Required<ThemeOptions>;
  private currentTheme: string = 'light';
  private switchers: Map<HTMLElement, ThemeSwitcherConfig> = new Map();
  private touchStart: { x: number; y: number } | null = null;

  private constructor() {
    this.options = {
      defaultTheme: 'light',
      storageKey: 'website-theme',
      enableSystemPreference: false,
      transitionDuration: 300,
      themes: ['light', 'dark'],
      onThemeChange: () => {},
      debug: false,
      enableTouchGestures: false,
      touchThreshold: 50,
    };
  }

  /**
   * Get singleton instance
   */
  public static getInstance(): WebsiteThemeSwitcher {
    if (!WebsiteThemeSwitcher.instance) {
      WebsiteThemeSwitcher.instance = new WebsiteThemeSwitcher();
    }
    return WebsiteThemeSwitcher.instance;
  }

  /**
   * Initialize the theme switcher
   */
  public static init(options: ThemeOptions = {}): void {
    const instance = WebsiteThemeSwitcher.getInstance();
    instance.initialize(options);
  }

  /**
   * Initialize with options
   */
  private initialize(options: ThemeOptions): void {
    this.options = { ...this.options, ...options };
    
    if (this.options.debug) {
      console.log('WebsiteThemeSwitcher: Initializing with options:', this.options);
    }

    // Set initial theme
    this.setInitialTheme();
    
    // Setup event listeners
    this.setupEventListeners();
    
    // Initialize existing switchers
    this.initializeExistingSwitchers();
    
    // Setup touch gestures if enabled
    if (this.options.enableTouchGestures) {
      this.setupTouchGestures();
    }

    if (this.options.debug) {
      console.log('WebsiteThemeSwitcher: Initialized successfully');
    }
  }

  /**
   * Set initial theme based on saved preference or system preference
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
  private getSavedTheme(): string | null {
    try {
      return localStorage.getItem(this.options.storageKey);
    } catch {
      return null;
    }
  }

  /**
   * Save theme to localStorage
   */
  private saveTheme(theme: string): void {
    try {
      localStorage.setItem(this.options.storageKey, theme);
    } catch (error) {
      if (this.options.debug) {
        console.warn('WebsiteThemeSwitcher: Failed to save theme to localStorage:', error);
      }
    }
  }

  /**
   * Get system preference for dark mode
   */
  public static getSystemPreference(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  /**
   * Apply theme to the document
   */
  private applyTheme(theme: string): void {
    const html = document.documentElement;
    const body = document.body;

    // Remove all existing theme classes and attributes
    this.options.themes.forEach(t => {
      html.classList.remove(t);
      html.removeAttribute(`data-theme-${t}`);
    });

    // Add new theme class and attribute
    html.classList.add(theme);
    html.setAttribute('data-theme', theme);
    html.setAttribute(`data-theme-${theme}`, '');

    // Apply transition
    if (this.options.transitionDuration > 0) {
      body.style.transition = `all ${this.options.transitionDuration}ms ease`;
    }

    this.currentTheme = theme;
    this.saveTheme(theme);

    if (this.options.debug) {
      console.log('WebsiteThemeSwitcher: Theme applied:', theme);
    }

    // Call callback
    this.options.onThemeChange(theme);
  }

  /**
   * Setup event listeners for theme switchers
   */
  private setupEventListeners(): void {
    document.addEventListener('click', this.handleClick.bind(this));
    document.addEventListener('change', this.handleChange.bind(this));
  }

  /**
   * Handle click events on theme switchers
   */
  private handleClick(event: Event): void {
    const target = event.target as HTMLElement;
    
    if (!target.hasAttribute('data-theme-switcher')) {
      return;
    }

    const action = target.getAttribute('data-theme-switcher');
    const theme = target.getAttribute('data-theme');
    const themes = target.getAttribute('data-themes');

    switch (action) {
      case 'toggle':
        if (themes) {
          const themeList = themes.split(',');
          WebsiteThemeSwitcher.toggleTheme(themeList);
        }
        break;
      case 'set':
        if (theme) {
          WebsiteThemeSwitcher.setTheme(theme);
        }
        break;
    }
  }

  /**
   * Handle change events on select elements
   */
  private handleChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    
    if (target.getAttribute('data-theme-switcher') === 'select') {
      WebsiteThemeSwitcher.setTheme(target.value);
    }
  }

  /**
   * Initialize existing theme switchers in the DOM
   */
  private initializeExistingSwitchers(): void {
    const switchers = document.querySelectorAll('[data-theme-switcher]');
    switchers.forEach(element => {
      this.initializeSwitcher(element as HTMLElement);
    });
  }

  /**
   * Initialize a theme switcher element
   */
  private initializeSwitcher(element: HTMLElement): void {
    const action = element.getAttribute('data-theme-switcher');
    const themes = element.getAttribute('data-themes')?.split(',') || this.options.themes;
    
    if (action && themes) {
      const config: ThemeSwitcherConfig = {
        type: action as any,
        element,
        themes,
      };
      
      this.switchers.set(element, config);
      
      if (this.options.debug) {
        console.log('WebsiteThemeSwitcher: Initialized switcher:', config);
      }
    }
  }

  /**
   * Setup touch gestures for mobile
   */
  private setupTouchGestures(): void {
    document.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
    document.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: true });
  }

  /**
   * Handle touch start
   */
  private handleTouchStart(event: TouchEvent): void {
    if (event.touches.length === 1) {
      this.touchStart = {
        x: event.touches[0]?.clientX || 0,
        y: event.touches[0]?.clientY || 0,
      };
    }
  }

  /**
   * Handle touch end
   */
  private handleTouchEnd(event: TouchEvent): void {
    if (!this.touchStart || event.changedTouches.length !== 1) {
      return;
    }

    const touchEnd = {
      x: event.changedTouches[0]?.clientX || 0,
      y: event.changedTouches[0]?.clientY || 0,
    };

    const deltaX = Math.abs(touchEnd.x - this.touchStart.x);
    const deltaY = Math.abs(touchEnd.y - this.touchStart.y);

    // Check if it's a horizontal swipe
    if (deltaX > this.options.touchThreshold && deltaX > deltaY) {
      if (touchEnd.x > this.touchStart.x) {
        // Swipe right - next theme
        this.nextTheme();
      } else {
        // Swipe left - previous theme
        this.previousTheme();
      }
    }

    this.touchStart = null;
  }

  /**
   * Get current theme
   */
  public static getCurrentTheme(): string {
    return WebsiteThemeSwitcher.getInstance().currentTheme;
  }

  /**
   * Set theme
   */
  public static setTheme(theme: string): void {
    const instance = WebsiteThemeSwitcher.getInstance();
    if (instance.options.themes.includes(theme)) {
      instance.applyTheme(theme);
    } else if (instance.options.debug) {
      console.warn('WebsiteThemeSwitcher: Invalid theme:', theme);
    }
  }

  /**
   * Toggle between themes
   */
  public static toggleTheme(themes: string[]): void {
    const instance = WebsiteThemeSwitcher.getInstance();
    const currentIndex = themes.indexOf(instance.currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    
    if (nextTheme) {
      instance.applyTheme(nextTheme);
    }
  }

  /**
   * Check if dark mode is active
   */
  public static isDarkMode(): boolean {
    return WebsiteThemeSwitcher.getCurrentTheme() === 'dark';
  }

  /**
   * Next theme in the list
   */
  private nextTheme(): void {
    const currentIndex = this.options.themes.indexOf(this.currentTheme);
    const nextIndex = (currentIndex + 1) % this.options.themes.length;
    const nextTheme = this.options.themes[nextIndex];
    if (nextTheme) {
      this.applyTheme(nextTheme);
    }
  }

  /**
   * Previous theme in the list
   */
  private previousTheme(): void {
    const currentIndex = this.options.themes.indexOf(this.currentTheme);
    const prevIndex = currentIndex === 0 ? this.options.themes.length - 1 : currentIndex - 1;
    const prevTheme = this.options.themes[prevIndex];
    if (prevTheme) {
      this.applyTheme(prevTheme);
    }
  }

  /**
   * Create a custom theme switcher
   */
  public static createSwitcher(config: ThemeSwitcherConfig): void {
    const instance = WebsiteThemeSwitcher.getInstance();
    instance.switchers.set(config.element, config);
    
    if (instance.options.debug) {
      console.log('WebsiteThemeSwitcher: Custom switcher created:', config);
    }
  }

  /**
   * Load a custom theme dynamically
   */
  public static loadTheme(name: string, variables: Record<string, string>): void {
    const instance = WebsiteThemeSwitcher.getInstance();
    
    // Add theme to available themes if not exists
    if (!instance.options.themes.includes(name)) {
      instance.options.themes.push(name);
    }

    // Apply CSS variables
    const root = document.documentElement;
    Object.entries(variables).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    if (instance.options.debug) {
      console.log('WebsiteThemeSwitcher: Custom theme loaded:', name, variables);
    }
  }

  /**
   * Destroy the theme switcher instance
   */
  public static destroy(): void {
    if (WebsiteThemeSwitcher.instance) {
      WebsiteThemeSwitcher.instance.cleanup();
      WebsiteThemeSwitcher.instance = undefined as any;
    }
  }

  /**
   * Cleanup resources
   */
  private cleanup(): void {
    this.switchers.clear();
    // Remove event listeners
    document.removeEventListener('click', this.handleClick.bind(this));
    document.removeEventListener('change', this.handleChange.bind(this));
    
    if (this.options.enableTouchGestures) {
      document.removeEventListener('touchstart', this.handleTouchStart.bind(this));
      document.removeEventListener('touchend', this.handleTouchEnd.bind(this));
    }
  }
}
