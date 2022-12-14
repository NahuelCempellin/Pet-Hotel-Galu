import { SIGN_IN, SIGN_UP,THEME } from '../Actions/auth'
const userLocal = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: userLocal || {},
  theme: false,
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
    default:
      return {
        ...state
      }
  }
}
