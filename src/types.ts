export interface ThemeOptions {
  /** Default theme when no preference is saved */
  defaultTheme?: string;
  /** Custom localStorage key for theme persistence */
  storageKey?: string;
  /** Enable system preference detection */
  enableSystemPreference?: boolean;
  /** Transition duration in milliseconds */
  transitionDuration?: number;
  /** Available theme names */
  themes?: string[];
  /** Callback when theme changes */
  onThemeChange?: (theme: string) => void;
  /** Enable debug mode */
  debug?: boolean;
  /** Enable touch gestures for mobile */
  enableTouchGestures?: boolean;
  /** Touch threshold for gesture detection */
  touchThreshold?: number;
}

export interface ThemeSwitcherConfig {
  /** Type of switcher */
  type: 'toggle' | 'set' | 'select' | 'custom';
  /** DOM element for the switcher */
  element: HTMLElement;
  /** Available themes */
  themes: string[];
  /** Callback when theme changes */
  onChange?: (theme: string) => void;
}

export interface ThemeData {
  /** Theme name */
  name: string;
  /** CSS variables for the theme */
  variables: Record<string, string>;
}

export interface TouchGesture {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  threshold: number;
}
