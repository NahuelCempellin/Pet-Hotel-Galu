import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from '../../assets/galu-logo.png'
import DLogo from '../../assets/GALUNARANJA.png'
import ThemeSwitch from "./theme";

export default function NavLogout(){
    const{theme}= useSelector(state=> state)
    return(
        <div className="border-red-800 flex w-full items-center justify-between p-3">
            <div className="h-16 w-32  ml-8 max-[600px]:hidden">
                <Link to={'/'}>
                <img  alt="galu" src={theme? Logo : DLogo} className='w-full'/>
                </Link>
            </div>

            
            <div className="w-1/4 flex justify-around mr-8 max-[700px]:w-full" >
            <ThemeSwitch/>
            <Link to='/'>
            <p className={theme? "text-blue-900" : "text-zinc-50"}>Ingresar</p>
            </Link>
            <Link to='/register'>
            <p className={theme? "text-blue-900" : "text-zinc-50"}>Registrarse</p>
            </Link>
            </div>
        </div>
    )
}