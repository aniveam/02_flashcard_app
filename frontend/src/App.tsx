import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { Login } from "@/pages/Login";
import { Main } from "@/pages/Main";
import { Register } from "@/pages/Register";
import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Dashboard } from "./pages/Flashcards/Dashboard";

function App() {
  const { theme } = useTheme();
  const { currentUser, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // If the user is logged in and not loading, navigate to dashboard
    if (currentUser && !loading) {
      navigate("/dashboard");
    }
  }, [currentUser, loading]);

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
            // If loading, show spinner; if user is logged in, show Dashboard; otherwise redirect to login
            loading ? (
              <div className="h-screen flex justify-center items-center bg-theme-light dark:bg-theme-dark">
                <i className="fa-solid fa-spinner text-slate-600 text-6xl animate-spin"></i>
              </div>
            ) : currentUser ? (
              <Dashboard />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
