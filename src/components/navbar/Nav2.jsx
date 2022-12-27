import React,{useState} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from '../../assets/galu-logo.png'
import{MdNotifications} from 'react-icons/md'
import ThemeSwitch from "./theme";
import PopUp from "../popup/popUp";

export default function Nav2(){
    const{theme}= useSelector(state=> state)
    const[popup,setPopup]=useState(false)
    
    return(
        <div className="border-red-800 flex w-full items-center justify-between p-3">
            <div className="h-16 w-32  ml-8">
                <Link to={'/'}>
                <img  alt="galu" src={Logo} className='w-full'/>
                </Link>
            </div>

            
            <div className="w-2/4 flex justify-around mr-8" >
            <ThemeSwitch/>
            <Link to='/home'>
            <p className={theme? "text-blue-900" : "text-zinc-50"}>Home</p>
            </Link>
            <Link to='/stream'>
            <p className={theme? "text-blue-900" : "text-zinc-50"}>Stream</p>
            </Link>
            <Link to='/reservas'>
            <p className={theme? "text-blue-900" : "text-zinc-50"}>Reservas</p>
            </Link>
            <Link to='/calendario'>
            <p className={theme? "text-blue-900" : "text-zinc-50"}>Calendario</p>
            </Link>
            <button className="w-8 h-8  flex items-center justify-center">
            { theme=== false? <MdNotifications className={`${!popup?'text-zinc-50': 'text-orange-500'} text-2xl`}  onClick={()=>setPopup(!popup)} /> : <MdNotifications className={`${!popup?'text-blue-900' : 'text-orange-500'} text-2xl`} onClick={()=>setPopup(!popup)}/>}
            <PopUp popup={popup}/>
            </button>
            </div>
        </div>
    )
}