import React,{useState} from "react";
import NavLogout from "../../components/navbar/NavLogout";
import pic from '../../assets/PerriOk.png'
import Footer from "../../components/footer/footer";
import Carrousel from "../../components/carrousel/carrolusel";

export default function Landing(){
    const[theme,setTheme]=useState(false)
    return(
        <div className={`w-screen h-screeen ${theme ? "bg-sky-100" : "bg-gray-900"}`}>
           <NavLogout theme={theme} setTheme={setTheme}/>
            <div className="flex items-center ml-10">
                <div>
                    <div className="flex mt-20">
                    <h1 className="mr-2 font-bold text-7xl text-orange-500">Hotel</h1>
                    <h1 className="font-bold text-7xl text-blue-900">de perris</h1>
                    </div>
                        <Carrousel theme={theme}/>
                    <button className="bg-orange-500 text-white text-2xl p-3 rounded-md mt-9 ml-50">See more...</button>

                </div>

                <div className="p-3">
                    <img alt="perri" src={pic}/>
                </div>
            </div>
            <Footer theme={theme}/>
        </div>
    )
}