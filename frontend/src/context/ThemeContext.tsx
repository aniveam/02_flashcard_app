import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext
} from "react";

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );
  const toggleTheme = () =>
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a context provider");
  }
  return context;
};

export { useTheme, ThemeProvider };
