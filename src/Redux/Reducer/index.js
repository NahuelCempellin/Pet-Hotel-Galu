import { SIGN_IN, SIGN_UP,STEP,THEME } from '../Actions/auth'
const userLocal = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: userLocal || {},
  theme: false,
  step:'registro'
}
export default function rootReducer (state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: action.payload.user
      }
    case SIGN_UP:{
      return {
        ...state,
        user: action.payload.user
      }
    }
    case THEME:{
      
      return{
        ...state,
        theme: !state.theme

      }
    }

    case STEP:{
      return{
        ...state,
        step: action.payload
      }
    }
    default:
      return {
        ...state
      }
  }
}
