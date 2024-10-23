import { SignOutUser, userStateListener } from "@/config/firebase";
import { User } from "firebase/auth";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children?: ReactNode;
}

export const AuthContext = createContext({
  currentUser: {} as User | null,
  loading: true,
  setCurrentUser: (_user: User) => {},
  signOut: () => {}
});

const AuthProvider = ({ children }: Props): React.ReactElement => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = userStateListener(user => {
      if (user) {
        setCurrentUser(user);
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  // As soon as setting the current user to null,
  // the user will be redirected to the home page.
  const signOut = (): void => {
    SignOutUser();
    setCurrentUser(null);
    navigate("/login");
  };

  const value = {
    currentUser,
    setCurrentUser,
    signOut,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useTheme must be used within a context provider");
  }
  return context;
};

export { AuthProvider, useAuth };
