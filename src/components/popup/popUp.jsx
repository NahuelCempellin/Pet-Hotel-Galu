import React from "react";
import { useSelector } from "react-redux";


export default function PopUp({popup}){
    const {theme}= useSelector(state=> state)


    const notificacion=[
        {
            titulo: 'Notificacion 1',
            contenido: 'Su reserva se ha realizado correctamente!',
            hora:'Hace 1 hora',

        },
        {
            titulo: 'Notificacion 2',
            contenido: 'Aproveche estas ofertas!',
            hora:'Hace 2 horas',

        },
        {
            titulo: 'Notificacion 3',
            contenido: 'Su reserva se ha realizado correctamente!',
            hora:'Hace 3 horas',
        }
    ]
    

    return(
        <div className={` absolute text-white mt-[20rem]  border-b border-l shadow w-64 mr-64 h-auto p-2 ${theme ? "bg-sky-100" : "bg-gray-900"} ${theme ? "border-orange-500" : "border-white"}  ${popup === true ? "flex flex-col items-center justify-around" : "hidden"} z-10`}>
            {
                notificacion.map((el,i)=>{
                    return(
                        <div key={i} className={`w-full h-20 flex flex-col items-start pl-2  text-sm hover:bg-gray-700 mb-4 ${theme? "text-blue-900" : "text-zinc-50"}`}>
                            {/* <p className="text-xs">{el.titulo}</p> */}
                            <p className=" flex">{el.contenido}</p>
                            <div className="w-full flex items-center justify-end border-b border-orange-500">
                            <p className="text-xs">{el.hora}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}