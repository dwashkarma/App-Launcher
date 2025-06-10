import React from "react";
import ReactDOM from "react-dom/client";
import { AppLauncher, AppLauncherProduct } from "./AppLauncher";

// Expose a global function for CDN usage
(window as any).renderAppLauncher = function ({
  elementId,
  products,
}: {
  elementId: string;
  products: AppLauncherProduct[];
}) {
  const container = document.getElementById(elementId);
  if (!container) {
    throw new Error(`Element with id '${elementId}' not found.`);
  }
  const root = ReactDOM.createRoot(container);
  root.render(<AppLauncher products={products} />);
};
