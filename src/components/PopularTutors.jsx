import React from 'react'
import TutorSwiper from './TutorSwiper'
import Categories from './Categories'


function PopularTutors() {
  return (
    <div className=' mt-20 w-full flex flex-col  gap-10'>
     <div className=' flex flex-col md:flex-row lg:flex-row justify-around gap-5 text-center items-center'>
      <h1 className=' text-2xl font-bold font-Koho'>Popular Tutors</h1>
 <div className=' w-1/2'>
 <p className=' font-Koho '>Let’s join our best classes with our famous 
instructor and institutes</p>
 </div>
<img src="./images/Frame (4).png" alt="" />
     </div>
  <div className=' w-full h-full'>
     <TutorSwiper/>
  </div>

  <div className=' overflow-hidden flex  justify-around mb-5 items-center'>
    <img className=' w-10 h-10 md:w-20 md:h-20 lg:w-20 lg:h-20 ' src="./images/Ellipse 118.png" alt="" />
    <button className='p-2 md:p-4 lg:p-4 rounded-full border font-semibold'>Explore Course</button>
    <img className=' w-8 h-8 md:w-14 md:h-14 lg:w-14 lg:h-14 '  src="./images/Star 7.png" alt="" />
  </div>
    </div>
  )
}

export default PopularTutors