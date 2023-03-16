import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import {Icon} from "@iconify/react"

export const Navbar = () => {
  const [open,notOpen] = useState(false);
  const [algOpen,algNotOpen] = useState(false);
  
  const handleAlgo = () =>{
    algNotOpen(!algOpen);
  }
  const handleClickHamb = () =>{
    notOpen(!open);
    
  } 
  return (
    
    <div className='bg-[#131316] z-50 text-slate-300 font-Gloock text-centre md:flex text-center gap-20 m-0 sticky top-0 items-end'>
        <div className='navbar-menu  cursor-pointer  text-[40px] justify-between p-6 ml-10 bg-[#131316]'>
          <Link to="/">
         OS-Project
         </Link>
        </div>
        <div className="hidden md:flex justify-between p-7 ml-auto text-[20px] lg:gap-10 lg:text-[22px]  z-40 ">                  
            <div className='p-3 cursor-pointer hover:text-red-600'><Link to="/">Home</Link></div>
            <div className='p-3 cursor-pointer hover:text-red-600' onClick={handleAlgo}>Algorithms
            
    
            {/* <button id="dropdownHoverButton" data-dropdown-toggle="dropdown" data-dropdown-trigger="click" className="text-white   text-[20px]  rounded-lg   text-center flex hover:text-red-600  " type="button">Algorithms <svg class="w-4 h-4 ml-2 mt-2" aria-hidden="false" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> */}
 
 
 
            
            
            
            </div>
            <div className='p-3 cursor-pointer hover:text-red-600'><Link to="/about">About us</Link></div>
        </div>
        <div className='navbar bg-[#131316] md:hidden p-2 cursor-pointer' onClick={handleClickHamb}>
        ▼
        </div>
         <div className={`   text-[25px] absolute  w-1/5 bg-[#131316] pt-4 transition-transform duration-500 ease-in  ${algOpen ? "translate-x-[375%]  translate-y-[85%]  ": " translate-y-[-85%]  translate-x-[375%]"} `}>
            <div className='hover:text-red-600'><Link to="/roundrobin"> Round Robin</Link></div>
            <div className='hover:text-green-600'><Link to="/bankersAlgorithm"> Banker's</Link></div>
            <div className='hover:text-blue-600'> <Link to="/scan-cscan">SCAN-CSCAN</Link></div>
            <div className='hover:text-yellow-600'><Link to="/MRU">MRU</Link> </div>
            


         </div>



        <div className={` text-[25px] absolute w-full bg-[#131316]  pt-3 transition-transform duration-500 ease-in  ${open ? "translate-y-0": "translate-y-[-200%]"} `}>                  
            <div className='p-3 cursor-pointer duration-300 hover:text-red-600'><Link to="/">Home</Link></div>
            <div className='p-3 cursor-pointer duration-300 hover:text-red-600'>Algorithms</div>
            <div className='p-3 cursor-pointer duration-300 hover:text-red-600'><Link to="/about">About us</Link></div>
        </div>
    </div>  
     
  )
}
