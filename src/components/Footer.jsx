import React from 'react'
import FooterSwiper from './FooterSwiper'

function Footer() {
  return (
    <div className=' bg-[#20344A] mt-16'>
        <div>
            <FooterSwiper/>
        </div>

        <div className='flex p-10 gap-10 max-[757px]:flex-col '>

         <div className=' flex flex-col w-1/3 gap-5  max-[757px]:w-full  max-[757px]:items-center  max-[757px]:text-center'>
            <h1 className=' text-2xl font-Koho font-bold text-[#D9ECFF]'>TutorsForum</h1>
            <p className=' font-Poppins text-[#E1EFFF] text-sm'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat...</p>
            <p className='  font-Poppins text-[#E1EFFF] text-sm'>© 2023 TutorsForum - All Rights Reserved</p>
         </div>

         <div className=' flex flex-col max-[757px]:w-full  max-[757px]:items-center  max-[757px]:text-center'>
            <h1 className='text-2xl font-Koho font-bold text-[#D9ECFF]'>Quick links</h1>
           <ul className=' font-Poppins text-[#E1EFFF] text-sm flex flex-col gap-1 mt-5'>
            <li>Home</li>
            <li>Pricing</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Blog</li>
           </ul>
         </div>

         <div className=' flex flex-col max-[757px]:w-full  max-[757px]:items-center  max-[757px]:text-center'>
         <h1 className='text-2xl font-Koho font-bold text-[#D9ECFF]'>Legal</h1>
           <ul className=' font-Poppins text-[#E1EFFF] text-sm flex flex-col gap-1 mt-5'>
            <li>Terms of use</li>
            <li>Terms & conditions</li>
            <li>Privacy policy</li>
            <li>Cookie policy</li>
           </ul>
         </div>

         <div className=' flex flex-col gap-5 ml-5 max-[757px]:w-full  max-[757px]:items-center  max-[757px]:text-center max-[757px]:ml-0'>
            <h1 className='text-2xl font-Koho font-bold text-[#D9ECFF]'>Quick links</h1>
            <p className=' font-Poppins text-[#E1EFFF] text-sm'>Join over 68,000 people getting our emails</p>
            <div className=' flex gap-2 max-[450px]:flex-col max-[450px]:gap-4 max-[450px]:mt-10'>
                <input className=' max-[450px]:text-center bg-inherit border-b font-Poppins text-sm' type="text" placeholder='Enter Email' />
                <button className=' bg-[#21B573] rounded-full p-2 px-4  font-Poppins'>Subscribe</button>
            </div>
            <p className=' font-Poppins text-[#E1EFFF] text-sm'>We only send interesting and relevant emails.</p>
          </div>

        </div>
    </div>
  )
}

export default Footer