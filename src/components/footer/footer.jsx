import React from "react";
import { useSelector } from "react-redux";
import{GrFacebookOption} from 'react-icons/gr'
import {FaInstagram} from 'react-icons/fa'
import {CiTwitter} from 'react-icons/ci'


export default function Footer(){
    const{theme}=useSelector(state=>state)
    
    return(
        <div className="mt-36 items-center w-full"> 
            <hr className={` ${theme? "border-blue-900" : "border-orange-500"} w-11/12 ml-8`}/>

            <div className="w-1/4 h-20 flex items-center justify-around">
                <a className={`border w-8 h-8 ${theme? "border-blue-900" : 'border-orange-500'} flex items-center justify-center rounded-full`}><GrFacebookOption className={theme? "text-blue-900" : "text-zinc-50"}/></a>
                <a className={`border w-8 h-8 items-center justify-center ${theme? "border-blue-900" : 'border-orange-500'} flex items-center justify-center rounded-full`} ><FaInstagram className={theme? "text-blue-900" : "text-zinc-50"}/></a>
                <a className={`border w-8 h-8 items-center justify-center ${theme? "border-blue-900" : 'border-orange-500'} flex items-center justify-center rounded-full`}><CiTwitter className={theme? "text-blue-900" : "text-zinc-50"}/></a>
            </div>

                {/* <p className={theme? "text-blue-900" : "text-zinc-50"}>©Galo pequeñas huellitas| All Rights Reserved</p> */}
            <div>
            </div>
        </div>
    )
}