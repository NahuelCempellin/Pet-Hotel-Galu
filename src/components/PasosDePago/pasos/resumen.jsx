import React from 'react'
import { useDispatch } from 'react-redux'
import { StepHandler } from '../../../Redux/Actions/auth'

const Resumen = () => {
  const dispatch= useDispatch()
  

  function HandlerStep(e){
    dispatch(StepHandler(e))
  }

  return (
    <div className='w-[100%] h-[100%] flex flex-col items-center justify-around mt-5'>

      <div className='flex flex-col items-center  w-[80%] h-[80%] overflow-y-auto'>
        <div className=' w-[100%] p-2 flex items-center justify-between max-[1000px]:flex-col max-[1000px]:items-start'>
          <label className='text-orange-500'>Nombre y apellido:</label>
          <p>Nahuel Cempellin</p>
        </div>
        <div className=' w-[100%] p-2 flex items-center justify-between max-[1000px]:flex-col max-[1000px]:items-start'>
          <label className='text-orange-500'>Nombre de la mascota: </label>
          <p>Sora</p>
        </div>
        <div className=' w-[100%] p-2 flex items-center justify-between max-[1000px]:flex-col max-[1000px]:items-start'>
          <label className='text-orange-500'>Direccion:</label>
          <p>Tte Gral Peron 2136</p>

        </div>
        <div className=' w-[100%] p-2 flex items-center justify-between max-[1000px]:flex-col max-[1000px]:items-start'>
          <label className='text-orange-500'>Codigo postal:</label>
          <p>C1006 CABA</p>
        </div>
        <div className=' w-[100%] p-2 flex items-center justify-between max-[1000px]:flex-col max-[1000px]:items-start'>
          <label className='text-orange-500'>Numero de telefono: </label>
          <p>223-322054</p>
        </div>
        <div className=' w-[100%] p-2 flex items-center justify-between max-[1000px]:flex-col max-[1000px]:items-start'>
          <label className='text-orange-500'>Mail: </label>
          <p>NahuelCempellin@gmail.com</p>
        </div>
        <div className=' w-[100%] p-2 flex items-center justify-between max-[1000px]:flex-col max-[1000px]:items-start'>
          <label className='text-orange-500'>Fecha de estadia: </label>
          <p>Desde 23/12/2022 hasta 23/1/2023</p>
        </div>
        <div className=' w-[100%] p-2 flex items-center justify-between max-[1000px]:flex-col max-[1000px]:items-start'>
          <label className='text-orange-500'>Habitacion:</label>
          <p>3</p>
        </div>

        <div className=' w-[100%] p-2 flex items-center justify-between max-[1000px]:flex-col max-[1000px]:items-start'>
          <label className='text-orange-500'>Tipo de habitacion:</label>
          <p>Premium</p>
        </div>

        <div className=' w-[100%] p-2 flex items-center justify-between max-[1000px]:flex-col max-[1000px]:items-start'>
          <label className='text-orange-500'>Tarjeta n°: </label>
          <p>XXXX-XXXX-XXXX-1123</p>
        </div>
      </div>

      <div  className='w-[90%] flex items-center justify-between'>
      <div>
      <button className='p-2 rounded-lg bg-orange-500 w-20 text-white' onClick={()=>HandlerStep('pagos')}>Atras</button>
      </div>

      <div>
        <button className='p-2 rounded-lg bg-orange-500 w-24 text-white' onClick={()=>HandlerStep('')}>Confirmar</button>
      </div>

      </div>
    </div>
  )
}

export default Resumen