import React from "react";
import { useSelector } from "react-redux";


export default function PasosDePago(){
    const{theme}= useSelector(state=> state)
    return(
        <div className={`${theme? "text-blue-900" : "text-zinc-50"} border rounded-lg w-[60%] h-[71vh] flex flex-col items-center justify-center`}>
            <div className="w-[70%] flex items-center justify-around p-4 border-b border-orange-500">
            <div className="flex flex-col items-center">
            <div className="border w-[3rem] h-[3rem] flex items-center justify-center rounded-full bg-orange-500">1</div>
            <p>Registro</p>
            </div>
             <hr className="w-[20%]"/>
            <div className="flex flex-col items-center">
            <div className="border w-[3rem] h-[3rem] flex items-center justify-center rounded-full hover:bg-orange-500">2</div>
            <p>Pagos</p>
            </div>
            <hr className="w-[20%]"/>
            <div className="flex flex-col items-center">
            <div className="border w-[3rem] h-[3rem] flex items-center justify-center rounded-full hover:bg-orange-500">3</div>
             <p>Resumen</p>
            </div>

            </div>
        </div>
    )
}