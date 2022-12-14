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
          <p>See the activities of your pets from your cell phone</p>
            </div>
        </li>
        <li className="anim2">
        <div className="li-container">
        <div className="item-box">
                <BsClockHistory/>
            </div>
          <p>24 hour attention to our guests</p>
        </div>
        </li>
        <li className="anim3">
            <div className="li-container">
            <div className="item-box">
                <GiDogBowl/>
            </div>
          <p>Walks, meals, custom diets, recreational games and more!</p>
            </div>
        </li>
        <li className="anim4">
            <div className="li-container">
            <div className="item-box">
                <CiBaseball/>
            </div>
          <p >Interactive games and activities with other guests</p>
            </div>
        </li>
        <li className="anim5">
            <div className="li-container">
            <div className="item-box">
                <FaSwimmingPool/>
            </div>
          <p>Dog bath, spa, pool and much more!</p>
            </div>
        </li>
      </ul>
    </div>
  </div>
</div>
        </div>
    )
}