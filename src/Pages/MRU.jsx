import React from 'react'
import { Navbar } from '../Components/Navbar'
import img from "../assets/images/rr.jpg"
import MRU_sim from '../Algorithms/MRU_sim'
import { Link } from 'react-router-dom'
export const MRU = () => {
  return (
    <div>
      <Navbar />


      <div className='font-Gloock bg-[#19191c] text-white pb-10'>


        <div className='heading p-10 text-center hover:text-yellow-600 duration-500 text-[50px]'>
          MRU Algorithm
        </div>
        {/* //we need to flex this */}
        <div className='flex gap-10'>
          <img src={img} alt="MRU" className='w-5/12 rounded-xl ml-10'></img>
          <div>
            <ul className='list-disc p-8 text-[20px]'>
              <li> First, the Methods Used in the MRU Algorithm</li>
              <li className='mt-6'>In virtual memory management, the Most Recently Used (MRU) algorithm is frequently used as a page replacement algorithm. In the event of a page fault, the algorithm is programmed to swap out the most recently accessed page. The MRU algorithm can be broken down into these phases: </li>
              <li className='mt-6'>Keep track of all the pages in memory, prioritising the most recently accessed ones.
In the event of a page fault, the newly allocated page will take the place of the page that was most recently in use. </li>
              <li className='mt-6'>The list is updated so that the newly added page is at the top, reflecting the new page order. </li>
              <li className='mt-6'>The MRU algorithm is efficient in its simplicity; it keeps only the most recently used pages in memory, which improves the system's speed. </li>
              The MRU Algorithm's Benefits:
              <li className='mt-6'>Among the many advantages of the MRU algorithm are: </li>
              <li className='mt-6'>The algorithm has a high hit rate, so it remembers the pages that were visited most recently. As a result, system performance is improved and fewer page faults occur. </li>
              <li className='mt-6'>There is little overhead in putting the algorithm into practise, and it is easy to do so. Consequently, it is a viable choice for low-resource environments. </li>
              <li className='mt-6'>Applications with temporal locality, where pages that have been recently accessed are likely to be accessed again in the near future, demonstrate the MRU algorithm's effectiveness. </li>
              <li className='mt-6'>Disadvantages of the MRU Algorithm:</li>
              <li className='mt-6'>There are a number of drawbacks to the MRU algorithm. </li>
              <li className='mt-6'>The algorithm is useful only in cases where temporal locality can be proven. The algorithm's efficiency may suffer and page faults may increase in non-temporal-locality applications. </li>
              <li className='mt-6'>There is a lot of extra work for the algorithm every time a page is accessed, as it must keep track of which pages are in memory and update that list. When dealing with a large number of pages, this can cause performance issues.
Due to the algorithm's potential memory requirements for keeping the list of pages in memory, it may not work well on large systems with a large number of pages. </li>
<li className='mt-6'> A large system may also experience a performance hit due to the added work involved in maintaining the list. </li>






            
              <li className='mt-6'> Repeat the process.</li>
            </ul>
          </div>
        </div>
        {/* direct to simulator */}
        <button className='p-10 text-black border-2 border-black hover:border-white bg-yellow-500 hover:bg-yellow-700 duration-700 hover:text-white rounded-3xl text-[20px] left-3/4 relative mt-4 items-center '> <Link to='/simulation_MRU'>Go to Simulation</Link></button>
      </div>
    </div>
  )
}
