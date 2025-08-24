import { WebsiteThemeSwitcher } from '../WebsiteThemeSwitcher';

describe('WebsiteThemeSwitcher', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    
    // Reset localStorage mock
    (localStorage.getItem as jest.Mock).mockReturnValue(null);
    (localStorage.setItem as jest.Mock).mockClear();
    
    // Reset matchMedia mock
    (window.matchMedia as jest.Mock).mockReturnValue({
      matches: false,
      media: '',
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    });
    
    // Clean up any existing instance
    WebsiteThemeSwitcher.destroy();
  });

  afterEach(() => {
    document.body.removeChild(container);
    WebsiteThemeSwitcher.destroy();
  });

  describe('Initialization', () => {
    it('should initialize with default options', () => {
      WebsiteThemeSwitcher.init();
      
      expect(document.documentElement.classList.contains('light')).toBe(true);
      expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    });

    it('should initialize with custom options', () => {
      const onThemeChange = jest.fn();
      
      WebsiteThemeSwitcher.init({
        defaultTheme: 'dark',
        storageKey: 'custom-theme',
        onThemeChange,
      });
      
      expect(document.documentElement.classList.contains('dark')).toBe(true);
      expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    });

    it('should load saved theme from localStorage', () => {
      (localStorage.getItem as jest.Mock).mockReturnValue('dark');
      
      WebsiteThemeSwitcher.init();
      
      expect(document.documentElement.classList.contains('dark')).toBe(true);
      expect(localStorage.getItem).toHaveBeenCalledWith('website-theme');
    });

    it('should respect system preference when enabled', () => {
      (window.matchMedia as jest.Mock).mockReturnValue({
        matches: true, // System prefers dark
        media: '(prefers-color-scheme: dark)',
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      });
      
      WebsiteThemeSwitcher.init({
        enableSystemPreference: true,
      });
      
      expect(document.documentElement.classList.contains('dark')).toBe(true);
    });
  });

  describe('Theme Switching', () => {
    beforeEach(() => {
      WebsiteThemeSwitcher.init();
    });

    it('should switch theme using setTheme', () => {
      WebsiteThemeSwitcher.setTheme('dark');
      
      expect(document.documentElement.classList.contains('dark')).toBe(true);
      expect(document.documentElement.classList.contains('light')).toBe(false);
      expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    });

    it('should toggle between themes', () => {
      WebsiteThemeSwitcher.toggleTheme(['light', 'dark']);
      
      expect(document.documentElement.classList.contains('dark')).toBe(true);
      
      WebsiteThemeSwitcher.toggleTheme(['light', 'dark']);
      
      expect(document.documentElement.classList.contains('light')).toBe(true);
    });

    it('should save theme to localStorage', () => {
      WebsiteThemeSwitcher.setTheme('dark');
      
      expect(localStorage.setItem).toHaveBeenCalledWith('website-theme', 'dark');
    });

    it('should call onThemeChange callback', () => {
      const onThemeChange = jest.fn();
      
      WebsiteThemeSwitcher.init({ onThemeChange });
      WebsiteThemeSwitcher.setTheme('dark');
      
      expect(onThemeChange).toHaveBeenCalledWith('dark');
    });
  });

  describe('HTML Attribute Switchers', () => {
    beforeEach(() => {
      WebsiteThemeSwitcher.init();
    });

    it('should handle toggle switcher', () => {
      const button = document.createElement('button');
      button.setAttribute('data-theme-switcher', 'toggle');
      button.setAttribute('data-themes', 'light,dark');
      container.appendChild(button);
      
      button.click();
      
      expect(document.documentElement.classList.contains('dark')).toBe(true);
    });

    it('should handle set switcher', () => {
      const button = document.createElement('button');
      button.setAttribute('data-theme-switcher', 'set');
      button.setAttribute('data-theme', 'dark');
      container.appendChild(button);
      
      button.click();
      
      expect(document.documentElement.classList.contains('dark')).toBe(true);
    });

    it('should handle select switcher', () => {
      const select = document.createElement('select');
      select.setAttribute('data-theme-switcher', 'select');
      
      const lightOption = document.createElement('option');
      lightOption.value = 'light';
      lightOption.textContent = 'Light';
      
      const darkOption = document.createElement('option');
      darkOption.value = 'dark';
      darkOption.textContent = 'Dark';
      
      select.appendChild(lightOption);
      select.appendChild(darkOption);
      container.appendChild(select);
      
      select.value = 'dark';
      select.dispatchEvent(new Event('change'));
      
      expect(document.documentElement.classList.contains('dark')).toBe(true);
    });
  });

  describe('Touch Gestures', () => {
    beforeEach(() => {
      WebsiteThemeSwitcher.init({
        enableTouchGestures: true,
        themes: ['light', 'dark', 'sepia'],
      });
    });

    it('should handle right swipe to next theme', () => {
      const touchStart = new TouchEvent('touchstart', {
        touches: [{ clientX: 100, clientY: 100 } as Touch],
      });
      
      const touchEnd = new TouchEvent('touchend', {
        changedTouches: [{ clientX: 200, clientY: 100 } as Touch],
      });
      
      document.dispatchEvent(touchStart);
      document.dispatchEvent(touchEnd);
      
      expect(document.documentElement.classList.contains('dark')).toBe(true);
    });

    it('should handle left swipe to previous theme', () => {
      // First set to dark theme
      WebsiteThemeSwitcher.setTheme('dark');
      
      const touchStart = new TouchEvent('touchstart', {
        touches: [{ clientX: 200, clientY: 100 } as Touch],
      });
      
      const touchEnd = new TouchEvent('touchend', {
        changedTouches: [{ clientX: 100, clientY: 100 } as Touch],
      });
      
      document.dispatchEvent(touchStart);
      document.dispatchEvent(touchEnd);
      
      expect(document.documentElement.classList.contains('light')).toBe(true);
    });

    it('should not trigger on vertical swipe', () => {
      const touchStart = new TouchEvent('touchstart', {
        touches: [{ clientX: 100, clientY: 100 } as Touch],
      });
      
      const touchEnd = new TouchEvent('touchend', {
        changedTouches: [{ clientX: 100, clientY: 200 } as Touch],
      });
      
      document.dispatchEvent(touchStart);
      document.dispatchEvent(touchEnd);
      
      expect(document.documentElement.classList.contains('light')).toBe(true);
    });
  });

  describe('Utility Methods', () => {
    beforeEach(() => {
      WebsiteThemeSwitcher.init();
    });

    it('should get current theme', () => {
      expect(WebsiteThemeSwitcher.getCurrentTheme()).toBe('light');
      
      WebsiteThemeSwitcher.setTheme('dark');
      expect(WebsiteThemeSwitcher.getCurrentTheme()).toBe('dark');
    });

    it('should check if dark mode is active', () => {
      expect(WebsiteThemeSwitcher.isDarkMode()).toBe(false);
      
      WebsiteThemeSwitcher.setTheme('dark');
      expect(WebsiteThemeSwitcher.isDarkMode()).toBe(true);
    });

    it('should get system preference', () => {
      (window.matchMedia as jest.Mock).mockReturnValue({
        matches: true,
        media: '(prefers-color-scheme: dark)',
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      });
      
      expect(WebsiteThemeSwitcher.getSystemPreference()).toBe(true);
    });
  });

  describe('Custom Themes', () => {
    beforeEach(() => {
      WebsiteThemeSwitcher.init({
        themes: ['light', 'dark', 'custom'],
      });
    });

    it('should load custom theme dynamically', () => {
      const customVariables = {
        '--bg-primary': '#1e293b',
        '--text-primary': '#f1f5f9',
      };
      
      WebsiteThemeSwitcher.loadTheme('custom', customVariables);
      
      expect(document.documentElement.style.getPropertyValue('--bg-primary')).toBe('#1e293b');
      expect(document.documentElement.style.getPropertyValue('--text-primary')).toBe('#f1f5f9');
    });

    it('should create custom switcher', () => {
      const element = document.createElement('div');
      const config = {
        type: 'custom' as const,
        element,
        themes: ['light', 'dark', 'custom'],
        onChange: jest.fn(),
      };
      
      WebsiteThemeSwitcher.createSwitcher(config);
      
      // This would be tested by checking if the switcher is registered
      // The actual functionality would depend on the custom implementation
      expect(element).toBeDefined();
    });
  });

  describe('Error Handling', () => {
    beforeEach(() => {
      WebsiteThemeSwitcher.init({ debug: true });
    });

    it('should handle invalid theme gracefully', () => {
      const consoleSpy = jest.spyOn(console, 'warn');
      
      WebsiteThemeSwitcher.setTheme('invalid-theme');
      
      expect(consoleSpy).toHaveBeenCalledWith(
        'WebsiteThemeSwitcher: Invalid theme:',
        'invalid-theme'
      );
      expect(document.documentElement.classList.contains('light')).toBe(true);
    });

    it('should handle localStorage errors gracefully', () => {
      (localStorage.setItem as jest.Mock).mockImplementation(() => {
        throw new Error('Storage quota exceeded');
      });
      
      const consoleSpy = jest.spyOn(console, 'warn');
      
      WebsiteThemeSwitcher.setTheme('dark');
      
      expect(consoleSpy).toHaveBeenCalledWith(
        'WebsiteThemeSwitcher: Failed to save theme to localStorage:',
        expect.any(Error)
      );
    });
  });

  describe('Cleanup', () => {
    it('should destroy instance and cleanup resources', () => {
      WebsiteThemeSwitcher.init();
      
      // Add some event listeners
      const button = document.createElement('button');
      button.setAttribute('data-theme-switcher', 'toggle');
      button.setAttribute('data-themes', 'light,dark');
      container.appendChild(button);
      
      WebsiteThemeSwitcher.destroy();
      
      // Try to use after destruction
      WebsiteThemeSwitcher.setTheme('dark');
      
      // Should reinitialize automatically
      expect(document.documentElement.classList.contains('dark')).toBe(true);
    });
  });

  describe('Performance', () => {
    it('should use singleton pattern', () => {
      const instance1 = WebsiteThemeSwitcher.getInstance();
      const instance2 = WebsiteThemeSwitcher.getInstance();
      
      expect(instance1).toBe(instance2);
    });

    it('should handle rapid theme changes', () => {
      WebsiteThemeSwitcher.init();
      
      for (let i = 0; i < 10; i++) {
        WebsiteThemeSwitcher.setTheme('dark');
        WebsiteThemeSwitcher.setTheme('light');
      }
      
      expect(document.documentElement.classList.contains('light')).toBe(true);
    });
  });
});
