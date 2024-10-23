import { AuthContext } from "@/context/AuthContext";
import { Navbar } from "@/pages/Flashcards/Navbar";
import { useContext, useState } from "react";

export function Dashboard() {
  const { currentUser } = useContext(AuthContext);
  const [menuVisible, setMenuVisible] = useState<boolean>(true);
  const toggleMenu = () => setMenuVisible(!menuVisible);

  return (
    <div>
      <Navbar toggleMenu={toggleMenu} menuVisible={menuVisible} />
      <aside
        id="menu"
        className={`
          h-screen fixed top-0 left-0 z-40 w-64 pt-20
          bg-nav-light dark:bg-nav-dark
          transition-transform duration-300 
          ${menuVisible ? "translate-x-0" : "-translate-x-full"} 
          overflow-y-auto
        `}></aside>
    </div>
  );
}
