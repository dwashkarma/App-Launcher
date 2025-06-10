import React from "react";
import ReactDOM from "react-dom/client";
import { AppLauncher, AppLauncherProduct, DropdownStyles } from "./AppLauncher";

// Declare global types
declare global {
  interface Window {
    renderAppLauncher: (config: {
      elementId: string;
      products: AppLauncherProduct[];
      dropdownStyles?: DropdownStyles;
    }) => void;
  }
}

// Expose a global function for CDN usage
window.renderAppLauncher = function ({
  elementId,
  products,
  dropdownStyles,
}: {
  elementId: string;
  products: AppLauncherProduct[];
  dropdownStyles?: DropdownStyles;
}) {
  const container = document.getElementById(elementId);
  if (!container) {
    throw new Error(`Element with id '${elementId}' not found.`);
  }
  const root = ReactDOM.createRoot(container);
  root.render(
    <AppLauncher products={products} dropdownStyles={dropdownStyles} />
  );
};
