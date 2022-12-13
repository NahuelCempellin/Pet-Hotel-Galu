import React from "react";
import '../carrousel/carrousel.css'
import {FaPlay,FaSwimmingPool} from 'react-icons/fa'
import {BsClockHistory} from 'react-icons/bs'
import {GiDogBowl} from 'react-icons/gi'
import {CiBaseball} from 'react-icons/ci'


export default function Carrousel(theme){
    return(
        <div>
<div className="content-slider" style={theme=== true?{color:'#233876'} : {color: "white"} }>
  <div className="slider">
    <div className="mask">
      <ul>
        <li className="anim1">
            <div className="li-container">
            <div className="item-box">
                <FaPlay/>
            </div>
          <div className="quote">See the activities of your pets from your cell phone</div>
            </div>
        </li>
        <li className="anim2">
        <div className="li-container">
        <div className="item-box">
                <BsClockHistory/>
            </div>
          <div className="quote">24 hour attention to our guests</div>
        </div>
        </li>
        <li className="anim3">
            <div className="li-container">
            <div className="item-box">
                <GiDogBowl/>
            </div>
          <div className="quote">Walks, meals, custom diets, recreational games and more!</div>
            </div>
        </li>
        <li className="anim4">
            <div className="li-container">
            <div className="item-box">
                <CiBaseball/>
            </div>
          <div className="quote">Interactive games and activities with other guests</div>
            </div>
        </li>
        <li className="anim5">
            <div className="li-container">
            <div className="item-box">
                <FaSwimmingPool/>
            </div>
          <div className="quote">Dog bath, spa, pool and much more!</div>
            </div>
        </li>
      </ul>
    </div>
  </div>
</div>
        </div>
    )
}