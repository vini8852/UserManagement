import Navbar from "./Navbar";
import { ReactNode } from "react";
import { useRouter } from 'next/router';


export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const isLoggedIn = true; 
  const handleLogin = () => console.log("Login clicked");
  const handleLogout = async ()=>{

    const res = await fetch('/api/logout', {
      method: 'POST',
    });

    if(res.ok){
      router.push('/');
    }
  
  }


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
