import React from 'react'
import { Navbar } from '../Components/Navbar'
import img from "../assets/images/rr.jpg"
import { Link } from 'react-router-dom'
// import { CSCAN_SCAN } from '../Components/CSCAN_SCAN'

export const ScanCscan = () => {
  return (
    <div>
      <Navbar />


      <div>
         


        <div className='font-Gloock bg-[#19191c] text-white pb-10'>


          <div className='heading p-10 text-center hover:text-blue-600 duration-500 text-[50px]'>
            SCAN - CSCAN
          </div>
          {/* //we need to flex this */}
          <div className='flex gap-10'>
            <img src={img} alt="scan-cscan" className='w-5/12 rounded-xl ml-10'></img>
            <div>
              <ul className='list-disc p-8 text-[20px]'>
                Scan Disc Sheduling Algorithm 

                <li className='mt-6'>The Scan Disk Scheduling algorithm, also known as Elevator Algorithm, is a disk scheduling algorithm used in operating systems to improve the performance of disk I/O operations. </li>

                <li className='mt-6'>The Scan algorithm works by maintaining a queue of disk access requests, which are sorted based on their block number. The algorithm then services requests by moving the disk arm in one direction (either towards the outer or inner track) until it reaches the end of the disk, at which point it reverses direction and services the remaining requests in the opposite direction. </li>
                <li className='mt-6'>This approach reduces the average seek time for disk I/O operations, as requests that are physically closer together are serviced consecutively. It also ensures that requests are serviced in a fair and efficient manner, as it prevents any one request from monopolizing the disk. </li>

<li className='mt-6'>The Scan algorithm is widely used in modern operating systems, including Linux and Windows. It is an improvement over earlier disk scheduling algorithms such as the First-Come-First-Serve and Shortest Seek Time First algorithms. </li>

<br />

Process/Implementaion of algorithm:
<li className='mt-6'>The algorithm maintains a queue of disk access requests, which are sorted based on their block number. </li>

<li className='mt-6'>The disk arm is initially positioned at one end of the disk, either the outermost track or the innermost track. </li>

<li className='mt-6'>The algorithm then services requests by moving the disk arm in one direction (towards the other end of the disk) until it reaches the end of the disk, at which point it reverses direction and services the remaining requests in the opposite direction. </li>
<li className='mt-6'>The algorithm then services requests by moving the disk arm in one direction (towards the other end of the disk) until it reaches the end of the disk, at which point it reverses direction and services the remaining requests in the opposite direction. </li>
<li className='mt-6'>The algorithm then services requests by moving the disk arm in one direction (towards the other end of the disk) until it reaches the end of the disk, at which point it reverses direction and services the remaining requests in the opposite direction. </li>

<li className='mt-6'>When the disk arm reaches the end of the disk, it reverses direction and services the remaining requests in the opposite direction. The algorithm scans the queue of requests in the opposite direction of the disk arm movement and services the requests that are located on the same side of the disk arm. </li>
<li className='mt-6'>The algorithm continues to service requests in this manner until all requests in the queue have been serviced. </li>
<li className='mt-6'>By moving the disk arm in one direction and then reversing direction when it reaches the end of the disk, the Scan algorithm ensures that requests that are physically closer together are serviced consecutively, reducing the average seek time for disk I/O operations. This approach also ensures that requests are serviced in a fair and efficient manner, as it prevents any one request from monopolizing the disk. </li>


                
              </ul>
            </div>
          </div>
          {/* direct to simulator */}
          <button className='p-10 text-black border-2 border-black hover:border-white bg-blue-500 hover:bg-blue-700 duration-700 hover:text-white rounded-3xl text-[20px] left-3/4 relative mt-4 items-center '><Link to="/simulation_cscan_scan">Go to Simulation</Link> </button>









        </div>



      </div>

    </div>
  )
}
