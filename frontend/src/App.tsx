import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme === "dark" ? "dark" : ""}`}>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
