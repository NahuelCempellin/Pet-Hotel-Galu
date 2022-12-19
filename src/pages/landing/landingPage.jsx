import React from "react";
import { useSelector } from "react-redux";
import NavLogout from "../../components/navbar/NavLogout";
import pic from '../../assets/PerriOk.png'
import Footer from "../../components/footer/footer";
import Carrousel from "../../components/carrousel/carrolusel";

export default function Landing(){
    const{theme}= useSelector(state=> state)
    return(
        <div className={`w-screen h-screeen  ${theme ? "bg-sky-100" : "bg-gray-900"}`}>
           <NavLogout/>
            <div className="flex items-center justify-around  max-[600px]:mt-20">
                <div>
                    <div className="flex mt-20 max-[400px]:flex-col">
                    <h1 className="mr-2 font-bold text-7xl text-orange-500 min-[350px]:text-5xl">Hotel</h1>
                    <h1 className="font-bold text-7xl text-blue-900 min-[350px]:text-5xl">para perros</h1>
                    </div>
                    <div>
                        <Carrousel/>
                    </div>
                    <button className="bg-orange-500 text-white text-2xl p-3 rounded-md mt-9 ml-50">See more...</button>

                </div>

                <div className="p-3 sm:hidden md:hidden lg:flex min-[350px]:hidden w-96">
                    <img alt="perri" src={pic}/>
                </div>
            </div>
            
            <Footer theme={theme}/>
        
        </div>
    )
}