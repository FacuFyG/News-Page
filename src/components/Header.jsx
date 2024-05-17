import React from "react";
import logo from '../assets/images/logo.svg'
import Navbar from "./Navbar";


const Header =  () =>{

    return(<>
            <header className="flex place-content-between items-center mb-10">
                <img src={logo} alt="logo" />
                <Navbar></Navbar>
            </header>
    </>)
}

export default Header