import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StepHandler } from '../../../Redux/Actions/auth'



const Registro = () => {
    const {theme}= useSelector(state=> state)
    
    const dispatch=useDispatch()


    function HandlerStep(e){
      dispatch(StepHandler(e))
    }

  return (
    <div className='w-[100%] h-[100%] flex flex-col items-center justify-around mt-5'>
      <div className='w-[70%] max-[1000px]:w-[100%]'>
      
      <div className='flex items-center justify-between mt-2 max-[1000px]:flex-col '>

      <div className='flex flex-col max-[1000px]:w-[100%]'>
        <label>Nombre y apellido: </label>
        <input  placeholder='Nombre' className='text-black p-1 '/>
      </div>
      
      <div className='flex flex-col max-[1000px]:w-[100%]'>
        <label>Nombre de la mascota: </label>
        <input placeholder='Nombre' className='text-black p-1'/>
      </div>
      </div>

      <div className='flex items-center justify-between mt-2  max-[1000px]:flex-col'>

      <div className='flex flex-col max-[1000px]:w-[100%]'>
      
        <label>Direccion: </label>
        <input className='text-black p-1'/>
      </div>

      <div className='flex flex-col max-[1000px]:w-[100%]'>
      
        <label>Codigo postal: </label>
        <input className='text-black p-1'/>
      </div>
      </div>


      <div className='flex items-center justify-between mt-2 max-[1000px]:flex-col'>


      <div className='flex flex-col max-[1000px]:w-[100%]'>
      
        <label>Numero de telefono: </label>
        <input className='text-black p-1'/>
      </div>

      <div className='flex flex-col max-[1000px]:w-[100%]'>
      
        <label>Mail: </label>
        <input className='text-black p-1'/>
      </div>
      </div>


      <div className='flex items-center justify-between mt-2  max-[1000px]:flex-col'>

      <div className='flex flex-col max-[1000px]:w-[100%]'>
      
        <label>Fecha de ingreso: </label>
        <input type='date' className='text-black'/>
      </div>

      <div className='flex flex-col max-[1000px]:w-[100%]'>
      
        <label>Fecha de salida: </label>
        <input type='date' className='text-black'/>
      </div>
    </div>
        
      <div className='flex flex-col w-[70%] mt-5 max-[1000px]:w-[100%] max-[1000px]:ml-[1em] max-[1000px]:mt-10'>
        <label>Preferencia de habitacion: </label>
        <div className='flex items-center justify-around'>

        <div className=''>
        <p>Normal</p>
        <input type={'checkbox'}/>
        </div>
        
        <div>
        <p>Suite</p>
        <input type={'checkbox'}/>
        </div>

        <div>
        <p>Premium</p>
        <input type={'checkbox'}/>
        </div>

        </div>
      </div>
      
      </div>
      <div className='w-[90%] flex items-center justify-end mt-[-3em] max-[1000px]:mt-[5em]'>
        {/* <button className='p-2 rounded-lg bg-orange-500 w-20 text-white' onClick={()=>HandlerStep('pagos')}>Pagos</button> */}
      </div>
    </div>

  )
}

export default Registro