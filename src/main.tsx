
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
  import "./styles/brand.css";

  // Función para inicializar la app
  function initApp() {
    const rootElement = document.getElementById("root");

    if (rootElement) {
      console.log("✅ Elemento #root encontrado, inicializando React...");
      createRoot(rootElement).render(<App />);
    } else {
      console.error("❌ No se encontró el elemento #root");
    }
  }

  // Esperar a que el DOM esté completamente cargado
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    // DOM ya está listo
    initApp();
  }
