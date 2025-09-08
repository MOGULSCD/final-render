import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConceptMotion } from "./screens/ConceptMotion/ConceptMotion";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ConceptMotion />
  </StrictMode>,
);
