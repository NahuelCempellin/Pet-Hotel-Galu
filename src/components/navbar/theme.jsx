import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeHandler } from "../../Redux/Actions/auth";
import {BsMoonStarsFill,BsSun} from 'react-icons/bs'


export default function ThemeSwitch(){
    const dispatch= useDispatch();
    const {theme}= useSelector(state=> state)
   

    const handlerChange=()=>{
        dispatch(ThemeHandler())
        
    }
    
    return(
        <div>
            <button className="flex items-center p-1" onClick={()=>handlerChange()}>
                {
                    theme=== false? <BsMoonStarsFill className="text-orange-500 text-2xl"/> : <BsSun className="text-blue-900 text-2xl"/>
                }
            </button>
        </div>
    )
}