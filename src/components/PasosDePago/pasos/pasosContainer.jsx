import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import Pagos from './pagos'
import Registro from './registro'
import Resumen from './resumen'

const PasosContainer = () => {
  const{step}= useSelector(state=> state)
  const[paso, setPaso]=useState('registro')

  

  return (
    <div className={`w-[100%] h-[100%]`}>
        {
          step === 'registro' ?
          <Registro setPaso={setPaso} paso={paso}/>
          :
          step === 'pagos' ?
          
          <Pagos setPaso={setPaso} paso={paso}/>
          :
          <Resumen setPaso={setPaso} paso={paso}/>
        }      
    </div>
  )
}

export default PasosContainer