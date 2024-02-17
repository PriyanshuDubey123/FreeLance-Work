import React from 'react'

function Achievements() {
  return (
    <div className='  max-[806px]:items-center overflow-hidden max-[806px]:flex max-[806px]:flex-col  max-[806px]:h-auto h-32 max-[806px]:gap-4  relative grid grid-cols-6 w-[100vw] mt-[38rem] max-[949px]:mt-[52rem]  max-[767px]:mt-[52rem] max-[532px]:mt-[79vh] text-[#D9ECFF]  '>
        <div className=' col-span-1 flex flex-col items-end max-[806px]:w-1/2'>
        <div className='max-[806px]:h-auto h-[70%] bg-[#354C66] w-full flex flex-col text-center justify-center items-center'>
           <h1 className=' font-bold  text-white text-2xl'>60K+</h1>
           <p className=' font-semibold '>Tutors</p>
            </div>
        </div>
        <div className=' col-span-1 flex flex-col justify-end max-[806px]:w-1/2'>
        <div className='max-[806px]:h-auto  h-[70%] bg-[#21B573] w-full flex flex-col text-center justify-center items-center'>
        <h1 className='font-bold  text-white text-2xl'>35+</h1>
           <p className=' font-semibold '>Category</p>
            </div>

        </div>
        <div className=' col-span-2  flex flex-col items-end max-[806px]:w-[100%]'>
        <div className='max-[806px]:h-auto  h-[70%] bg-[#354C66] w-full flex flex-col justify-center  text-center items-center'>

          <div className=' flex p-2 space-x-4 justify-center items-center w-full'>
          <img width="30" src="./images/Group (6).png" alt="" />
          <p className='  font-semibold'>Trustpilot</p>
          <hr className='w-24' />
          <p className='  text-white text-2xl font-bold`'>4.9</p>
          <img width="30" src="./images/Star 2.png" alt="" />
          </div>
          <div>

          </div>
           <p className=' font-semibold'>View our 1,602 reviews</p>
             </div>
        </div>
        <div className=' col-span-1 flex flex-col justify-end max-[806px]:w-1/2'>
        <div className='max-[806px]:h-auto  h-[70%] bg-[#21B573] w-full flex flex-col text-center justify-center items-center'>
        <h1 className='font-bold  text-white text-2xl'>20K+</h1>
           <p className=' font-semibold '>Professionals</p>
            </div>

        </div>
        <div className=' col-span-1 flex flex-col items-end max-[806px]:w-1/2'>
        <div className='max-[806px]:h-auto  h-[70%] bg-[#354C66] w-full flex flex-col text-center justify-center items-center'>
        <h1 className='font-bold  text-white text-2xl'>120M+</h1>
           <p className=' font-semibold '>Students</p>
            </div>
        </div>
    
    </div>
  )
}

export default Achievements