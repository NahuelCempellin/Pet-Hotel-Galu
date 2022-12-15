import React from "react";
import { useSelector } from "react-redux";
import ReservasCard from "../../components/cardsReservas/card-reservas";
import Footer from "../../components/footer/footer";
import Nav2 from "../../components/navbar/Nav2";
import StreamCard from "../../components/streamCard/stream-card";
import {FaPaw} from 'react-icons/fa'
import ofice from '../../assets/D1.jpg'


export default function Home(){
    const {theme}= useSelector(state=> state);

    return(
      
            <div className={`w-full  h-full px-4 mx-auto ${theme ? "bg-sky-100" : "bg-gray-900"}`}>
            <Nav2/>
         
            <div className="flex flex-col border-t border-orange-500">
            <h1 className={`text-4xl mt-10 ml-10 ${theme? "text-blue-900" : "text-zinc-50"}`}>Bienvenido!</h1>
            <p className={`text-sm w-1/2 ml-10 text-orange-500 ${theme? "text-blue-900" : "text-zinc-50"}`}>"No importa lo que hagas o como le trates, el amor de los perros es infinito, su cariño es inmenso y su fidelidad es incondicional."</p>
            </div>

            <div className="flex p-5 items-center justify-around">
                <ReservasCard/>
                <StreamCard/>
                
            </div>
            <div className="flex justify-end w-full">
                <button className="bg-orange-500 text-white w-60 rounded-lg flex items-center justify-center p-4">Ver Stream <FaPaw className="ml-3"/></button>
            </div>
            <Footer/>
            </div>
      
    )
}