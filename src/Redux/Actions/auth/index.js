import axios from 'axios'
import { toast } from 'react-toastify'
export const SIGN_UP = 'SIGN_UP'
export const SIGN_IN = 'SIGN_IN'
export const SIGN_OUT = 'SIGN_OUT'
export const RECOVER_PASSWORD = 'RECOVER_PASSWORD'

export function signUp (obj) {
  return (dispatch) => {
    toast.promise(axios.post('https://pethotel-production.up.railway.app/api/user/signup', obj), {
      pending: 'Cargando...',
      success: 'Usuario registrado con éxito',
      error: 'Error al registrar usuario'
    }).then((response) => {
      dispatch({ type: SIGN_UP, payload: response.data })
      setTimeout(() => {
        window.location.href = '/login'
      }, 2000)
    })// error.response.data.errors is an array of errors from the backend need to return a toast for each error
      .catch((error) => {
        console.log(error.response.data.errors)
        error.response.data.errors.map((error) => {
          return toast.error(error.msg, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          })
        })
      })
  }
}
export function signIn (obj, router) {
  return function (dispatch) {
    toast.promise(
      axios.post('https://pethotel-production.up.railway.app/api/user/signin', obj), {
        pending: 'Iniciando sesión...',
        success: 'Sesión iniciada con éxito',
        error: 'Error al iniciar sesión'
      })
      .then((res) => {
        dispatch({
          type: SIGN_IN,
          payload: res.data
        })
        localStorage.setItem('user', JSON.stringify(res.data.user))
        setTimeout(() => {
          router('/panel/admin')
        }, 1000)
      })
      .catch((err) => {
        toast.error(err)
      })
  }
}
