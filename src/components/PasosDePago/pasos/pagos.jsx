import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StepHandler } from '../../../Redux/Actions/auth'
import{BsFillCreditCard2BackFill , BsFillCreditCardFill} from 'react-icons/bs'



const Pagos = () => {
 
  const dispatch=useDispatch()
  const[card,setCard]= useState('')
  const{theme}= useSelector(state=> state)
 

  function HandlerStep(e){
    dispatch(StepHandler(e))
  }


  return (
    <div className='w-[100%] h-[100%] flex flex-col items-center justify-around mt-5'>

      <div>
        <p>Selecciona el metodo de pago que quieras utilizar:</p>

        <div className='flex  justify-around mt-5'>
          <button className={`w-[40%] ${card === 'debito'? 'bg-orange-500' : 'bg-transparent'}  ${theme? "border-blue-900" : "border-white"} h-24 border p-1 flex flex-col items-center justify-around text-white`} onClick={()=>setCard('debito')}>
            <BsFillCreditCard2BackFill className={`text-4xl ${theme? "text-blue-900" : "text-white"} ${card === 'debito'&&'text-white'}`}/>
            <p className={`${theme? "text-blue-900" : "text-white"}  ${card === 'debito'&&'text-white'}`}>Tarjeta de debito</p>
          </button>
          
          <button className={`w-[40%] ${card === 'credito'? 'bg-orange-500' : 'bg-transparent'} ${theme? "border-blue-900" : "border-white"} h-24 border p-1 flex flex-col items-center justify-around text-white`} onClick={()=>setCard('credito')}>
            <BsFillCreditCardFill className={`text-4xl ${theme? "text-blue-900" : "text-white"}  ${card === 'credito'&&'text-white'}`}/>
            <p className={`${theme? "text-blue-900" : "text-white"}  ${card === 'credito'&&'text-white'}`}>Tarjeta de credito</p>
          </button>
        </div>
      </div>

      <div className='w-[100%] h-28 flex flex-col items-center justify-around'>
      <div className='w-[75%] p-1 flex flex-col max-[1000px]:w-[100%]'>
        <label>Tarjeta: </label>
         
         <select className='text-black'>
          <option>Visa</option>
          <option>Mastercard</option>
          <option>American Express</option>
         </select>
      </div>
      <div className='w-[100%] h-28 flex items-center justify-around p-1 max-[1000px]:flex-col max-[1000px]:h-32'>
        <div className='flex flex-col w-[40%] max-[1000px]:w-[100%]'>
          <label>Numero de tarjeta: </label>
          <input placeholder='xxxx-xxxxx-xxxx' className='p-1 '/>
          {/* <input placeholder='cvc'/> */}
        </div>

        <div className='flex flex-col w-[10%] max-[1000px]:w-[100%]'>
          <label>CVC:</label>
          <input className='p-1' placeholder='xxxx'/>
        </div>
      </div>
      </div>





      <div  className='w-[90%] flex items-center justify-between'>
      <div>
      <button className='p-2 rounded-lg bg-orange-500 w-20 text-white' onClick={()=>HandlerStep('registro')}>Atras</button>
      </div>

      <div>
        <button className='p-2 rounded-lg bg-orange-500 w-20 text-white' onClick={()=>HandlerStep('resumen')}>Resumen</button>
      </div>

      </div>
    </div>
  )
}

export default Pagos