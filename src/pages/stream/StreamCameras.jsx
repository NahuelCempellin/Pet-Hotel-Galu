import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useSelector } from 'react-redux'
import { Tab } from '@headlessui/react'
import ImageDog from '../../assets/land-stream-galu.png'
import { PlayCircleIcon } from '@heroicons/react/24/outline'
import Nav2 from '../../components/navbar/Nav2'
import Footer from '../../components/footer/footer'
function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Stream () {
  const{theme}= useSelector(state=> state)
  const tabs = [
    { name: 'Camara 1' },
    { name: 'Camara 2' },
    { name: 'Camara 3' }
  ]

  const handleScrollToBottom = () => {
    const element = document.getElementById('scroll-to-bottom')
    element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={`w-full h-full px-4 mx-auto ${theme ? "bg-sky-100" : "bg-gray-900"}`}>
      <Nav2/>
      {/* <Navbar/> */}
      <div className='w-[98%] h-full mx-auto '>
        {/* divide in sections */}
        <div className='w-full h-5/6  flex flex-col md:flex-row justify-center items-center  md:mt-3 border-t border-b border-orange-500 shadow-xl'>
          <div className='w-1/2 flex flex-col justify-evenly items-center'>
            <div className='w-full h-1/2 flex flex-col justify-center items-center text-center mt-16'>
              <h1 className='text-4xl text-orange-500 font-[900]'>
                Mira a tus mascotas desde cualquier lugar
              </h1>
              <p className={`text-xl ${theme? "text-blue-900" : "text-zinc-50"} m-3`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quo excepturi numquam itaque iste at aspernatur libero, tenetur sit, ea blanditiis, vitae possimus repudiandae earum velit? Dignissimos laborum at iure!
              </p>
              <div className='flex justify-center items-center w-full h-1/2 mt-5'>
                <button className='bg-none border-2 border-orange-500 rounded-full h-[50px]' onClick={() => handleScrollToBottom()}>
                  <p className={`m-3 font-bold ${theme? "text-blue-900" : "text-zinc-50"} flex flex-row justify-center items-center`}>
                    Miralos ahora <span>
                      <PlayCircleIcon className='h-6 w-6 ml-2 text-orange-500' />
                    </span>
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div className='w-1/2 flex flex-col justify-center items-center'>
          <div className='w-full h-full  md:h-1/4 flex justify-center items-center'>
              <img src={ImageDog} alt='dog' className='h-full w-full md:h-[1/4] md:w-[60%]'/>
            </div>
          </div>
        </div>
        <div className='w-full h-3/6  flex flex-col md:flex-row justify-center items-center rounded-2xl md:mt-3' id='scroll-to-bottom'>
          <div className='w-[90%]'>
            <Tab.Group>
              <Tab.List className={'flex p-1 space-x-1 rounded-lg'}>
                {tabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    className={({ selected }) =>
                      classNames(
                        'w-full py-1.5 text-sm font-medium text-white rounded-lg',
                        'focus:outline-none',
                        selected
                          ? `bg-blue-900 text-zinc-50 font-bold text-2xl`
                          : theme?"text-blue-900 bg-orange-500 font-bold text-2xl" : "text-zinc-50  font-bold text-2xl"
                      )
                    }
                  >
                    {tab.name}
                  </Tab>
                ))}
              </Tab.List>
            </Tab.Group>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
