import React from 'react'
import Swiper from './Swiper'
import CoverFlowSwiper from './CoverFlowSwiper'

function ClientReview() {
  return (
    <div className='  bg-texture2 w-[80%] m-auto  rounded-lg flex justify-center items-center max-[684px]:mt-5'>


      <div className=' w-full flex flex-col items-center gap-5 p-10 text-center px-20 max-[500px]:px-5 '>
        
        <h2 className=' text-2xl font-Koho font-bold'>What our client’s say</h2>
        <img className=' h-12 w-12' src="./images/Frame (7).png" alt="" />
        <p className='  font-Poppins  text-[#E1EFFF] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ipsum dui. Donec dapibus turpis aliquam dictum porta. Duis pellentesque neque ac orci pulvinar placerat. Ut nec arcu sit amet elit posuere dapibus</p>
        <h2></h2>
        <div className=' w-full flex items-center justify-center'>
            <CoverFlowSwiper/>
        </div>
      </div>

    </div>
  )
}

export default ClientReview