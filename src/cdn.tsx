import React from "react";
import { createRoot } from "react-dom/client";
import { AppLauncher, AppLauncherProduct } from "./AppLauncher";

// Declare global types
declare global {
  interface Window {
    renderAppLauncher: (
      elementId: string,
      products: AppLauncherProduct[],
      options?: {
        dropdownStyles?: any;
        svgColor?: string;
        position?: "right" | "left" | "center";
      }
    ) => void;
  }
}

// Expose a global function for CDN usage
window.renderAppLauncher = (
  elementId: string,
  products: AppLauncherProduct[],
  options = {}
) => {
  const container = document.getElementById(elementId);
  if (!container) {
    console.error(`Container with id "${elementId}" not found`);
    return;
  }

  const root = createRoot(container);
  root.render(
    <AppLauncher
      products={products}
      dropdownStyles={options.dropdownStyles}
      svgColor={options.svgColor}
      position={options.position}
    />
  );
};
