import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/galu-logo.png'
import ThemeSwitch from "./theme";

export default function NavLogout({theme, setTheme}){
    return(
        <div className="border-red-800 flex w-full items-center justify-between p-3">
            <div className="h-16 w-32  ml-8">
                <img  alt="galu" src={Logo} className='w-full'/>
            </div>

            
            <div className="w-1/4 flex justify-around mr-8" >
            <ThemeSwitch theme={theme} setTheme={setTheme}/>
            <Link to='/login'>
            <p className={theme? "text-blue-900" : "text-zinc-50"}>Ingresar</p>
            </Link>
            <Link to='/register'>
            <p className={theme? "text-blue-900" : "text-zinc-50"}>Registrarse</p>
            </Link>
            </div>
        </div>
    )
}