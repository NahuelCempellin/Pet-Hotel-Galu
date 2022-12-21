import React from "react";
import { useSelector } from "react-redux";


export default function PasosDePago(){
    const{theme}= useSelector(state=> state)
    return(
        <div className={`${theme? "text-blue-900" : "text-zinc-50"}`}>
            <p>paso1</p>
            <p>paso2</p>
            <p>paso3</p>
        </div>
    )
}