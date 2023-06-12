"use client";

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          backgroundColor: "hsl(var(--accent))",
          color: "white",
        },
      }}
    />
  );
};

export default ToasterProvider;
