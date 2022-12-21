import React from "react";
import { useSelector } from "react-redux";
import {BiBed} from 'react-icons/bi'


export default function TotalPago(){
    const{theme}=useSelector(state=> state)
    return(
        <div className={`${theme? "text-blue-900" : "text-zinc-50"} border w-[35%] flex flex-col h-[35rem] justify-around rounded-lg overflow-hidden`}>

            <div className="border-b border-orange-500 bg-orange-500 h-48 mt-[-3rem] flex flex-col items-center justify-around">
                <div className="flex items-center w-[60%] justify-around mr-32">
                <BiBed className="text-2xl"/>
                <h1 className="text-2xl">Total Alojamiento:</h1>
                </div>
                <h1 className="text-4xl ml-48">$558.616</h1>
            </div>
            <div className="border-b p-2 mt-[-3rem]">
            <h1>Desgloce de precio: </h1>
            <div className="w-full flex items-center justify-between p-2">
            <p>15 noches en 1 habitacion</p>
            <p>$285.063</p>
            </div>
            <div className="w-full flex items-center justify-between p-2">
            <p>Impuesto Pais</p>
            <p>$82.433</p>
            </div>
            <div className="w-full flex items-center justify-between p-2">
            <p>Cargos e impuestos</p>
            <p>$104.948</p>
            </div>
            <div className="w-full flex items-center justify-between p-2">
            <p className="text-orange-500">Codigo de descuento</p>
            <p className="text-orange-500">-$10.000</p>
            </div>
            </div>

            <div className="p-4 ">
                <p>Otros cargos a pagar en tu destino:</p>
                <p className="font-bold text-orange-500">Cargos a pagar en el hotel e informacion importante</p>
            </div>
        </div>
    )
}