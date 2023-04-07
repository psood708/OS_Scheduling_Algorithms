 
 
//importing necessary modules and css file
import { Navbar } from "../Components/Navbar";
import React, { useState } from "react";
import "../Algorithms/new.css";
//Defining the functional Component
export function MRU_sim()
{
    //intializing state variables using useState hooks
    const [pageRefrences,SetpageRefrences] = useState([]);
    const [Frames,SetFrames] = useState(0);
    const [componetMemoryState,SetComponentMemoryState] = useState([]);
  const [pageFaults, setPageFaults] = useState(0);
  const [color, setColor] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [tableHeading, setTableHeading] = useState(false)
  const [pageFaultParagraph, setPageFaultParagraph] = useState(false)

    //function to handle page refrence string taken as input
    const HandlePageRefrences = (event) =>{

        const refrenceString = event.target.value //converting string to array
        .split("")
        .map((reference) => parseInt(reference.trim()))
        .filter((reference) => !isNaN(reference));
        SetpageRefrences(refrenceString);
    }
    //function to handle changes in number of frames
    const HandleFrames = (event) => {

        const Frames = parseInt(event.target.value);
        SetFrames(Frames);
       SetComponentMemoryState(Array(Frames).fill(null));

    }
    //handling the simulate button
    const HandleSimulate = () =>{
        let newTableData = [];
        let pageFaults = 0;
        let componetMemoryState = Array(Frames).fill(null);
       
        //looping page refrence array
        for (let i = 0; i < pageRefrences.length; i++) {
                  const page = pageRefrences[i];

      if (!componetMemoryState.includes(page)) { //page not in frame,page fault occurs
        
        pageFaults++;
        
        
        // if there is an empty frame,page added to frame,
        if (componetMemoryState.includes(null)) {
          const index = componetMemoryState.indexOf(null);
          componetMemoryState[index] = page;     
    }
    //if all frames occupied,page with maximum distance to next occurence is replaced
    else {
        let distances = componetMemoryState.map((Frame) => {
          const remainingPages = pageRefrences.slice(i + 1);//a subarray of remaining pages
          const nextIndex = remainingPages.indexOf(Frame);
          return nextIndex === -1 ? Infinity : nextIndex;
         
        });
        const index = distances.indexOf(Math.max(...distances));
        componetMemoryState[index] = page;
      }   
      
      
}
//Adding the page,page fault count and component memory state  to table data array
newTableData.push({
    page: page,
    pageFault: pageFaults,
    memory: [...componetMemoryState],
  });


        }
//updating state variables aftter simulation
     setPageFaults(pageFaults);
    SetComponentMemoryState(componetMemoryState);
    setTableData(newTableData);
    setTableHeading(true)
    setPageFaultParagraph(true)
    }

   

return( //displaying the page
 <div className="font-Gloock bg-[#131316] text-white">
 <Navbar/>
 
<div className="Heading text-[40px] flex justify-center" ><h1>MRU Algorithm</h1></div>
<div className="flex gap-[10%]">
<div className="Frames text-[20px]">
    <label>
        Number of Frames 
        <input
          type="Number"
           value={Frames} defaultValue={1}
          onChange={HandleFrames}
        ></input>
        
      </label>
    
</div>
<div className="PageRefrences text-[20px]">
    <label>
        Reference String : 
        <input
          type="Text"
          min="1" defaultValue={1}
          onChange={HandlePageRefrences}
        ></input>
        
      </label>
    
</div>
</div>
<div className="btn bg-yellow-400 flex justify-center rounded-xl text-black hover:bg-yellow-600 duration-500 hover:text-white">
    <button onClick={HandleSimulate}>Simulate</button>
</div>
<div className="table">
<div className="table">
  {tableHeading && (
    <table className="table" id="myTable">
      
      <thead>
  <tr className="text-black">
    <th>Hit or Fault</th>
    {/* This code displays the frame numbers */}
    {pageRefrences.map((num, index) => ( //to display page refrences in table
      <th key={index}> {num}</th>//key to identify each element in the list
    ))}
    {/* <th>Page Fault</th> */}
  </tr>
</thead>
<tbody>

      
        {/* This code displays the page numbers and their corresponding frames */}
        {tableData[0].memory.map((frame, index) => (
          <tr key={index}>
            <td>Frame {index}</td>
            {tableData.map((row, rowIndex) => (
              <td key={rowIndex} >{row.memory[index]}</td>

            ))}
            {/* <td>{tableData[index].pageFaults}</td> */}
          </tr>
        ))}
      </tbody>
    </table>
  )}

<br></br>
{/* diplaying final results */}
<div className="totalRef">
  <h3>The total number of refrences are: {pageRefrences.length} </h3>
</div>
  <br></br>

  <div className="misses">
    <h3>The number of misses are: {pageFaults} </h3>
  </div>
    <br></br>
  <div className="hits">
    <h3>The number of hits are: {pageRefrences.length-pageFaults}</h3>
  </div>
  <br></br>


  <div className="hitRate">
    <h3>The Hit Rate is : {(pageRefrences.length-pageFaults)*100/pageRefrences.length} %</h3>
  </div>
  <br></br>
  <div className="missrate">
    <h3>The Miss Rate is : {(pageFaults)*100/pageRefrences.length} % </h3>
  </div>

</div>
</div>


</div>
);

}; 

export default MRU_sim;


//MRU from down below heres

