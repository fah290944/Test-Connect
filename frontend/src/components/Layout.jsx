import { useEffect, useState } from "react";
import { AuthContextProvider } from "../contexts/AuthContext";
import Navbar from "./Navber";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {

    const [scroll, setScroll] = useState(false);
    const [width , setWidth ] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 120){
                setScroll(true);
            } else{
                setScroll(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleMenu = () => {
            const windowWidth = window.innerWidth;
            if (windowWidth > 1200){
                setWidth(true);
            } else{
                setWidth(false);
            }
        };
        handleMenu()
        window.addEventListener('resize', handleMenu);
        return () => {
            window.removeEventListener('resize', handleMenu);
        };
    }, []);
    


    return (
        <AuthContextProvider>
            <header className="scroll-top">
                <Navbar scroll={scroll}  width={width}></Navbar>
            </header>
            <main className="main">
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </AuthContextProvider>
    )
}

export default Layout 