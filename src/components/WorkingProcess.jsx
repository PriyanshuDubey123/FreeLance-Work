import React from 'react'

function WorkingProcess() {
  return (
    <div className=' bg-texture2 mt-10 flex flex-col gap-10 '>

        <div className=' flex justify-around items-center p-5 mt-5 max-[450px]:flex-col max-[450px]:text-center max-[450px]:gap-4'>
          <div className='  h-20 mr-5 max-[450px]:h-auto max-[450px]:m-auto '>
         <img className=' h-12 w-12' src="./images/Frame (3).png" alt="" />         
          </div>
         <h1 className=' w-1/2 max-[630px]:w-1/2 max-[822px]:w-1/3 min-[823px]:w-1/4 min-[1000px]:w-1/5   flex flex-wrap justify-center text-start text-2xl font-bold font-Koho max-[450px]:text-center'>How TutorsForum works</h1>
         <p className=' max-[450px]:w-full px-2 text-[#E1EFFF] font-Poppins text-sm w-[40%] text-[1rem] '>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</p>
         <img className=' w-16 h-16' src="./images/Video.png" alt="" />

        </div>

        <div className=' flex justify-between px-10  mb-16  max-[850px]:flex-col  '>
          <div className='  flex flex-col w-1/2  gap-4 p-2  max-[850px]:w-full '>
            <div className=' flex bg-[#364C65]  rounded-lg p-10 gap-8 max-[500px]:flex-col max-[500px]:text-center'>
                <img  className='bg-[#FAB437] max-[850px]:m-auto rounded-[100%] w-20 h-20 p-2   ' src="./images/icon 1.png" alt="" />
              <div className=' flex flex-col gap-5'>
                <h1 className=' text-2xl font-Koho font-bold'>Signup</h1>
                <p className=' text-[#E1EFFF]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
            <div className=' flex bg-[#364C65]  rounded-lg p-10 gap-8 max-[500px]:flex-col max-[500px]:text-center'>
                <img  className='bg-[#FAB437] max-[850px]:m-auto rounded-[100%] w-20 h-20 p-2   ' src="./images/icon 2.png" alt="" />
              <div className=' flex flex-col gap-5'>
                <h1 className=' text-2xl font-Koho font-bold'>Select your Course</h1>
                <p className=' text-[#E1EFFF]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
             <div className=' flex bg-[#364C65]  rounded-lg p-10 gap-8 max-[500px]:flex-col max-[500px]:text-center'>
                <img  className='bg-[#FAB437] max-[850px]:m-auto rounded-[100%] w-20 h-20 p-2   ' src="./images/icon 3.png" alt="" />
              <div className=' flex flex-col gap-5'>
                <h1 className=' text-2xl font-Koho font-bold'>Select Payment</h1>
                <p className=' text-[#E1EFFF]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
          <div className=' w-1/2  flex justify-center   items-center  max-[850px]:w-full max-[850px]:mt-12'>
            <img className='  h-[80vh]  max-[500px]:h-[60vh]  ' src="./images/Frame (5).png" alt="" />
          </div>
        </div>

    </div>
  )
}

export default WorkingProcess