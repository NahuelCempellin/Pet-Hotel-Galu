import React,{useState} from "react";
import { useSelector } from "react-redux";
import {GiHamburgerMenu} from 'react-icons/gi'
import ThemeSwitch from "./theme";
import{MdNotifications} from 'react-icons/md'
import PopUp from "../popup/popUp";
import MenuResponsive from "../popup/popUpMenu";

export default function NavResponsive(){
    const{theme}=useSelector(state=> state)
    const[popup,setPopup]=useState(false)
    const[menu,setMenu]=useState(false)
    return(
        <div className="flex p-4 items-center justify-between">
            <button className="w-8 h-8  flex items-center justify-center">
            { theme=== false? <GiHamburgerMenu className={`${!menu?'text-zinc-50': 'text-orange-500'} text-2xl`}  onClick={()=>setMenu(!menu)} /> : <GiHamburgerMenu className={`${!menu?'text-blue-900' : 'text-orange-500'} text-2xl`} onClick={()=>setMenu(!menu)}/>}
            <MenuResponsive menu={menu} setMenu={setMenu}/>
            </button>
            {/* <MdNotifications className={`text-3xl ${theme? "text-blue-900" : "text-zinc-50"}`}/> */}
            <button className="w-8 h-8  flex items-center justify-center">
            { theme=== false? <MdNotifications className={`${!popup?'text-zinc-50': 'text-orange-500'} text-2xl`}  onClick={()=>setPopup(!popup)} /> : <MdNotifications className={`${!popup?'text-blue-900' : 'text-orange-500'} text-2xl`} onClick={()=>setPopup(!popup)}/>}
            <PopUp popup={popup}/>
            </button>
        </div>

    )
}