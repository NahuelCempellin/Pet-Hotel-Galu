import React from "react";
import '../carrousel/carrousel.css'
import {FaPlay,FaSwimmingPool} from 'react-icons/fa'
import {BsClockHistory} from 'react-icons/bs'
import {GiDogBowl} from 'react-icons/gi'
import {CiBaseball} from 'react-icons/ci'



export default function Carrousel(){
    
  

    return(
        <div>
<div className="content-slider">
  <div className="slider">
    <div className="mask">
      <ul>
        <li className="anim1">
            <div className="li-container">
            <div className="item-box">
                <FaPlay/>
            </div>
          <p>Vea las actividades de tus mascotas desde su celular</p>
            </div>
        </li>
        <li className="anim2">
        <div className="li-container">
        <div className="item-box">
                <BsClockHistory/>
            </div>
          <p>Atención 24 horas a nuestros invitados.</p>
        </div>
        </li>
        <li className="anim3">
            <div className="li-container">
            <div className="item-box">
                <GiDogBowl/>
            </div>
          <p>Paseos, comidas, dietas personalizadas, juegos recreativos y más!</p>
            </div>
        </li>
        <li className="anim4">
            <div className="li-container">
            <div className="item-box">
                <CiBaseball/>
            </div>
          <p >Juegos interactivos y actividades con otros huéspedes.</p>
            </div>
        </li>
        <li className="anim5">
            <div className="li-container">
            <div className="item-box">
                <FaSwimmingPool/>
            </div>
          <p>Baño para perros, spa, piscina y mucho más!</p>
            </div>
        </li>
      </ul>
    </div>
  </div>
</div>
        </div>
    )
}