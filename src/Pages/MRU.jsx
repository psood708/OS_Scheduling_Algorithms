import React from 'react'
import { Navbar } from '../Components/Navbar'
import img from "../assets/mru.jpg"
import MRU_sim from '../Algorithms/MRU_sim'
import { Link } from 'react-router-dom'
export const MRU = () => {
  return (
    <div>
      <Navbar />

      <div className='bg-[#19191c] flex justify-center pb-'>
      <div className='font-Gloock bg-[#19191c] text-white pb-4 border-2 border-white w-4/5 rounded-3xl'>


        <div className='heading p-10 text-center hover:text-yellow-600 duration-500 text-[50px]'>
          MRU Algorithm
        </div>
        {/* //we need to flex this */}
        <div className='flex gap-10'>
          <img src={img} alt="MRU" className='w-5/12 rounded-xl ml-10'></img>
          <div>
            <ul className='list-disc p-8 text-[20px]'>
              <li> Initialize the memory
Create a queue to hold the page numbers of the pages in memory.
Initialize the queue with the first n pages of the program.
Set the pointer to the last page in the queue.
</li>
              <li className='mt-6'> Access a new page
When a new page is accessed, search for its page number in the queue.
If the page is found in the queue, move it to the front of the queue.
If the page is not found in the queue, replace the page at the front of the queue with the new page, and move the pointer to the next page in the queue.

</li>
              <li className='mt-6'> Repeat the process
</li>
            </ul>
          </div>
        </div>
        {/* direct to simulator */}
        <Link to='/simulation_MRU'><button className='p-10 text-black border-2 border-black hover:border-white bg-yellow-500 hover:bg-yellow-700 duration-700 hover:text-white rounded-3xl text-[20px] left-3/4 relative mt-1 items-center '> Go to Simulation</button></Link>
      </div>
      </div>
    </div>
  )
}
