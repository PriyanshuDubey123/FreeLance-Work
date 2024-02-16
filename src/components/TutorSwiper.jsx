import React, { useEffect, useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import '../App.css';

// import required modules
import { Grid, Pagination } from 'swiper/modules';

export default function TutorSwiper() {


const SwiperData  = [{
  speed:25,
  color: "bg-[#24D198]",
  subject:"Chemistry",
  Name:"Nitish Kumar",
  Speciality:"Best in Chemistry",
  image1:"./images/nitishkumar 1.png",
  image2:"./images/Group 1000014906.png"
},{
  speed:25,
  color:"bg-[#7F56D9]",
  subject:"Chemistry",
  Name:"Nitish Kumar",
  Speciality:"Best in Chemistry",
  image1:"./images/nitishkumar 1.png",
  image2:"./images/Vector (3).png"
},{
  speed:16,
  color:"bg-[#00C1FF]",
  subject:"Chemistry",
  Name:"Nitish Kumar",
  Speciality:"Best in Chemistry",
  image1:"./images/nitishkumar 1.png",
  image2:"./images/Vector (1).png"
},{
  speed:16,
  color:"bg-[#FF6905]",
  subject:"Chemistry",
  Name:"Nitish Kumar",
  Speciality:"Best in Chemistry",
  image1:"./images/nitishkumar 1.png",
  image2:"./images/Group 1000014925.png"
},{
  speed:38,
  color:"bg-[#F15568]",
  subject:"Chemistry",
  Name:"Nitish Kumar",
  Speciality:"Best in Chemistry",
  image1:"./images/nitishkumar 1.png",
  image2:"./images/Vector (2).png"
},{
  speed:38,
  color:"bg-[#FAB437]",
  subject:"Chemistry",
  Name:"Nitish Kumar",
  Speciality:"Best in Chemistry",
  image1:"./images/nitishkumar 1.png",
  image2:"./images/Vector (1).png"
},{
  color:"bg-[#FAB437]",
  subject:"Chemistry",
  Name:"Nitish Kumar",
  Speciality:"Best in Chemistry",
  image1:"./images/nitishkumar 1.png",
  image2:"./images/Group 1000014925.png"
},{
  color:"bg-[#24D198]",
  subject:"Chemistry",
  Name:"Nitish Kumar",
  Speciality:"Best in Chemistry",
  image1:"./images/nitishkumar 1.png",
  image2:"./images/Group 1000014906.png"
},{
  color:"bg-[#24D198]",
  subject:"Chemistry",
  Name:"Nitish Kumar",
  Speciality:"Best in Chemistry",
  image1:"./images/nitishkumar 1.png",
  image2:"./images/Group 1000014906.png"
},{
  color:"bg-[#24D198]",
  subject:"Chemistry",
  Name:"Nitish Kumar",
  Speciality:"Best in Chemistry",
  image1:"./images/nitishkumar 1.png",
  image2:"./images/Group 1000014906.png"
}];

  return (
    <>
      <Swiper

      
        grid={
        {rows:2}
        }
        slidesPerView={3}    
       
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
        breakpoints={{
          0:{

            slidesPerView:1,
            grid:{
                rows:2
            }
          },
          // when window width is >= 640px
          498: {
           
            slidesPerView:2,
            grid:{
                rows:2
            }
          },
          // when window width is >= 768px
          768: {
            slidesPerView:3,
            grid:{
                rows:2
            }
          },
        }}
      
      >
       {
SwiperData.map((data)=>{
  return(
    <SwiperSlide className=' rounded-lg '>
        
    <div className=' flex h-1/5 justify-between  flex-wrap items-center text-center mt-2 p-2 '>
      <div className='flex gap-2 items-center w-full'>
        <div className=' flex w-full flex-col  lg:flex-row md:justify-between lg:justify-between '>

        <div className={` gap-2 flex justify-center items-center p-2 rounded-full '`}>
          <div className={` ${data.color} rounded-full p-2`}> 

    <img className=''  src="./images/Polygon 8.png" alt="" />
          </div>
    <p className=' text-[#D9ECFF] text-md  '>{data.speed}x Lesson</p>
        </div>
    <button className=' w-full md:w-auto lg:w-auto border p-2 rounded-full text-[#D9ECFF]'>Chemistry</button>
      </div>
        </div>

    </div>
   

    <div className=' flex h-1/2   w-full pb-4 gap-2 p-2 items-center mt-4  '>

    <div className=' flex flex-col justify-between py-6 px-2 w-full'>
      <h1 className=' text-[#D9ECFF] text-1xl md:text-2xl lg:text-2xl font-semibold font-Koho'>{data.Name}</h1>   
      <p className=' text-[#7B92AC] font-Koho text-sm'>{data.Speciality}</p>
    </div>
    <div className=' max-[499px]:mt-4 lg:h-full lg:w-full'>
    <img className='' src={data.image1} alt="" />
      </div>
    </div>
    <div className=' w-full items-center flex justify-center'>
      
<hr className=' w-[80%] ' />
    </div>
    <div className=' h-1/6 flex justify-between p-6 items-center'>
<button className=' bg-[#21B573] w-20 rounded-full h-8 '>Join</button>
   <img className='p-2 h-10 w-10 bg-[#ffff] rounded-full' src={data.image2} alt="" />
    </div>
    
    </SwiperSlide>

  )
})

       }
      </Swiper>
    </>
  );
}


