import { render } from "react-dom";
import App from "./App";
import { ThemeProvider } from "./contexts/theme";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

render(
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
