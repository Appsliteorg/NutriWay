import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Register service worker for PWA support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}