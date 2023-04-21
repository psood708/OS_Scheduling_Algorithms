import React from 'react'
import { Navbar } from '../Components/Navbar'
import img from "../assets/images/bank.jpg"
import { Link } from 'react-router-dom'
import Spinner from "react-spinkit";

export const Bankers = () => {
  return (
    <div>
      <Navbar />


      <div className='bg-[#19191c] flex justify-center pb-8'>
         
         


        <div className='font-Gloock bg-[#19191c]  text-white pb-8 border-2 border-white w-4/5 rounded-3xl '>


          <div className='heading p-10 text-center hover:text-green-600 duration-500 text-[50px]'>
            Banker's Algorithm
          </div>
          {/* //we need to flex this */}
          <div className='flex gap-10'>
           
            <div>
              <ul className='list-disc p-8 text-[20px]'>
                <li>The Banker's Algorithm is a resource allocation and deadlock avoidance algorithm used in operating systems to ensure the safe and efficient allocation of resources to processes. </li>
              
                <li className='mt-6'>The algorithm works by maintaining a record of the total number of available resources and the resources currently allocated to each process. It also maintains a record of the maximum number of resources each process can request. Using this information, the algorithm determines whether a process can request additional resources without leading to a deadlock. If the system can satisfy the request, the resources are allocated to the process, and the system continues to run. If the request cannot be satisfied without leading to a deadlock, the process is forced to wait until the resources become available.</li>
             
              </ul>
            </div>
          </div>

          {/* direct to simulator */}
          <Link to="/simulation_bankers"> <button className='p-10 text-black border-2 border-black hover:border-white bg-green-500 hover:bg-green-700 duration-700 hover:text-white rounded-3xl text-[20px] left-3/4 relative mt-2 items-center '>Go to Simulation</button></Link>









        </div>



      </div>

    </div>
  )
}
