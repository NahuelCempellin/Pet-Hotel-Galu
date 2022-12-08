import React, { useState } from 'react'
import Galu from '../../assets/galu-logo.png'
import { useDispatch } from 'react-redux'
import { signUp } from '../../Redux/Actions/auth'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function Register () {
  const dispatch = useDispatch()
  const [registerForm, setRegisterForm] = useState({
    fullname: '',
    email: '',
    password: '',
    idNumber: '',
    phoneNumber: '',
    address: ''
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    if (registerForm.fullname === '' || registerForm.email === '' || registerForm.password === '' || registerForm.idNumber === '' || registerForm.phoneNumber === '' || registerForm.address === '') {
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
    dispatch(signUp(registerForm))
  }
  return (
    <>
      <div className="w-full h-full px-4 mx-auto">
      <ToastContainer/>
        <div className="flex items-center content-center justify-center h-full flex-col">
          <div className="w-full px-4 lg:w-1/4 flex flex-col justify-center">
            <img src={Galu} alt="galu logo" />
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="relative flex flex-col w-full min-w-0 mb-6  border-0 rounded-lg shadow-lg bg-[#1b3f9c]">
              <div>
                <h1 className=' text-3xl font-bold text-white text-center mt-5'>
                  Regístrate
                </h1>
              </div>
              <div className="px-6 py-6 mb-0 rounded-t">
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-white"
                      htmlFor=""
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-3 text-sm  bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600"
                      placeholder="Nombre"
                      onChange={(e) => setRegisterForm({ ...registerForm, fullname: e.target.value })}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-white"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      autoComplete='on'
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      placeholder="Email"
                      onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-white"
                      htmlFor="grid-password"
                    >
                      Contraseña
                    </label>
                    <input
                      type="password"
                      autoComplete='on'
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      placeholder="Contraseña"
                      onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                    />
                  </div>

                  <div className=" w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-white"
                    >
                      Numero de telefono
                    </label>
                    <input
                      type="number"
                      autoComplete='on'
                      className="w-full px-3 py-3 text-sm bg-white  rounded shadow"
                      placeholder="Numero de telefono"
                      onChange={(e) => setRegisterForm({ ...registerForm, phoneNumber: e.target.value })}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-white"
                      htmlFor="grid-password"
                    >
                      Cedula
                    </label>
                    <input
                      type="number"
                      autoComplete='on'
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      placeholder="Cedula"
                      onChange={(e) => setRegisterForm({ ...registerForm, idNumber: e.target.value })}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-white"
                      htmlFor="grid-password"
                    >
                      Dirección
                    </label>
                    <input
                      type="text"
                      autoComplete='on'
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      placeholder="Dirección"
                      onChange={(e) => setRegisterForm({ ...registerForm, address: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="w-5 h-5 ml-1 transition-all duration-150 ease-linear border-0 rounded form-checkbox text-blueGray-700"
                      />
                      <span className="ml-2 text-sm font-semibold text-white">
                        Acepto los terminos{' '}
                        <a
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          y condiciones
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className="mt-6 text-center">
                  <button
                      className="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-[#FA965A] active:bg-[#eb6515] hover:shadow-lg focus:outline-none"
                      type="submit"
                    >
                      Crea tu cuenta
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
