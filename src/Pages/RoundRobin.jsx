import React from 'react'
import img  from "../assets/images/rr.jpg"
import { Navbar } from '../Components/Navbar'
export const RoundRobin = () => {
  
  return (
    <div className='font-Gloock bg-[#19191c] text-white pb-10'>
      <Navbar/>
      
      <div className='heading p-10 text-center hover:text-red-600 duration-500 text-[50px]'>
     Round Robin Algorithm
      </div>
      {/* //we need to flex this */}
      <div className='flex gap-10'>
        <img src={img} alt="roundrobin" className='w-5/12 rounded-xl ml-10'></img>
        <div> 
          <ul className='list-disc p-8 text-[20px]'>
            <li>rst, the Procedure of the Round Robin Algorithm

<li>The Round Robin algorithm is widely used in operating systems for scheduling central processing units. The goal of the algorithm is to fairly and equitably distribute CPU time among running processes.</li> <li> The Round Robin algorithm consists of the following operations:
Put all processes that are ready to run into the ready queue. Define a time slice, also called a time quantum, which is the most processing time a task can use before being preempted.</li> For the given time slice, run the first process in the ready queue.
<li>If the process completes its execution within the time slice, it is taken out of the ready queue. The process is preempted and pushed to the end of the ready queue if it does not finish executing within the time slice.<li> It is necessary to repeat steps 3-5 until all processes in the ready queue have completed their execution.
The Round Robin algorithm ensures that all running processes are given the same amount of time on the CPU. In addition, the algorithm ensures that no single process will ever have exclusive access to the central processing unit (CPU) for too long.
</li>
            <li className='mt-6'>Round Robin Algorithm Benefits: The algorithm guarantees that no programme is given preferential treatment and that all receive the same amount of processing time.
<li>The algorithm ensures that no single task will consume excessive CPU time.</li>
            <li className='mt-6'>Some drawbacks of the Round Robin algorithm are as follows: The algorithm has a high overhead because of the need to manage a ready queue and separate time into discrete chunks. Especially when dealing with a large number of processes, this can cause overall performance to suffer. When there are many concurrently running processes, the algorithm may not function optimally. This is because there is a limited amount of time that a process can use the CPU before being preempted, which can lead to a lot of context switching and overhead. The algorithm's efficiency relies heavily on the time quantum used. There will be excessive context switching if the time quantum is too small, while prolonged CPU monopolisation by processes is possible if the time quantum is too large</li>
          </ul>
        </div>
        </div>
        {/* direct to simulator */}
      <button className='p-10 text-black border-2 border-black hover:border-white bg-red-500 hover:bg-red-700 duration-700 hover:text-white rounded-3xl text-[20px] left-3/4 relative mt-4 items-center '><a href="https://127.0.0.1/">Go to Simulation</a>
</button>








    
      </div>
  )
}
