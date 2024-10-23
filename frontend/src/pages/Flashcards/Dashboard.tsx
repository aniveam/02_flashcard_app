import { AuthContext } from "@/context/AuthContext";
import { DashboardNavbar } from "@/layout/DashboardNavbar";
import { useContext } from "react";

export function Dashboard() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div>
      <DashboardNavbar />
    </div>
  );
}
