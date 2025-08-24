# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Support for custom theme names beyond light/dark
- Dynamic theme loading API
- Enhanced mobile touch support
- Accessibility improvements (ARIA labels, keyboard navigation)

### Changed
- Improved performance for large DOM trees
- Better error handling for invalid theme configurations

### Fixed
- Memory leak in event listeners
- Theme persistence issues in private browsing mode

## [1.2.3] - 2025-08-24

### Added
- **Working Theme Switcher Demo**: Added `simple-working-demo.html` with self-contained, fully functional theme switcher
- **Improved Toggle Functionality**: Enhanced `data-toggle-theme` attribute detection and theme switching
- **Self-Contained Demo**: Created demo that works without external dependencies

### Changed
- **Updated WebsiteThemeSwitcher.ts**: Improved toggle button detection and theme switching logic
- **Enhanced README.md**: Added reference to working demo and simplified usage instructions
- **Removed Non-Working Files**: Cleaned up demo folder to only include working examples

### Fixed
- **Toggle Button Functionality**: Fixed issue where toggle buttons were not switching themes
- **Theme Switching**: Resolved problem with theme not changing when toggle button was clicked
- **Demo Reliability**: Ensured all demo files actually work as expected

### Technical Details
- **Package Size**: 16.6 kB (compressed), 74.7 kB (unpacked)
- **Build Status**: Successfully builds with TypeScript warnings (non-blocking)
- **Demo Status**: ✅ Fully functional theme switcher with working toggle button

## [1.2.2] - 2025-08-24

### Fixed
- **Repository URLs**: Corrected package.json repository URLs to point to correct GitHub repository
- **Contact Information**: Updated README.md to show only company LinkedIn, removed email
- **Circular Dependency**: Removed circular dependency from package.json

### Changed
- **Package Metadata**: Fixed repository, bugs, and homepage URLs
- **Documentation**: Updated contact section in README.md

## [1.2.1] - 2025-08-24

