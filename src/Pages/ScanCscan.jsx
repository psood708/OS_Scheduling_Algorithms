import React from 'react'
import { Navbar } from '../Components/Navbar'
import img from "../assets/images/rr.jpg"
import { Link } from 'react-router-dom'
// import { CSCAN_SCAN } from '../Components/CSCAN_SCAN'

export const ScanCscan = () => {
  return (
    <div>
      <Navbar />


      <div className='bg-[#19191c] flex justify-center pb-8'>
         


        <div className='font-Gloock bg-[#19191c] h-full text-white pb-6 border-2 border-white w-4/5 rounded-3xl'>


          <div className='heading p-10 text-center hover:text-blue-600 duration-500 text-[50px]'>
            SCAN - CSCAN
          </div>
          {/* //we need to flex this */}
          <div className='flex gap-10'>
            {/* <img src={img} alt="scan-cscan" className='w-5/12 rounded-xl ml-10'></img> */}
            <div>
              <ul className='list-disc p-8 text-[20px] pb-12'>
                <li>SCAN (also known as Elevator Algorithm) works by moving the disk arm from one end of the disk to the other, serving all requests in its path in the order of their arrival. Once it reaches the end, it reverses direction and serves all the remaining requests on its way back. This algorithm is efficient when the requests are spread out evenly across the disk. </li>
                <li className='mt-6'>CSCAN (Circular SCAN) is similar to SCAN, but instead of reversing direction when it reaches the end of the disk, it immediately returns to the beginning of the disk and starts serving requests from there. This algorithm ensures that all requests are eventually serviced, even if they are at the far end of the disk. It can be more efficient than SCAN when most of the requests are located near the beginning of the disk.</li>
                <li className='mt-6'>Both algorithms aim to minimize average seek time and reduce disk head movement, but may not be optimal for certain workloads or scenarios. </li>
              </ul>
            </div>
          </div>
          {/* direct to simulator */}
          <button className='p-10 text-black border-2 border-black pb-10 hover:border-white bg-blue-500 hover:bg-blue-700 duration-700 hover:text-white rounded-3xl text-[20px] left-3/4 relative mt-1 items-center '><Link to="/simulation_cscan_scan">Go to Simulation</Link> </button>









        </div>



      </div>

    </div>
  )
}
