import { SIGN_IN, SIGN_UP } from '../Actions/auth'
const userLocal = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: userLocal || {}
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
    default:
      return {
        ...state
      }
  }
}
