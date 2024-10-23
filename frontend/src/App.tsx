import { AuthContext } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { Login } from "@/pages/Login";
import { Main } from "@/pages/Main";
import { Register } from "@/pages/Register";
import { useContext, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Dashboard } from "./pages/Flashcards/Dashboard";

function App() {
  const { theme } = useTheme();
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div className={`app ${theme === "dark" ? "dark" : ""}`}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/login"
          element={
            currentUser ? <Navigate replace to="/dashboard" /> : <Login />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard/:deckId?"
          element={
            currentUser ? <Dashboard /> : <Navigate replace to="/login" />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
