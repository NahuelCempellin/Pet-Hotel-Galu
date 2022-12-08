import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Tab } from '@headlessui/react'
import ImageDog from '../../assets/land-stream-galu.png'
import { PlayCircleIcon } from '@heroicons/react/24/outline'
function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Stream () {
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
    <div className='w-full h-screen mx-auto bg-white'>
      <Navbar />
      <div className='w-[98%] h-full mx-auto bg-white'>
        {/* divide in sections */}
        <div className='w-full h-5/6 bg-[#fceed3] flex flex-col md:flex-row justify-center items-center rounded-2xl md:mt-3 border-2 border-[#2a5879] shadow-xl'>
          <div className='w-1/2 flex flex-col justify-evenly items-center'>
            <div className='w-full h-1/2 flex flex-col justify-center items-center text-center mt-16'>
              <h1 className='text-4xl text-[#002a48] font-[900]'>
                Mira a tus mascotas desde cualquier lugar
              </h1>
              <p className='text-xl text-[#002a48] m-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quo excepturi numquam itaque iste at aspernatur libero, tenetur sit, ea blanditiis, vitae possimus repudiandae earum velit? Dignissimos laborum at iure!
              </p>
              <div className='flex justify-center items-center w-full h-1/2 mt-5'>
                <button className='bg-none border-2 border-[#002a48] rounded-full h-[50px]' onClick={() => handleScrollToBottom()}>
                  <p className='m-3 font-bold text-[#002a48] flex flex-row justify-center items-center'>
                    Miralos ahora <span>
                      <PlayCircleIcon className='h-6 w-6 ml-2' />
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
        <div className='w-full h-3/6 bg-white flex flex-col md:flex-row justify-center items-center rounded-2xl md:mt-3' id='scroll-to-bottom'>
          <div className='w-[90%]'>
            <Tab.Group>
              <Tab.List className='flex p-1 space-x-1 bg-[#002a48] rounded-lg'>
                {tabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    className={({ selected }) =>
                      classNames(
                        'w-full py-2.5 text-sm font-medium text-white rounded-lg',
                        'focus:outline-none',
                        selected
                          ? 'bg-[#fceed3] text-[#002a48] font-bold text-2xl'
                          : 'text-[#fceed3] bg-[#002a48] font-bold text-2xl'
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
    </div>
  )
}
