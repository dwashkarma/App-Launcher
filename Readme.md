# app-launcher

A React-based app launcher component available as an npm package and also via CDN for easy integration in any web page.

## Features

- 🚀 Easy integration via CDN or npm
- ⚛️ Supports React and TypeScript
- 📱 Responsive design with smooth animations
- 🔗 Simple click-to-launch functionality
- ⌨️ Keyboard navigation (ESC to close)
- 🖱️ Click outside to close
- 🖼️ Supports  URL and static images
- ♿ Accessible with proper ARIA labels

## Installation

### Via npm

For React projects, install the package using npm:

```bash
npm install app-launcher-karma
```

Then import the components as needed in your React application.

### Via CDN

For quick integration into any HTML page without a build process, use the CDN version.


### CDN Usage

Include the app launcher in any HTML page by loading React, ReactDOM, and the app-launcher CDN script. Then call the global `renderAppLauncher` function to render the component.

```html

<body>
    <div id="app-launcher"></div>

    <!-- Load React and ReactDOM from CDN -->
    <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

    <!-- Load app-launcher from CDN -->
    <script src="https://cdn.jsdelivr.net/npm/app-launcher-karma@1.0.3/dist/app-launcher.cdn.js"></script>

    <!-- Render the app launcher -->
    <script>
        window.renderAppLauncher({
            elementId: "app-launcher",
            products: [
                { name: "App 1", icon: "/images/app1.jpg", url: "https://example.com/app1" },
                { name: "App 2", icon: "/images/app2.jpg", url: "https://example.com/app2" },
                { name: "Dashboard", icon: "/images/dashboard.jpg", url: "https://example.com/dashboard" },
                { name: "Analytics", icon: "/images/analytics.jpg", url: "https://example.com/analytics" }
            ],
        });
    </script>
</body>
</html>
```

### npm Usage

#### JavaScript
```javascript
import { AppLauncher } from 'app-launcher-karma';

function MyApp() {
    const products = [
        { name: "App 1", icon: "/images/app1.jpg", url: "https://example.com/app1" },
        { name: "App 2", icon: "/images/app2.jpg", url: "https://example.com/app2" }
    ];

    return (
        <div>
            <AppLauncher products={products} />
        </div>
    );
}
```

#### TypeScript
```typescript
import { AppLauncher, AppLauncherProduct } from 'app-launcher-karma';

function MyApp() {
    const products: AppLauncherProduct[] = [
        { name: "App 1", icon: "/images/app1.jpg", url: "https://example.com/app1" },
        { name: "App 2", icon: "/images/app2.jpg", url: "https://example.com/app2" }
    ];

    return (
        <div>
            <AppLauncher products={products} />
        </div>
    );
}
```

## TypeScript Support

This package is written in TypeScript and includes type definitions. The following interfaces are available:

### AppLauncherProduct

```typescript
interface AppLauncherProduct {
  name: string;
  icon: string; // URL or base64 data URI
  url: string;
}
```

### AppLauncherProps

```typescript
interface AppLauncherProps {
  products: AppLauncherProduct[];
}
```


## API Reference

### renderAppLauncher (CDN)

When using the CDN version, call `window.renderAppLauncher(config)` with the following configuration:

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `elementId` | string | Yes | The id of the DOM element where the app launcher will be rendered |
| `products` | array | Yes | Array of product objects (see Product Object structure below) |

### Product Object

Each product in the `products` array should have the following structure:

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | string | Yes | Name of the product to display |
| `icon` | string | Yes | URL or base64 data URI for the product icon image |
| `url` | string | Yes | URL to launch when the product is clicked |


## Important Notes

- When using the CDN version, make sure to load React and ReactDOM before the app-launcher script
- The `renderAppLauncher` function is exposed globally by the CDN bundle
- Product icons should be optimized for web display (recommended: square images, 64x64px or larger)
- URLs can be absolute or relative paths

## License

This project is licensed under the MIT License.

## Support

If you encounter any issues or have questions, please file an issue on the GitHub repository.