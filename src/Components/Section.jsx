import React from 'react'
import {Link} from "react-router-dom";
import img from "../assets/images/disc1.png"
export const Section = () => {
  return (
    <div className='bg-[#131316] pb-24 text-white font-Gloock '>
        <div className='bg-[#131316]' >
          {/* thing 0 */}
            <div className='-z-10 lg:hidden'>
                <img src={img} alt="disk" className='lg:hidden h-4/5'/>
            </div>
            {/* thing 1 */}
              <div className='-z-0 absolute text-[40px] md:text-[60px] text-center text-white whitespace-pre-wrap bg-[#131316] bg-opacity-80 top-1/2 left-1/2 w-2/3 lg:w-full lg:bg-opacity-100 h-auto rounded-lg p-10 -translate-x-1/2 -translate-y-1/2  hover:text-red-600  md:w-4/5 lg:top-48 lg:text-centre   hover:duration-500 md:top-2/4 '>Disc Scheduling Algorithms</div>

              {/* this is for lg and above screen */}
              {/* <div className=' sm:hidden lg:absolute w-full  text-[50px] md:text-[60px] p-20   text-center text-white whitespace-pre-wrap bg-[#131316]  hover:text-red-600 top-[112px]   hover:duration-500 '>Disc Scheduling Algorithms</div> */}
              
        </div>
        {/* thing 2 */}
        <div className='flex-col text-[18px] md:text-[28px] bg-[#131316] lg:p-36 lg:mt-32  columns-2 p-5 lg:w-11/12 gap-9 lg:flex-col lg:col-span-3 lg:gap-10 lg:ml-12 '>
           <Link  to="/roundrobin"><div  className='p-9 text-center bg-red-500 bg-opacity-10 rounded-xl lg:p-2'>Round Robin </div></Link> 
            <Link to="/scan-cscan"><div  className='p-9 text-center bg-red-500 bg-opacity-10 rounded-xl lg:p-2 mt-5'>SCAN/C-SCAN</div></Link>
            <Link to="bankersAlgorithm"><div link to="/bankersAlgorithm" className='p-[37px] text-center bg-red-500 bg-opacity-10 lg:mt-6 rounded-xl lg:p-2'>Banker's Algorithm</div></Link>
            <Link to="MRU"><div link to="/MRU" className='p-9 text-center bg-red-500 bg-opacity-10 rounded-xl lg:p-2 mt-5'>MRU</div></Link>

        </div>
    </div>
  )
}
