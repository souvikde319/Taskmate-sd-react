import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.svg' ; 
export const Header = () => {

    const [theme, setTheme] = useState("gOne");
    useEffect(() => {
        document.documentElement.removeAttribute("class");
        document.documentElement.classList.add(theme) ; 
    }, [theme]) ; 

  return (
    <header>
        <div className="logo">
            <img src={Logo} alt="taskmate logo" />
            <span>Taskmate</span>
        </div>

        <div className="themeSelector">
            <span onClick={() => setTheme("light")} className={theme === "light" ? "light activeTheme" : "light"}></span>
            <span onClick={() => setTheme("dark")} className="dark"></span>
            <span onClick={() => setTheme("gOne")} className="medium activeTheme"></span>
            <span onClick={() => setTheme("gTwo")} className="gTwo"></span>
            <span onClick={() => setTheme("gThree")} className="gThree"></span>
        </div>

    </header>
    )
}
