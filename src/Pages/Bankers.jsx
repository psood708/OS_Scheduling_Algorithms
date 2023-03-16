import React from 'react'
import { Navbar } from '../Components/Navbar'
import img from "../assets/images/rr.jpg"
import { Link } from 'react-router-dom'

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
            <img src={img} alt="bankers"className='w-5/12 rounded-xl ml-10'></img>
            <div>
              <ul className='list-disc p-8 text-[20px]'>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard d only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was  </li>
                <li className='mt-6'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin pr red the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bo </li>
                <li className='mt-6'>It look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various vers</li>
              </ul>
            </div>
          </div>
          {/* direct to simulator */}
          <button className='p-10 text-black border-2 border-black hover:border-white bg-green-500 hover:bg-green-700 duration-700 hover:text-white rounded-3xl text-[20px] left-3/4 relative mt-4 items-center '><Link to="/simulation_bankers">Go to Simulation</Link></button>









        </div>



      </div>

    </div>
  )
}
