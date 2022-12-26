import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../components/footer/footer";
import Nav2 from "../../components/navbar/Nav2";
import NavResponsive from "../../components/navbar/NavResponsive";
import PasosDePago from "../../components/PasosDePago/pasosDePago";
import TotalPago from "../../components/PasosDePago/totalPago";


export default function Reservas(){
    const{theme}=useSelector(state=> state)
    return(
        <div className={`w-full  h-full px-4 mx-auto ${theme ? "bg-sky-100" : "bg-gray-900"} max-[1000px]:min-h-[300vh] min-[2000px]:h-[105vh]`}>
        <div className="max-[1000px]:hidden">
            <Nav2/>
            </div>
            <div className="min-[1000px]:hidden">
                <NavResponsive/>
            </div>

            <div className="w-[100%] h-[60vh] flex items-center flex-col border-t border-orange-500 max-[1000px]:min-h-[250vh] min-[2000px]:h-[69vh] mb-[20em]">
                <div className="w-[100%] items-center justify-start">
                <h1 className={`text-4xl mt-10 ml-10 ${theme? "text-blue-900" : "text-zinc-50"} max-[700px]:ml-0 max-[700px]:mb-3 `}>Reservas</h1>
                </div>

                <div className="flex w-[90%]  max-[1000px]:w-[120%]  max-[1000px]:justify-around items-center justify-between mt-10  max-[1000px]:flex-col max-[1000px]:min-h-[-320vh]">
                    <PasosDePago/>
                    <TotalPago/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}