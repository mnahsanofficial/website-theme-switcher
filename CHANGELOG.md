# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.3.1] - 2025-08-25

### Added
- **🎬 Demo Video Icon**: Added 🎬 icon before "Demo Video" section header
- **🆕 New Tab Links**: All external links now open in new tabs for better user experience

### Changed
- **README.md**: Updated all external links to use `target="_blank"` attribute
- **Link Behavior**: External links now open in new tabs instead of same tab
- **User Experience**: Improved navigation by keeping users on the main page

### Updated Links
- **Demo Video**: Opens EINO platform in new tab
- **Live Portfolio**: Opens portfolio in new tab
- **GitHub Links**: All GitHub links open in new tabs
- **LinkedIn Links**: Creator and company links open in new tabs
- **Download Links**: Release and source code links open in new tabs

### Technical Details
- **Package Size**: 19.7 kB (compressed), 85.6 kB (unpacked)
- **Build Status**: Successfully builds with TypeScript warnings (non-blocking)
- **Link Status**: ✅ All external links open in new tabs
- **Icon Status**: ✅ 🎬 icon added to Demo Video section

## [1.3.0] - 2025-08-25

### Changed
- **🎬 Demo Video**: Replaced HTML demos with external demo video link to [EINO platform](https://app.eino.world/data-public/shared-link/3gGBZbghKme3dRVKsbSe)
- **🌐 Live Testing**: Added live portfolio link for real-world testing at [Portfolio](https://my-portfolio-mnahsanofficials-projects.vercel.app/)
- **📁 Simplified Package**: Removed all HTML demo files for cleaner package structure
- **🎯 External Demo Links**: Focus on external demo resources instead of embedded HTML

### Removed
- **HTML Demo Files**: `simple-working-demo.html`, `styles.css`
- **Local Demo Content**: All embedded demo HTML and CSS files
- **Demo Directory**: Cleaned up demo folder completely

### Added
- **🎬 EINO Demo Link**: Direct link to demo video on EINO platform
- **🌐 Portfolio Link**: Live website for testing theme switcher functionality
- **📱 Clickable Demo Image**: Placeholder image that links to demo video
- **🔗 External Resources**: Professional demo and testing links

### Technical Details
- **Package Size**: 19.3 kB (compressed), 84.1 kB (unpacked)
- **Build Status**: Successfully builds with TypeScript warnings (non-blocking)
- **Demo Status**: ✅ External demo video and live portfolio links
- **Package Cleanliness**: ✅ All HTML demos removed, external links only

## [1.2.9] - 2025-08-25

### Fixed
- **🎬 Video Demo Issue**: Fixed video path with URL encoding and added video controls
- **🎯 Simple Working Demo**: Restored the working demo HTML file that was accidentally deleted
- **📁 Demo Styles**: Recreated comprehensive CSS file with responsive design and theme-specific styling
- **📊 Version Comparison**: Updated table to include all versions from v1.0.0 to v1.2.8

### Added
- **🎥 Video Controls**: Added video controls for better user experience
- **🎨 Enhanced Styles**: Comprehensive CSS with responsive design, animations, and theme switching
- **📱 Responsive Demo**: Mobile-friendly demo with touch gestures and responsive layout
- **🔄 Demo Link**: Added link to simple working demo in README

### Changed
- **README.md**: Updated video section with proper video controls and demo links
- **Demo Section**: Enhanced to reference both video demo and interactive demo
- **Version Table**: Complete feature comparison across all versions
- **What's New**: Updated to reflect v1.2.8 features and improvements

### Technical Details
- **Package Size**: 19.1 kB (compressed), 82.7 kB (unpacked)
- **Build Status**: Successfully builds with TypeScript warnings (non-blocking)
- **Video Status**: ✅ Fixed video path and added controls
- **Demo Status**: ✅ Simple working demo restored with enhanced styles

## [1.2.8] - 2025-08-25

### Changed
- **🎬 Video Demo Restored**: Replaced HTML demos with auto-playing video demo
- **🗑️ HTML Demos Removed**: Cleaned up all HTML demo files for cleaner package
- **📁 GitHub Pages Removed**: No longer deploying HTML demos to GitHub Pages
- **🔧 Gitignore Enhanced**: Added comprehensive gitignore for unused files

### Removed
- **HTML Demo Files**: `demo-video.html`, `simple-working-demo.html`, `package-demo.html`, `index.html`, `styles.css`
- **GitHub Actions**: Removed automated deployment workflow
- **GitHub Pages**: No more live demo deployment

### Added
- **🎥 Video Demo**: Auto-playing video that loops continuously
- **📋 Enhanced Gitignore**: Added patterns for media files, temporary files, and unused assets
- **🎬 Cleaner Package**: Simplified package structure without demo HTML files

### Technical Details
- **Package Size**: 18.4 kB (compressed), 80.8 kB (unpacked)
- **Build Status**: Successfully builds with TypeScript warnings (non-blocking)
- **Demo Status**: ✅ Video demo with auto-play and loop
- **Package Cleanliness**: ✅ Removed all unused demo files

## [1.2.7] - 2025-08-25

### Added
- **🌐 GitHub Pages Deployment**: Automated deployment of all demo files to GitHub Pages
- **🎬 Live Demo Links**: Updated README with actual deployed demo URLs
- **📱 Demo Navigation**: Created main demo page with navigation to all demos
- **🚀 Automated Workflow**: GitHub Actions workflow for continuous deployment

### Changed
- **README.md**: Replaced video placeholder with live demo buttons and GitHub Pages links
- **Demo Section**: Updated to show deployed demo URLs instead of local file paths
- **Demo Experience**: Enhanced demo navigation with beautiful UI and descriptions

### Deployed Demos
- **🎬 Full Interactive Demo**: https://mnahsanofficial.github.io/website-theme-switcher/demo-video.html
- **🎯 Simple Working Demo**: https://mnahsanofficial.github.io/website-theme-switcher/simple-working-demo.html
- **📱 Demo Navigation**: https://mnahsanofficial.github.io/website-theme-switcher/

### Technical Details
- **Package Size**: 18.4 kB (compressed), 80.4 kB (unpacked)
- **Build Status**: Successfully builds with TypeScript warnings (non-blocking)
- **Deployment**: ✅ GitHub Pages with automated workflow
- **Demo Status**: ✅ All demos live and accessible online

## [1.2.6] - 2025-08-25

### Added
- **🎥 Auto-Playing Demo Video**: Added demo video section in README that automatically plays and loops
- **🎬 Enhanced Demo Page**: Created comprehensive `demo-video.html` with interactive theme switching
- **🔄 Auto-Demo Feature**: Demo automatically toggles themes every 5 seconds to showcase functionality
- **✨ Interactive Elements**: Added demo buttons, status display, and smooth animations
- **📱 Responsive Design**: Mobile-friendly demo with touch gestures and responsive layout

### Changed
- **README.md**: Added demo video section with auto-play, loop, and muted attributes
- **Demo Experience**: Enhanced demo with feature cards, hero section, and interactive controls
- **Visual Appeal**: Added smooth transitions, fade-in effects, and hover animations

### Features in Demo
- **Auto-Theme Switching**: Random theme changes every 5 seconds (30% probability)
- **Interactive Controls**: Light/Dark theme buttons and toggle functionality
- **Real-time Status**: Shows current theme, dark mode status, localStorage info, and theme count
- **Smooth Animations**: Fade-in effects, hover animations, and smooth transitions
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices

### Technical Details
- **Package Size**: 17.6 kB (compressed), 77.7 kB (unpacked)
- **Build Status**: Successfully builds with TypeScript warnings (non-blocking)
- **Demo Status**: ✅ Fully interactive demo with auto-playing features
- **Video Support**: MP4 and WebM formats with fallback for unsupported browsers

## [1.2.5] - 2025-08-24

### Fixed
- **Complete Version History**: Restored all previous version history that was accidentally removed
- **Migration Guide**: Restored comprehensive migration guide for all versions
- **Version Support Table**: Restored detailed version comparison and support matrix
- **localStorage Details**: Restored detailed localStorage implementation documentation
- **Contributing Guidelines**: Restored contributing and release schedule information

### Changed
- **CHANGELOG.md**: Now contains complete history from v0.9.0 to v1.2.5
- **Documentation**: Comprehensive changelog with all features, fixes, and technical details
- **Version Tracking**: Complete tracking of package evolution and improvements

### Technical Details
- **Package Size**: 16.9 kB (compressed), 75.6 kB (unpacked)
- **Build Status**: Successfully builds with TypeScript warnings (non-blocking)
- **History Status**: ✅ Complete version history restored and maintained

## [1.2.4] - 2025-08-24

### Changed
- **Enhanced README.md**: Completely restructured and updated with latest features and working demo
- **Improved Documentation**: Better organization, clearer examples, and updated version comparison table
- **Simplified Quick Start**: Streamlined 5-minute setup guide with working examples
- **Updated Features**: Highlighted working toggle button and self-contained demo
- **Better Examples**: Cleaner React, Vue, and Angular integration examples

### Added
- **What's New Section**: Added dedicated section highlighting v1.2.3 improvements
- **Demo Section**: Clear documentation of working demo files
- **Performance Metrics**: Updated package size information (17.0 kB compressed, 75.7 kB unpacked)
- **Enhanced Badges**: Updated npm badges for better visibility

### Technical Details
- **Package Size**: 17.0 kB (compressed), 75.7 kB (unpacked)
- **Build Status**: Successfully builds with TypeScript warnings (non-blocking)
- **Documentation**: Comprehensive README with working examples

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

## [0.9.0] - 2023-08-15

### Added
- **Beta Release**: Initial beta release for testing and feedback
- **Core Theme Switching**: Basic light/dark theme switching functionality
- **CSS Variable Support**: Support for CSS custom properties
- **HTML Attribute System**: Simple HTML attribute-based theme switching
- **Basic Event Handling**: Click and change event support

### Known Issues
- **Limited Browser Support**: Only tested in modern browsers
- **No TypeScript**: Basic JavaScript implementation
- **Basic Error Handling**: Limited error handling and validation
- **No localStorage**: No theme persistence across sessions
- **No Touch Support**: Limited mobile device support

### Technical Details
- **Package Size**: ~7.1KB (basic implementation)
- **Dependencies**: Zero external dependencies
- **Build System**: Basic bundling with minimal optimization

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

| Version | Status | Node.js | Browser Support | localStorage | Touch Gestures | TypeScript |
|---------|--------|---------|-----------------|--------------|----------------|------------|
| 1.2.x   | ✅ Current | 14+ | Modern browsers | ✅ Immediate | ✅ Swipe | ✅ Full |
| 1.1.x   | 🔄 Maintenance | 14+ | Modern browsers | ✅ Immediate | ✅ Basic | ✅ Full |
| 1.0.x   | 🔄 Maintenance | 12+ | Modern browsers | ✅ Immediate | ❌ None | ✅ Full |
| 0.9.x   | ❌ Deprecated | 12+ | Limited support | ❌ None | ❌ None | ❌ None |

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