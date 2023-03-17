import React from 'react'
import { Navbar } from '../Components/Navbar'
import img from "../assets/images/rr.jpg"
import { Link } from 'react-router-dom'
import Spinner from "react-spinkit";

export const Bankers = () => {
  return (
    <div>
      <Navbar />


      <div>
         


        <div className='font-Gloock bg-[#19191c] text-white pb-10'>


          <div className='heading p-10 text-center hover:text-green-600 duration-500 text-[50px]'>
            Banker's Algorithm
          </div>
          {/* //we need to flex this */}
          <div className='flex gap-10'>
            <div  alt="bankers"className='w-full h-auto items-center mt-10 scale-125 rounded-xl ml-10'>
            <Spinner name="chasing-dots" className='w-full' style={{ width: 100, height: 100 }} />
      
            </div> 
            <div>
              <ul className='list-disc p-8 text-[20px]'>
                <li>The Banker's Algorithm is a resource allocation and deadlock avoidance algorithm used in operating systems to ensure the safe and efficient allocation of resources to processes. </li>
              
                <li className='mt-6'>The algorithm works by maintaining a record of the total number of available resources and the resources currently allocated to each process. It also maintains a record of the maximum number of resources each process can request. Using this information, the algorithm determines whether a process can request additional resources without leading to a deadlock. If the system can satisfy the request, the resources are allocated to the process, and the system continues to run. If the request cannot be satisfied without leading to a deadlock, the process is forced to wait until the resources become available.</li>
                <li className='mt-6'>The Banker's algorithm is widely used in modern operating systems and is considered a robust and efficient method of resource allocation and deadlock avoidance.</li>
              </ul>
            </div>
          </div>

          <div  className='heading p-10 text-center hover:text-green-600 duration-500 text-[45px]'>How it works</div>
          <div className='p-8'>
            <ul className='list-decimal p-8 text-[20px] gap-10 tracking-normal'>
              <li> The algorithm starts by taking an input of the total number of available resources and the current allocation of resources to each process.</li>
              <li>The algorithm then calculates the maximum number of resources that each process can request. This information is usually provided by the process when it is created.
</li>
              <li>The algorithm checks whether a process can request the resources it needs without leading to a deadlock. This is done by simulating the allocation of resources to the process and checking whether the resulting system will still be in a safe state, i.e., there will be no deadlock.</li>
              <li>If the system can satisfy the request, the resources are allocated to the process, and the system continues to run. If the request cannot be satisfied without leading to a deadlock, the process is forced to wait until the resources become available.
</li>
              <li>Whenever a process releases a resource, the algorithm checks whether the system is still in a safe state. If it is, the resource is deallocated, and the system continues to run. If the system is not in a safe state, the process is forced to wait until additional resources become available.
</li>
              <li>The algorithm continues to allocate and deallocate resources based on the requests of the processes until all processes have completed their tasks and released their resources.</li>
            </ul>
          </div>
          {/* direct to simulator */}
          <button className='p-10 text-black border-2 border-black hover:border-white bg-green-500 hover:bg-green-700 duration-700 hover:text-white rounded-3xl text-[20px] left-3/4 relative mt-4 items-center '><Link to="/simulation_bankers">Go to Simulation</Link></button>









        </div>



      </div>

    </div>
  )
}
