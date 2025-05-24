import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./styles/__global.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="app-container">
      <Header />
      <main className="main-content">
        <h1>Bienvenue sur notre site</h1>
        <p>Contenu principal de la page.</p>

      </main>
      <Footer />
    </div>
  </StrictMode>
);
