import React, { useState } from 'react'

function QuestionSection() {

const [open,setOpen] = useState(false);
const [arrindex,setIndex] = useState(-1);

const handleClick = (index,e)=>{
    if(e.target.id == 2){
        setOpen(true);
    }
    else
    setOpen(!open)
    setIndex(index);
}

const QNA = [{
question:"Can Conversix sync my data to my CRM?",
answer:"Every data request starts with a target foundation, you will be asked to complete a search request and provide information such as lookalike companies, industries, companies size, revenue, job titles etc."
},{
question:"How much data will I receive?",
answer:"Every data request starts with a target foundation, you will be asked to complete a search request and provide information such as lookalike companies, industries, companies size, revenue, job titles etc."
},{
question:"Can marketers use Conversix data on behalf of client?",
answer:"Every data request starts with a target foundation, you will be asked to complete a search request and provide information such as lookalike companies, industries, companies size, revenue, job titles etc."
},
{
question:"How accurate is my data?",
answer:"Every data request starts with a target foundation, you will be asked to complete a search request and provide information such as lookalike companies, industries, companies size, revenue, job titles etc."
}];

  return (
    <div className=' flex  md:mt-12 lg:mt-12 px-16 pt-16  max-[684px]:flex-col '>
        <div className=' flex flex-col w-1/3 max-[684px]:w-full'>

   <div className=' flex flex-col gap-2'>
    <p className=' font-Poppins text-[#D9ECFF]'>Frequently Asked Questions</p>
    <h1 className=' font-Koho text-2xl font-bold w-1/2'>Any Questions? Find here.</h1>
   </div>

   <div className=' flex justify-between  '>

<button className=' bg-[#FAB437] h-fit w-[10rem] p-2  justify-center font-semibold  text-black rounded-md text-center mt-20 mr-2 flex items-center'>Send Message</button>

<img className=' h-[50vh]  max-[500px]:h-[30vh] ' src="./images/Frame (6).png" alt="" />

   </div>

        </div>
        <div className='  w-full ml-10 flex flex-col gap-10 pl-16 max-[684px]:p-0 max-[684px]:m-0 max-[684px]:mt-5'>
         {QNA.map((data,index)=>{
            return(
                <>
                  <div className=' flex justify-between  items-center  '>
            <p className=' text-[#E1EFFF] font-Poppins'>{data.question}</p>
            <img  id='1' onClick={(e)=>handleClick(index,e)} className={` cursor-pointer m-2 w-6 h-[0.2rem]  ${( arrindex === index && open) ? 'block' : 'hidden'}`} src="./images/minus.png" alt="" />
             <img id='2' onClick={(e)=>handleClick(index,e)}  className={`cursor-pointer   ${(arrindex===index && open)?'hidden' : null}`} src="./images/plus.png" alt="" />
           </div>
         {open&& arrindex===index && <div>
            <p className=' font-Poppins text-[#E1EFFF]'>{data.answer}</p>
           </div>}
                </>
            )
         })}
        </div>
    </div>
  )
}

export default QuestionSection