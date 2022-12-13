import React from "react";
import {BsMoonStarsFill,BsSun} from 'react-icons/bs'


export default function ThemeSwitch({theme,setTheme}){
    
    return(
        <div>
            <button onClick={()=>setTheme(!theme)}>
                {
                    theme=== false? <BsMoonStarsFill className="text-orange-500 text-2xl"/> : <BsSun className="text-blue-900 text-2xl"/>
                }
            </button>
        </div>
    )
}