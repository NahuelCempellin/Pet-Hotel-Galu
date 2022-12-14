import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Galu from '../../assets/galu-logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from '../../Redux/Actions/auth'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NavLogout from '../../components/navbar/NavLogout'
import Footer from '../../components/footer/footer'
export default function Login () {
  const dispatch = useDispatch()
  const{theme}=useSelector(state=> state)
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    if (loginForm.email === '' || loginForm.password === '') {
      return toast.error('Todos los campos son obligatorios', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    }
    dispatch(signIn(loginForm))
  }
  return (
    <>
      <div className={`w-full h-full px-4 mx-auto ${theme ? "bg-sky-100" : "bg-gray-900"}`}>
        <ToastContainer />
          <NavLogout/>
        <div className="flex items-center justify-center h-screen flex-col">
        <div className="w-full px-4 lg:w-4/12 flex flex-col justify-center ">
            {/* <img src={Galu} alt="galu logo" /> */}
          </div>
          <div className="w-full px-4 lg:w-4/12 flex flex-col justify-center bg-">
            <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg">
            <div>
                <h1 className={`text-3xl font-bold ${theme? "text-blue-900" : "text-zinc-50"} text-center mt-5`}>
                  !Bienvenido!
                </h1>
              </div>
              <div className="px-6 py-6 mb-0 rounded-t">
                <hr className={` ${theme? "border-blue-900" : "border-orange-500"}`} />
              </div>
              <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="relative w-full mb-3">
                    <label
                      className={`block mb-2 text-xs font-bold uppercase ${theme? "text-blue-900" : "text-zinc-50"}`}
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      autoComplete='on'
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300  focus:outline-none focus:ring"
                      placeholder="Email"
                      onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className={`block mb-2 text-xs font-bold uppercase ${theme? "text-blue-900" : "text-zinc-50"}`}
                      htmlFor="grid-password"
                    >
                      Contraseña
                    </label>
                    <input
                      type="password"
                      autoComplete='on'
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 focus:outline-none focus:ring"
                      placeholder="Password"
                      onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="w-5 h-5 ml-1 transition-all duration-150 ease-linear border-0 rounded form-checkbox text-white shadow"
                      />
                      <span className={`ml-2 text-sm  font-semibold ${theme? "text-blue-900" : "text-zinc-50"}`}>
                        Recuerdame
                      </span>
                    </label>
                  </div>

                  <div className="mt-6 text-center">
                    <button
                      className="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-orange-500 active:bg-[#eb6515] hover:shadow-lg focus:outline-none"
                      type="submit"
                    >
                      Iniciar Sesión
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="relative flex flex-wrap mt-6 ">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className={theme? "text-blue-900" : "text-zinc-50"}
                >
                  <small>Olvidaste tu contraseña?</small>
                </a>
              </div>
              <div className="w-1/2 text-right ">
                <Link to="/register" className={theme? "text-blue-900" : "text-zinc-50"}>
                  <small>Regístrate</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      <Footer/>
      </div>
    </>
  )
}
