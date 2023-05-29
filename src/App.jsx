import { Router } from "./Router";
import "./styles/global.scss";

import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
