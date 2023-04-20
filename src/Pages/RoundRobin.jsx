import React from 'react'
import img from "../assets/images/rr.jpg"
import { Navbar } from '../Components/Navbar'
import { Link } from 'react-router-dom'
export const RoundRobin = () => {

  return (
    <div className='font-Gloock bg-[#19191c] text-white pb-10'>
      <Navbar />

      <div className='heading p-10 text-center hover:text-red-600 duration-500 text-[50px]  '>
        Round Robin Algorithm
      </div>
      {/* //we need to flex this */}
      <div className='flex justify-center'>
      <div className='border-white border-2 w-4/5 rounded-3xl'>
      <div className='flex gap-10  '>
        <img src={img} alt="roundrobin" className='w-2/5 h-2/3 mt-14 rounded-xl ml-10'></img>
        <div>
          <ul className='list-disc p-8 text-[20px]'>
            

              <li>The Round Robin algorithm is widely used in operating systems for scheduling central processing units. The goal of the algorithm is to fairly and equitably distribute CPU time among running processes.</li>
              <li> The Round Robin algorithm consists of the following operations:
                Put all processes that are ready to run into the ready queue. Define a time slice, also called a time quantum, which is the most processing time a task can use before being preempted.</li> For the given time slice, run the first process in the ready queue.
              <li>If the process completes its execution within the time slice, it is taken out of the ready queue. The process is preempted and pushed to the end of the ready queue if it does not finish executing within the time slice. 
                <li className='mt-6'>Round Robin Algorithm Benefits: The algorithm guarantees that no programme is given preferential treatment and that all receive the same amount of processing time.</li>
                  <li>The algorithm ensures that no single task will consume excessive CPU time.</li>
                   
                </li>
                </ul>
              </div>
            </div>
            {/* direct to simulator */}

            <Link to="https://os-projects-chi.vercel.app/roundrobins" target='_blank'><button className='p-10 text-black border-2 border-black hover:border-white bg-red-500 hover:bg-red-700 duration-700 hover:text-white rounded-3xl text-[20px] left-3/4 relative mt-4 items-center mb-6 '>Go to Simulation</button></Link>
            </div>
            </div>
        </div>

        )
}