// import { Navbar } from "../Components/Navbar";
// import React, { useState } from "react";
// import "../Algorithms/new.css";

// export function MRU_sim() {
//   const [pageReferences, setPageReferences] = useState([]);
//   const [frames, setFrames] = useState(0);
//   const [componentMemoryState, setComponentMemoryState] = useState([]);
//   const [pageFaults, setPageFaults] = useState(0);
//   const [color, setColor] = useState(null);
//   const [tableData, setTableData] = useState([]);
//   const [tableHeading, setTableHeading] = useState(false)
//   const [pageFaultParagraph, setPageFaultParagraph] = useState(false)

//   const handlePageReferences = (event) => {
//     const referenceString = event.target.value.split("")
//       .map((reference) => parseInt(reference.trim()))
//       .filter((reference) => !isNaN(reference));
//     setPageReferences(referenceString);
//   }

//   const handleFrames = (event) => {
//     const Frames = parseInt(event.target.value);
//     setFrames(Frames);
//     setComponentMemoryState(Array(Frames).fill(null));
//   }

//   const handleSimulate = () => {
//     let newTableData = [];
//     let pageFaults = 0;
//     let componentMemoryState = Array(frames).fill(null);

//     for (let i = 0; i < pageReferences.length; i++) {
//       const page = pageReferences[i];

//       if (!componentMemoryState.includes(page)) { // page not in frame, page fault occurs
//         pageFaults++;
        
//         if (componentMemoryState.includes(null)) { // if there is an empty frame, page added to frame
//           const index = componentMemoryState.indexOf(null);
//           componentMemoryState[index] = page;     
//         } else { // if all frames are occupied, replace the page that was most recently used
//           const index = componentMemoryState.lastIndexOf(page);
//           if (index === -1) {
//             // if the page is not already in the frame, replace the page that was most recently used
//             const mruPage = componentMemoryState.reduceRight((prev, curr, idx) => {
//               if (curr !== null && componentMemoryState.lastIndexOf(curr) > idx && componentMemoryState.lastIndexOf(curr) > componentMemoryState.lastIndexOf(prev)) {
//                 return curr;
//               } else {
//                 return prev;
//               }
//             }, componentMemoryState[0]);
//             index = componentMemoryState.lastIndexOf(mruPage);
//           }
//           componentMemoryState[index] = page;
//         }
//       }
      
//       newTableData.push({
//         page: page,
//         pageFault: pageFaults,
//         memory: [...componentMemoryState],
//       });
//     }

//     setPageFaults(pageFaults);
//     setComponentMemoryState(componentMemoryState);
//     setTableData(newTableData);
//     setTableHeading(true);
//     setPageFaultParagraph(true);
//   }

//   return (
//     <div className="font-Gloock bg-[#131316] text-white">
//       <Navbar/>
//       <div className="Heading text-[40px] flex justify-center"><h1>MRU Algorithm</h1></div>
//       <div className="flex gap-[10%]">
//         <div className="Frames text-[20px]">
//           <label>
//             Number of Frames 
//             <input
//               type="Number"
//               value={frames}
//               defaultValue={1}
//               onChange={handleFrames}
//             ></input>
//           </label>
//         </div>
//         <div className="PageRefrences text-[20px]">
//           <label>
//             Reference String: 
//             <input
//               type="Text"
//               min="1"
//               defaultValue={1}
//               onChange={handlePageReferences}
//             ></input>
//           </label>
//         </div>
//       </div>
//       <div className="btn bg-yellow-400 flex justify-center rounded-xl text-black hover:bg-yellow-600 duration-500 hover:text-white">
//      <button onClick={handleSimulate}>Simulate</button>
//  </div>
//  <div className="table">
//  <div className="table">
//  {tableHeading && (
//   <table className="table" id="myTable">
//     <thead>
//       <tr className="text-black">
//         <th>Hit or Fault</th>
//         {/* This code displays the page references */}
//         {pageReferences.map((num, index) => (
//           <th key={index}> {num}</th>
//         ))}
//       </tr>
//     </thead>
//     <tbody>
//       {/* This code displays the page numbers and their corresponding frames */}
//       {componentMemoryState.map((frame, index) => (
//         <tr key={index}>
//           <td>Frame {index}</td>
//           {tableData.map((row, rowIndex) => (
//             <td key={rowIndex} className={row.memory[index] === null ? "table-warning" : row.memory[index] === componentMemoryState[index] ? "table-success" : "table-danger"}>
//               {row.memory[index] !== null ? row.memory[index] : "-"}
//             </td>
//           ))}
//         </tr>
//       ))}
//     </tbody>
//   </table>
// )}

// <br></br>
// {/* diplaying final results */}
// <div className="totalRef">
//   <h3>The total number of refrences are: {pageReferences.length} </h3>
// </div>
//   <br></br>

//   <div className="misses">
//     <h3>The number of misses are: {pageFaults} </h3>
//   </div>
//     <br></br>
//   <div className="hits">
//     <h3>The number of hits are: {pageReferences.length-pageFaults}</h3>
//   </div>
//   <br></br>


//   <div className="hitRate">
//     <h3>The Hit Rate is : {(pageReferences.length-pageFaults)*100/pageReferences.length} %</h3>
//   </div>
//   <br></br>
//   <div className="missrate">
//     <h3>The Miss Rate is : {(pageFaults)*100/pageReferences.length} % </h3>
//   </div>

// </div>
// </div>


// </div>
// );

// }; 

// export default MRU_sim;
