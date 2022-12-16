import React from "react";
import { useSelector } from "react-redux";
import {FaPaw} from 'react-icons/fa'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {BiBomb} from 'react-icons/bi'
import {BsCalendar2Date} from 'react-icons/bs'

export default function PopUp({popup}){
    const {theme}= useSelector(state=> state)
    

    return(
        <div className={` absolute text-white mt-[25.5rem]  border-b border-l shadow w-64 mr-64 h-96 ${theme ? "bg-sky-100" : "bg-gray-900"} ${theme ? "border-orange-500" : "border-white"} ${popup === true ? "flex flex-col items-center justify-around" : "hidden"}`}>
            <div className="border-b border-orange-500 w-[80%] flex items-center p-2.5">
            <h2 className={`${theme? "text-blue-900" : "text-zinc-50"} text-lg p-1 `}>Nombre de usuario </h2>
            <FaPaw className={theme? "text-blue-900" : "text-zinc-50"}/>
            </div>
            <div className="border-b border-orange-500 w-[80%] flex items-center p-2.5">
            <h2 className={`${theme? "text-blue-900" : "text-zinc-50"} text-lg p-1 `}>Reserva</h2>
            <AiOutlineClockCircle className={theme? "text-blue-900" : "text-zinc-50"}/>
            </div>
            <div className="border-b border-orange-500 w-[80%] flex items-center p-2.5">
            <h2 className={`${theme? "text-blue-900" : "text-zinc-50"} text-lg p-1 `}>Ofertas</h2>
            <BiBomb className={theme? "text-blue-900" : "text-zinc-50"}/>
            </div>
            <div className="border-b border-orange-500 w-[80%] flex items-center p-2.5">
            <h2 className={`${theme? "text-blue-900" : "text-zinc-50"} text-lg p-1 `}>Calendario</h2>
            <BsCalendar2Date className={theme? "text-blue-900" : "text-zinc-50"}/>
            </div>
            <div className=" w-[80%] flex items-center p-2.5 flex items-center justify-center mt-3">
            <button className="bg-orange-500 w-[80%] rounded-lg text-white p-3 flex items-center justify-evenly">Ver Stream <FaPaw/></button>
            </div>
        </div>
    )
}