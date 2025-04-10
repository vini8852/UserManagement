import Navbar from "./Navbar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const isLoggedIn = true; // Replace with real logic
  const handleLogin = () => console.log("Login clicked");
  const handleLogout = () => console.log("Logout clicked");

  return (
    <>
      <Navbar
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
      <main>{children}</main>
    </>
  );
}
