import React from "react";  
import { useSelector } from "react-redux";
import ReservasCard from "../cardsReservas/card-reservas";

export default function StreamCard(){
    const{theme}= useSelector(state=> state)
    const ofertas=[
        {
            Oferta: 'Oferta 1',
            Habitacion: 'Habitacion 1',
            Desde: '15/12/2022',
            Hasta: '20/12/2022',
            precio:'$250 USD'
        },
        {
            Oferta: 'Oferta 2',
            Habitacion: 'Habitacion 2',
            Desde: '20/12/2022',
            Hasta: '25/12/2022',
            precio:'$250 USD'
        },
        {
            Oferta: 'Oferta 3',
            Habitacion: 'Habitacion 3',
            Desde: '25/12/2022',
            Hasta: '30/12/2022',
            precio:'$250 USD'
        },
        {
            Oferta: 'Oferta 4',
            Habitacion: 'Habitacion 4',
            Desde: '2/1/2023',
            Hasta: '15/1/2023',
            precio:'$250 USD'
        },
    ]
    return(
        <div className="flex flex-col items-center justify-center w-1/2 mt-[-80px] max-[700px]:w-full">
        <h2 className={`mt-10 text-xl mb-4 ${theme? "text-blue-900" : "text-zinc-50"}`}>Ofertas de tiempo limitado!!</h2>
        <hr className={`w-1/4 border-1 ${theme? 'border-blue-900' : 'border-white' }`}/>

        <div className={`overflow-y-auto w-full h-80 mt-3 ${theme? "text-blue-900" : "text-zinc-50"}`}>
            {
                ofertas.map((oferta,i)=>{
                    return(
                        <div key={i} className={`border-b border-t ${theme? "border-blue-900" : "border-orange-500"} w-full mt-3 mb-3 p-4`}>
                            <div>
                            <h2 className="text-orange-500 text-xl mt-3">{oferta.Oferta}</h2>
                            </div>
                            <p>{oferta.Habitacion}</p>
                            <div className="flex  w-96 items-center justify-around">
                            <p>Desde: {oferta.Desde}</p>
                            <p>Hasta: {oferta.Hasta}</p>
                            </div>
                            <div className={`w-full border-t ${theme?"border-blue-900":"border-white"} p-4 mt-2 flex items-center justify-end`}>
                            <p className="text-orange-500 text-xl">{oferta.precio}</p>
                            </div>

                            <div className={`mb-2 mt-2 flex items-center  justify-end border-t ${theme?"border-blue-900":"border-white"} p-2`}>
                                <button className={`bg-orange-500 text-white px-2 rounded-lg`}>Reservar</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}