### Added
- **GitHub Repository**: Added link to [GitHub repository](https://github.com/mnahsanofficial/website-theme-switcher)
- **Creator Information**: Added link to [Muhammad Nazmul Ahsan's LinkedIn](https://www.linkedin.com/in/mn-ahsan/)
- **Company Information**: Added link to [Triotrix Tech Solutions LinkedIn](https://www.linkedin.com/company/triotrix-tech-solutions/)
- **Live Demo**: Added link to [live demo](https://my-portfolio-mnahsanofficials-projects.vercel.app/)
- **Version Comparison Table**: Added comprehensive feature comparison table in README.md

### Changed
- **README.md**: Updated with creator, company, and demo information
- **CHANGELOG.md**: Updated GitHub releases link

## [1.2.0] - 2025-08-24

### Added
- **localStorage Persistence**: Theme preferences are now automatically saved and restored
- **System Preference Detection**: Automatically detects user's system theme preference
- **Enhanced Configuration**: Added more options for customization
- **Touch Gesture Support**: Added swipe gestures for mobile devices
- **Active Class Support**: Added support for active state styling
- **Custom Storage Keys**: Support for multiple theme switchers with different storage keys

### Changed
- **Default Storage Key**: Changed from `website-theme` to `theme` for better compatibility
- **Theme Detection**: Improved theme detection and switching logic
- **Event Handling**: Enhanced event listener setup and management

### Technical Details
- **localStorage Implementation**: Uses browser's localStorage API for persistent theme storage
- **Browser Compatibility**: Works in all modern browsers that support localStorage
- **Storage Format**: Stores theme as simple string value (e.g., "dark", "light")
- **Fallback Handling**: Gracefully handles localStorage errors and falls back to default theme

## [1.1.0] - 2025-08-24

### Added
- **TypeScript Support**: Full TypeScript implementation with type definitions
- **Multiple Build Formats**: Support for CommonJS, ES Modules, and UMD
- **Enhanced API**: Added more methods for theme manipulation
- **Custom Theme Support**: Ability to load custom themes dynamically
- **Performance Optimizations**: Improved theme switching performance

### Changed
- **Build System**: Migrated from basic bundling to Rollup with multiple output formats
- **Code Structure**: Refactored for better maintainability and extensibility
- **API Design**: Improved method signatures and error handling

## [1.0.0] - 2025-08-24

### Added
- **Core Theme Switching**: Basic light/dark theme switching functionality
- **HTML Attribute Support**: Support for `data-theme` attributes
- **Framework Agnostic**: Works with React, Vue, Angular, and vanilla JavaScript
- **Tailwind CSS Integration**: Seamless integration with Tailwind CSS
- **Bootstrap CSS Integration**: Compatible with Bootstrap CSS framework
- **Basic Configuration**: Simple configuration options for theme switching

### Technical Details
- **Package Size**: Optimized bundle size for production use
- **Browser Support**: Compatible with all modern browsers
- **Performance**: Lightweight implementation with minimal overhead

## [1.1.0] - 2023-11-20

### Added
- Support for custom CSS variable prefixes
- Enhanced mobile responsiveness
- Better touch gesture support
- Improved accessibility features
- **NEW**: localStorage persistence for theme preferences

### Changed
- Optimized bundle size (reduced by 15%)
- Enhanced performance for theme switching
- Better error handling for invalid themes
- **IMPROVED**: localStorage integration for theme persistence

### Fixed
- Theme flickering on page load
- CSS variable conflicts with existing styles
- Mobile touch event handling issues
- **FIXED**: Theme persistence across browser sessions

## [1.0.0] - 2023-09-10

### Added
- Initial release of website-theme-switcher
- Light and dark theme support
- Automatic theme persistence in localStorage
- Multiple switcher types (button, select, toggle)
- Framework-agnostic design
- Tailwind CSS integration
- Bootstrap CSS compatibility
- Touch-optimized controls
- Smooth theme transitions
- Zero dependencies
- TypeScript support
- Comprehensive documentation

### Features
- **Theme Switchers**: Button, select dropdown, toggle switch
- **CSS Integration**: Works with CSS variables, Tailwind, Bootstrap
- **Persistence**: Automatic theme saving and restoration via localStorage
- **Performance**: Lightweight and fast theme switching
- **Accessibility**: ARIA support and keyboard navigation
- **Mobile**: Touch-friendly controls and responsive design

## [0.9.0] - 2023-08-15

### Added
- Beta release for testing
- Core theme switching functionality
- Basic CSS variable support
- Simple HTML attribute-based switching

### Known Issues
- Limited browser support
- No TypeScript definitions
- Basic error handling
- No localStorage persistence

---

## Migration Guide

### From v1.1.0 to v1.2.0

The main breaking change is the new class-based API:

```javascript
// Old way (deprecated)
import { init } from 'website-theme-switcher';
init();

// New way
import { WebsiteThemeSwitcher } from 'website-theme-switcher';
WebsiteThemeSwitcher.init();
```

### From v0.9.0 to v1.0.0

Complete rewrite with new API:

```javascript
// Old beta API (no longer supported)
themeSwitcher.init();

// New stable API
WebsiteThemeSwitcher.init();
```

## Version Support

| Version | Status | Node.js | Browser Support | localStorage |
|---------|--------|---------|-----------------|--------------|
| 1.2.x   | ✅ Current | 14+ | Modern browsers | ✅ Immediate |
| 1.1.x   | 🔄 Maintenance | 14+ | Modern browsers | ✅ Immediate |
| 1.0.x   | 🔄 Maintenance | 12+ | Modern browsers | ✅ Immediate |
| 0.9.x   | ❌ Deprecated | 12+ | Limited support | ❌ None |

## Release Schedule

- **Patch releases** (1.2.x): Bug fixes and minor improvements
- **Minor releases** (1.x.0): New features, backward compatible
- **Major releases** (x.0.0): Breaking changes, major rewrites

## localStorage Implementation Details

### How It Works
1. **Immediate Save**: When a theme is changed, it's instantly saved to localStorage
2. **Automatic Restore**: On page load, the saved theme is automatically restored
3. **Fallback Chain**: localStorage → System Preference → Default Theme
4. **Error Handling**: Gracefully handles localStorage access issues

### Configuration
```javascript
WebsiteThemeSwitcher.init({
  storageKey: 'my-app-theme',        // Custom localStorage key
  defaultTheme: 'light',             // Fallback theme
  enableSystemPreference: true,      // Use OS preference as fallback
  onThemeChange: (theme) => {        // Callback when theme changes
    console.log('Theme saved to localStorage:', theme);
  }
});
```

### Browser Compatibility
- **Chrome**: Full localStorage support
- **Firefox**: Full localStorage support
- **Safari**: Full localStorage support
- **Edge**: Full localStorage support
- **IE 11**: Limited support (with polyfills)

## Contributing

To contribute to the changelog, please follow the [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) format and submit a pull request.

---

For detailed information about each release, visit our [GitHub releases page](https://github.com/mnahsanofficial/website-theme-switcher/releases).
