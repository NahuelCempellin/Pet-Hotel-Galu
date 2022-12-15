import React from "react";
import { useSelector } from "react-redux";




export default function ReservasCard(){
    const {theme}= useSelector(state=> state);
    const reserva= [
       { 
           titulo: 'Reserva 1',
           nombre_mascota: 'Pochi',
           fecha_ingreso: '15/12/2022',
           fecha_salida:'20/12/2022',
           habitacion:'3'
        
    },
     {   
            titulo: 'Reserva 2',
           nombre_mascota: 'Sora',
           fecha_ingreso: '15/12/2022',
           fecha_salida:'20/12/2022',
           habitacion:'3'
        
    },
      { 
            titulo: 'Reserva 3',
           nombre_mascota: 'Kalu',
           fecha_ingreso: '15/12/2022',
           fecha_salida:'20/12/2022',
           habitacion:'3'
    },
    { 
        titulo: 'Reserva 4',
       nombre_mascota: 'Kalu',
       fecha_ingreso: '15/12/2022',
       fecha_salida:'20/12/2022',
       habitacion:'3'
},
{ 
    titulo: 'Reserva 5',
   nombre_mascota: 'Kalu',
   fecha_ingreso: '15/12/2022',
   fecha_salida:'20/12/2022',
   habitacion:'3'
}
    ]
    return(
      
            <div className="flex flex-col items-center justify-center w-1/4">
                <h2 className={` text-xl mb-4 ${theme? "text-blue-900" : "text-zinc-50"}`}>Reservas que has realizado</h2>
                <hr className={`border-1 ${theme?"border-blue-900" :"border-white"} w-3/4 mb-5`}/>
                    <div className={`overflow-y-auto w-60  h-80  ${theme? "text-blue-900" : "text-zinc-50"}`}>
                        {
                            reserva.map((res,i)=> {
                                return(
                                    <div key={i} className={'border-t border-b border-orange-500 shadow p-1 flex flex-col mb-1 mt-1'}>
                                        <h3 className="">{res.titulo}</h3>
                                        <div className="flex items-center justify-around">
                                        <p>{res.nombre_mascota}</p>
                                        <p className="flex items-center justify-center text-orange-500">Habitacion: {res.habitacion}</p>
                                        </div>
                                        <div className={`flex items-center border-t ${theme? 'border-blue-900' : "border-white"} mt-1 p-1 justify-center`}>
                                        <p className="text-sm">{`${res.fecha_ingreso} - ${res.fecha_salida}` }</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="mt-3 w-60 flex justify-end">
                        <button className="p-2 text-white bg-orange-500 rounded-lg">ver mas reservas</button>
                    </div>
                    
            </div>
      
    )
}