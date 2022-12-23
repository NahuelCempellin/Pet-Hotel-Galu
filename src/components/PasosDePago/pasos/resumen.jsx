import React from 'react'
import { useDispatch } from 'react-redux'
import { StepHandler } from '../../../Redux/Actions/auth'

const Resumen = () => {
  const dispatch= useDispatch()
  

  function HandlerStep(e){
    dispatch(StepHandler(e))
  }

  return (
    <div>
      <h1>Resumen</h1>
      <div>
        <button onClick={()=>HandlerStep('pagos')}>Atras</button>
      </div>

      <div>
        <button>Realizar pago</button>
      </div>
    </div>
  )
}

export default Resumen