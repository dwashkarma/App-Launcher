import React, { useRef, useState, useEffect } from "react";

export interface AppLauncherProduct {
  name: string;
  icon: string; // URL or base64
  url: string;
}

export interface AppLauncherProps {
  products: AppLauncherProduct[];
}

export const AppLauncher: React.FC<AppLauncherProps> = ({ products }) => {
  const [open, setOpen] = useState(false);
  const launcherRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click or Escape
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        launcherRef.current &&
        !launcherRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("mousedown", handleClick);
      document.addEventListener("keydown", handleKey);
    }
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <div
      ref={launcherRef}
      style={{ position: "relative", display: "inline-block" }}
    >
      {/* Launcher Icon Button */}
      <button
        aria-label="Open app launcher"
        onClick={() => setOpen((v) => !v)}
        style={{
          background: "#fff",
          borderRadius: "10%",
          width: 48,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        {/* 3x3 Dots Icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          style={{
            transform: open ? "scale(1.10)" : "scale(1)",
            transition: "transform 0.2s cubic-bezier(.4,2,.6,1)",
          }}
        >
          {[0, 1, 2].map((row) =>
            [0, 1, 2].map((col) => (
              <circle
                key={`${row}-${col}`}
                cx={6 + col * 6}
                cy={6 + row * 6}
                r={1.5}
                fill="#555"
              />
            ))
          )}
        </svg>
      </button>
      {/* Dropdown Menu */}
      {open && (
        <div
          style={{
            position: "absolute",
            maxHeight: 350,
            overflowY: "auto",
            top: 56,
            left: 0,
            zIndex: 1000,
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
            padding: 16,
            minWidth: 320,
            marginTop: 4,
            opacity: open ? 1 : 0,
            transform: open ? "translateY(0)" : "translateY(-12px)",
            transition:
              "opacity 0.25s cubic-bezier(.4,2,.6,1), transform 0.25s cubic-bezier(.4,2,.6,1)",
            pointerEvents: open ? "auto" : "none",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 10,
            }}
          >
            {products.map((product) => (
              <a
                key={product.name}
                href={product.url}
                title={product.name}
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "#222",
                  borderRadius: 8,
                  padding: 8,
                  transition: "background 0.2s",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => setOpen(false)}
              >
                <img
                  src={product.icon}
                  alt={product.name}
                  style={{
                    width: 50,
                    height: 50,
                    marginBottom: 8,

                    objectFit: "contain",
                  }}
                  loading="lazy"
                />
                <div style={{ fontSize: 14 }}>{product.name}</div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AppLauncher;
