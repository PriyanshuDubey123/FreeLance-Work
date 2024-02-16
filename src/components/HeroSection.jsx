import React from 'react'

function HeroSection() {
  return (
    <div  className=' static flex flex-col  items-center '>

  <div className=" max-[532px]:hidden flex max-[949px]:top-72  absolute top-14 left-10">

<img  className=' w-[30rem] md:max-w-[30rem] lg:max-w-[30rem]' src="./images/Group (2).png" alt="" />
</div>
<div className=" max-[532px]:hidden max-[949px]:top-[30rem] absolute top-60 left-8 ">

<img className=' max-w-[10rem]'  src="./images/Group (3).png" alt="" />
</div>

  <div className=" max-[532px]:hidden absolute max-[949px]:top-80 top-5  lg:top-5 right-0 ">

<img  className=' w-[30rem] md:max-w-[30rem] lg:max-w-[30rem]' src="./images/Group (1).png" alt="" />
</div>
<div className=" max-[532px]:hidden absolute max-[949px]:top-[35rem] top-64 lg:top-64 right-16 ">

<img className=' max-w-[10rem]'  src="./images/Group (4).png" alt="" />
</div>

<div className=' max-[532px]:hidden md:hidden lg:hidden absolute top-[30rem] first flex justify-around w-[60%] right-5 '>
  <div >
<img width="100" src="./images/Frame.png" alt="" />
  </div>
  <div className=' flex justify-end h-20  items-end'>
<img className=' max-w-12 max-h-12' src="./images/Frame (1).png" alt="" />

  </div>
  </div>


  <div className=' max-[1026px]:mt-32 max-[767px]:mt-20 absolute mt-24  main  md:w-full lg:w-full flex flex-col justify-around items-center '>

  <div className=' hidden md:flex first lg:flex justify-between w-[70%] pl-10 ml-20'>
  <div >
<img width="100" src="./images/Frame.png" alt="" />
  </div>
  <div className=' flex justify-end h-20  items-end'>
<img className=' max-w-12 max-h-12' src="./images/Frame (1).png" alt="" />

  </div>
  </div>

  <div className=' max-[924px]:bg-contain  bg-ellipse bg-cover bg-no-repeat  backdrop-brightness-1 rounded-full  filter second text-2xl md:text-4xl lg:text-4xl font-Koho w-full md:w-[40%] lg:w-[40%] text-center tracking-tight font-bold  h-[30vh] flex justify-center items-center '>
   <p>Learn with us anywhere with <br/>the best <span  className=' relative text-yellow-300'>experts
   <img width="100" className=' absolute -bottom-[0.2rem]  right-1  ' src="./images/Vector 21.png" alt="" />
   </span> 
   <img className='inline h-8 w-8 ml-2' src="./images/Star 5.png" alt="" />
   </p>
  </div>

  <div className=' w-full third md:w-[41vw] p-1'>
  <div className=' rounded-full flex bg-[#3D4E64] w-full p-2 justify-between pl-5'>
    <input className=' max-[343px]:text-xs outline-none bg-inherit w-[70%]' type="text"  placeholder='What do you want to learn?'/>
    <button className=' rounded-full p-2 bg-[#FAB437] text-black font-semibold w-[30%]'>Explore</button>
  </div>
  </div>

  <div className=' fourth flex  justify-between w-[46%]'>
    <div className=' h-52  flex items-center'>
        
<img className=' w-8 h-8' src="./images/Group (5).png" alt="" />
    </div>
    <div className='h-52  flex items-center w-60 justify-end pb-16'>

<img className=' h-20 ' src="./images/Frame (2).png" alt="" />
    </div>

    <div className='h-52 flex items-center'>

<img src="./images/Frame (3).png" alt="" />
    </div>
  </div>


  </div>
 

    </div>
  )
}

export default HeroSection