import React from "react";
import { useSelector } from "react-redux";
import PasosContainer from "./pasos/pasosContainer";



export default function PasosDePago(){
    const{theme}= useSelector(state=> state)
    const{step}=useSelector(state=> state)
   
    return(
        <div className={`${theme? "text-blue-900" : "text-zinc-50"} ${theme? 'border border-blue-900' : 'border'} border rounded-lg w-[60%] h-[80vh] flex flex-col items-center justify-center max-[1000px]:w-[80%] max-[1000px]:h-[150vh] max-[1000px]:mb-[5em]`}>
            <div className={"w-[70%] flex items-center justify-around p-4 border-b border-orange-500 max-[1000px]:w-[100%]"}>
            <div className="flex flex-col items-center">
            <div className={`border w-[3rem] h-[3rem] flex items-center justify-center rounded-full ${step=== 'registro'? 'bg-orange-500 text-white' : 'bg-transparent'} ${theme? 'border border-blue-900' : 'border'}`}>1</div>
            <p>Registro</p>
            </div>
             <hr className={`w-[20%] ${theme? "border-blue-900" : "border-white"}`}/>
            <div className="flex flex-col items-center">
            <div className={`border w-[3rem] h-[3rem] flex items-center justify-center rounded-full ${step=== 'pagos'? 'bg-orange-500 text-white' : 'bg-transparent'} ${theme? 'border border-blue-900' : 'border'}`}>2</div>
            <p>Pagos</p>
            </div>
            <hr className={`w-[20%] ${theme? "border-blue-900" : "border-white"}`}/>
            <div className="flex flex-col items-center">
            <div className={`border w-[3rem] h-[3rem] flex items-center justify-center rounded-full ${step=== 'resumen'? 'bg-orange-500 text-white' : 'bg-transparent'} ${theme? 'border border-blue-900' : 'border'}`}>3</div>
             <p>Resumen</p>
            </div>
            </div>
                <div className="w-[90%] h-[70%] mt-3 ">
                   <PasosContainer/>
                </div>
        </div>
    )
}