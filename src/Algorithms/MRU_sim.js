import React, { useState } from 'react';
import { Navbar } from '../Components/Navbar';
import { Link } from 'react-router-dom';
export const  MRU_sim =()=> {
  
//things to do
//1) Make a function that will convert the referensce string to an array seperating the commas
//2) Take the number from the array above and map it into the the input fiels --> you will require a function here to map
//3) make a function that would display H(hit) or F(fault) at the specific id that has been created below based on the MRU algorithm
//4) Make a basic MRU algo that will be checking the previous value and accordingly map it onto the input fields
//5) if any doubts contact me







  const [pageFrames, setPageFrames] = useState([-1, -1, -1,-1]);

  // Initialize the page reference string
  const pageReferences = [1, 2, 3, 4, 1, 5, 6, 7, 1, 8, 9, 2, 1, 5, 4, 6, 7, 9, 8, 3];

  // Define a function to check if a page is present in the page frames
  function isPagePresent(page) {
    for (let i = 0; i < pageFrames.length; i++) {
      if (pageFrames[i] === page) {
        return true;
      }
    }
    return false;
  }

  // Define a function to find the most recently used page in the page frames
  function findMostRecentlyUsedPage() {
    let mostRecentlyUsedPage = -1;
    for (let i = 0; i < pageFrames.length; i++) {
      if (pageReferences.lastIndexOf(pageFrames[i]) > mostRecentlyUsedPage) {
        mostRecentlyUsedPage = pageReferences.lastIndexOf(pageFrames[i]);
      }
    }
    return mostRecentlyUsedPage;
  }

  // Iterate through the page reference string and simulate the page replacement algorithm
  for (let i = 0; i < pageReferences.length; i++) {
    const page = pageReferences[i];
    if (!isPagePresent(page)) {
      const index = findMostRecentlyUsedPage();
      pageFrames[index] = page;
    }
  }

  // Render the page frames on the webpage
  return (
    <div className=' text-white bg-[#131316] font-Gloock items-center'>
      <Navbar/>
      
      <div className="container pt-5 justify-center">
      <h2 className="text-center subheading text-[40px] p-7">Most Recently Used(MRU) Page Replacement</h2>
    </div>
    <div className="container bg-red-600 ">
      <div className="row p-2 pt-5 text-[20px] flex gap-24 justify-center ">
        {/* <!-- Total Instance Form Starts --> */}
        <div className='col-10 text-center '>
          <table className='text-center'>
           <thead>
             <tr>
              <th > MRU Chart</th>
             </tr>
            </thead>  
            <tbody>
              <tr>
              
                <td>f4</td>
                <td><input size="3" maxLength="2" id='a01' className='text-black'/></td>
                <td><input size="3" maxLength="2" id='a02' className='text-black'/></td>
                <td><input size="3" maxLength="2" id='a03' className='text-black'/></td>
                <td><input size="3" maxLength="2" id='a04' className='text-black'/></td>
                <td><input size="3" maxLength="2" id='a05' className='text-black'/></td>
                <td><input size="3" maxLength="2" id='a06' className='text-black'/></td>
                <td><input size="3" maxLength="2" id='a07' className='text-black'/></td>
                <td><input size="3" maxLength="2" id='a08' className='text-black'/></td>
                <td><input size="3" maxLength="2" id='a09' className='text-black'/></td>
                <td><input size="3" maxLength="2" id='a10' className='text-black'/></td>
                <td><input size="3" maxLength="2" id='a11' className='text-black'/></td>
                <td><input size="3" maxLength="2" id='a12' className='text-black'/></td>
                <td><input size="3" maxLength="2" id='a13' className='text-black'/></td>
                <td><input size="3" maxLength="2" id='a14' className='text-black'/></td>
                <td><input size="3" maxLength="2" id='a15' className='text-black'/></td>
              
              </tr>
              <tr>
              
              <td>f3</td>
              <td><input size="3" maxLength="2" id='b01' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='b02' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='b03' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='b04' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='b05' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='b06' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='b07' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='b08' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='b09' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='b10' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='b11' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='b12' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='b13' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='b14' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='b15' className='text-black'/></td>
            
            </tr>
            <tr>
              
              <td>f2</td>
              <td><input size="3" maxLength="2" id='c01' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='c02' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='c03' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='c04' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='c05' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='c06' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='c07' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='c08' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='c09' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='c10' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='c11' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='c12' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='c13' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='c14' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='c15' className='text-black'/></td>
            
            </tr>
            <tr>
              
              <td>f1</td>
              <td><input size="3" maxLength="2" id='d01' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='d02' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='d03' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='d04' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='d05' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='d06' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='d07' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='d08' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='d09' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='d10' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='d11' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='d12' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='d13' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='d14' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='d15' className='text-black'/></td>
            
            </tr>
            <tr>
              
              <td>H/F</td>
              <td><input size="3" maxLength="2" id='r01' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='r02' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='r03' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='r04' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='r05' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='r06' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='r07' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='r08' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='r09' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='r10' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='r11' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='r12' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='r13' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='r14' className='text-black'/></td>
              <td><input size="3" maxLength="2" id='r15' className='text-black'/></td>
            
            </tr>
            </tbody>
          </table>  
        </div>

        <div >
          <div>Reference String</div>
          <input id="ref" className='text-black'></input>
        </div>
         
        {/* <!-- Total Instance Form Ends --> */}
      </div>
    </div>
    <div className="container pt-5 ">
      <div className="row flex justify-center gap-28 text-[25px]">
      </div>

      {/* <!-- Algo Buttons Starts --> */}
      <div className="row m-5 text-center flex justify-center mt-10 gap-20 pb-10 bg-[#131316]">
         
        <div className="col-4">
          <button  className="btn btn-secondary bg-[#3d2929] p-4 rounded-xl" onClick={""}>Run Algorithm</button>
        </div>
        <div className="col-4">
          <button  className="btn btn-secondary bg-[#3d2a29] p-4 rounded-xl" onClick={""}>Reset Values</button>
        </div>
      </div>
      {/* <!-- Algo Buttons Ends --> */}
      
      
    </div>
      
    </div>
  );
}

 