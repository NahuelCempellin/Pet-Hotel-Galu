import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from '../../assets/galu-logo.png'
import{MdNotifications} from 'react-icons/md'
import ThemeSwitch from "./theme";

export default function Nav2(){
    const{theme}= useSelector(state=> state)
    return(
        <div className="border-red-800 flex w-full items-center justify-between p-3">
            <div className="h-16 w-32  ml-8">
                <Link to={'/'}>
                <img  alt="galu" src={Logo} className='w-full'/>
                </Link>
            </div>

            
            <div className="w-2/4 flex justify-around mr-8" >
            <ThemeSwitch/>
            <Link to='/login'>
            <p className={theme? "text-blue-900" : "text-zinc-50"}>Home</p>
            </Link>
            <Link to='/register'>
            <p className={theme? "text-blue-900" : "text-zinc-50"}>Stream</p>
            </Link>
            <Link to='/register'>
            <p className={theme? "text-blue-900" : "text-zinc-50"}>Reservas</p>
            </Link>
            <Link to='/register'>
            <p className={theme? "text-blue-900" : "text-zinc-50"}>Calendario</p>
            </Link>
            <div className="w-8 h-8  flex items-center justify-center">
            { theme=== false? <MdNotifications className="text-zinc-50 text-2xl"/> : <MdNotifications className="text-blue-900 text-2xl"/>}
            </div>
            </div>
        </div>
    )
}