import React from 'react'
import { useSelector } from 'react-redux'
import CalendarioComponent from '../../components/calendarioComponent/CalendarioComponent'
import Footer from '../../components/footer/footer'
import Nav2 from '../../components/navbar/Nav2'
import NavResponsive from '../../components/navbar/NavResponsive'

const Calendario = () => {
    const{theme}= useSelector(state=>state)
  return (
    <div className={`w-full  h-full min-[2000px]:h-[122vh] px-4 mx-auto ${theme ? "bg-sky-100" : "bg-gray-900"}`}>
        <div className="max-[1000px]:hidden">
            <Nav2/>
            </div>
        <div className="min-[1000px]:hidden">
                <NavResponsive/>
        </div>


        <div>
        <h1 className={`text-4xl mt-10 ml-10 ${theme? "text-blue-900" : "text-zinc-50"} max-[700px]:ml-0 max-[700px]:mb-3 `}>Calendario</h1>
        <p className={`text-sm w-1/2 ml-10 text-orange-500 ${theme? "text-blue-900" : "text-zinc-50"} border border-transparent max-[700px]:w-3/4 max-[700px]:ml-0`}>"Descubre que dias tienes disponibles para que tu mascota pueda tomarse sus merecidas vacaciones!"</p>
        </div>

        <div className=''>
        <CalendarioComponent/>
        </div>

        <Footer/>
    </div>
  )
}

export default Calendario