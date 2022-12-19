import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from '../../assets/galu-logo.png'
import {FaPlay} from 'react-icons/fa'
import {HiHome} from 'react-icons/hi'
import {BsCalendar2Date, BsBookmarkStarFill} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import Footer from "../footer/footer";
import ThemeSwitch from "../navbar/theme";


export default function MenuResponsive({menu,setMenu}){
    const{theme}=useSelector(state=> state)

    return(
        <div className={` absolute text-white mt-[50rem]  border-b border-r shadow w-80 ml-[12em] h-[100vh] ${theme ? "bg-sky-100" : "bg-gray-900"} ${theme ? "border-orange-500" : "border-white"} ${menu === true ? "flex flex-col items-center justify-around" : "hidden"}`}>
            <div className="w-[95%] flex items-center justify-between">
            <div className="h-16 w-24  ml-8 flex items-center">
                <Link to={'/'}>
                <img  alt="galu" src={Logo} className='w-full'/>
                </Link>
            </div>
            <div className="flex w-1/2 justify-around">
                <ThemeSwitch/>
                <AiOutlineClose className={`${theme? "text-blue-900" : "text-zinc-50"} text-3xl`} onClick={()=>setMenu(false)}/>
            </div>
            </div>
            <div className="border-b border-orange-500 w-[80%] flex items-center p-2.5">
            <h2 className={`${theme? "text-blue-900" : "text-zinc-50"} text-lg p-1 `}>Home </h2>
            <HiHome className={theme? "text-blue-900" : "text-zinc-50"}/>
            </div>
            <div className="border-b border-orange-500 w-[80%] flex items-center p-2.5">
            <h2 className={`${theme? "text-blue-900" : "text-zinc-50"} text-lg p-1 `}>Stream</h2>
            <FaPlay className={theme? "text-blue-900" : "text-zinc-50"}/>
            </div>
            <div className="border-b border-orange-500 w-[80%] flex items-center p-2.5">
            <h2 className={`${theme? "text-blue-900" : "text-zinc-50"} text-lg p-1 `}>Reservas</h2>
            <BsBookmarkStarFill className={theme? "text-blue-900" : "text-zinc-50"}/>
            </div>
            <div className="border-b border-orange-500 w-[80%] flex items-center p-2.5">
            <h2 className={`${theme? "text-blue-900" : "text-zinc-50"} text-lg p-1 `}>Calendario</h2>
            <BsCalendar2Date className={theme? "text-blue-900" : "text-zinc-50"}/>
            </div>
            <div className=" w-[80%] flex items-center p-2.5 flex items-center justify-center mt-3">
            </div>
        </div>
    )
}