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

## [1.2.0] - 2024-01-15

### Added
- **BREAKING**: New `WebsiteThemeSwitcher` class-based API
- Support for multiple theme switching strategies
- Enhanced Tailwind CSS integration with `dark:` class support
- Bootstrap CSS variable compatibility
- System preference detection and automatic switching
- Custom transition duration configuration
- Event callbacks for theme changes
- TypeScript definitions

### Changed
- **BREAKING**: Renamed package from `theme-switcher` to `website-theme-switcher`
- **BREAKING**: Changed initialization method from `init()` to `WebsiteThemeSwitcher.init()`
- Improved CSS variable handling
- Better localStorage management
- Enhanced error handling and validation

### Deprecated
- Old `init()` function (will be removed in v2.0.0)
- `setTheme()` without options parameter

### Removed
- jQuery dependency
- Legacy browser support (IE < 11)

## [1.1.0] - 2023-11-20

### Added
- Support for custom CSS variable prefixes
- Enhanced mobile responsiveness
- Better touch gesture support
- Improved accessibility features

### Changed
- Optimized bundle size (reduced by 15%)
- Enhanced performance for theme switching
- Better error handling for invalid themes

### Fixed
- Theme flickering on page load
- CSS variable conflicts with existing styles
- Mobile touch event handling issues

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
- **Persistence**: Automatic theme saving and restoration
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

| Version | Status | Node.js | Browser Support |
|---------|--------|---------|-----------------|
| 1.2.x   | ✅ Current | 14+ | Modern browsers |
| 1.1.x   | 🔄 Maintenance | 14+ | Modern browsers |
| 1.0.x   | 🔄 Maintenance | 12+ | Modern browsers |
| 0.9.x   | ❌ Deprecated | 12+ | Limited support |

## Release Schedule

- **Patch releases** (1.2.x): Bug fixes and minor improvements
- **Minor releases** (1.x.0): New features, backward compatible
- **Major releases** (x.0.0): Breaking changes, major rewrites

## Contributing

To contribute to the changelog, please follow the [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) format and submit a pull request.

---

For detailed information about each release, visit our [GitHub releases page](https://github.com/your-username/website-theme-switcher/releases).
