"use client";

import { Toaster as RadToaster } from "sonner";

export function Toaster() {
  return (
    <RadToaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "hsl(var(--primary))",
          color: "hsl(var(--secondary))",
          border: "1px solid hsl(var(--secondary))",
        },
      }}
    />
  );
}
