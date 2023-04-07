import { React, useState } from 'react'
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { Navbar } from '../Components/Navbar';
export const CSCAN_SCAN = () => {
    const [lb, setlb] = useState('');
    const [ub, setub] = useState('');
    const [type, setType] = useState('');
    const [reqArr, setArr] = useState("0");
    const [seekTime,setSeekTime] = useState(0);
    const[dirn,setDir] = useState("right");
    var final_seekTime ;
    const seekChange = (event)=>{
        setSeekTime(final_seekTime);
    }
    const handleArr = (event) => {
        setArr(event.target.value);
    }
    const handleType = (event) => {
        setType(event.target.value);
    }
    const handlelb = (event) => {
        setlb(parseInt(event.target.value));
    };
    const handleub = (event) => {
        setub(parseInt(event.target.value));
    };
    const handleDir = (event) => {
        setDir(event.target.value);
    };


    var head_Positions;
    // console.log(lb, ub, type, reqArr,dirn)

    const requestedArray = reqArr.match(/(?:\d+|null)/g).map(Number);
    // console.log(requestedArray);
//this command is for scanScheduling
    

    if(type==="cscan"){

    
    
    function cscanScheduling(lb, ub, requestedArray, dir) {
        const queue = [...requestedArray];
        queue.push(lb, ub);
        queue.sort((a, b) => a - b); //ascending order
        // const startIdx = queue.findIndex((element) => element >= lb);
        
        var direction = dir;
        let headPos = lb;
        let totalSeekTime = 0;
        const headPositions = [headPos];
        while (queue.length > 0) {
          let nextPos;
          if (direction === "right") {
            nextPos = queue.find((element) => element > headPos);
            if (nextPos === undefined) {
              queue.push(0);
              direction = "right";
              //to firdt push 0 and then reversing the queue so that it handles all the head positions that come forw
              
              nextPos = queue[queue.length-1];
            }
          } else {
            // nextPos= queue.shift()
            // console.log("printing queue");
            // console.log(queue)
            nextPos = queue.reverse().find((element) => element < headPos);
            // console.log("we are chcking");
            // console.log(nextPos);
            if (nextPos === undefined) {
              direction = "right";
              nextPos = queue[0];
            } else {
              queue.reverse();
            }
          }
          const seekTime = Math.abs(nextPos - headPos);
          totalSeekTime += seekTime;
          headPos = nextPos;
          headPositions.push(headPos);
          queue.splice(queue.indexOf(nextPos), 1);
        }
        final_seekTime = totalSeekTime;
        return headPositions;
      }
     head_Positions = cscanScheduling(lb, ub, requestedArray, "right");
    }
    else{
        function scanScheduling(lb, ub, requestedArray, dir) {
            //a copy here is created
            const queue = [...requestedArray];
            queue.push(lb, ub);
            queue.sort((a, b) => a - b);
            //here we will find the index that we need to start if we starting
            const startIdx = queue.findIndex((element) => element >= lb);
            var direction = dir;
            //here we are initializing the headpositions 
            let headPos = lb;
            let totalSeekTime = 0;
            const headPositions = [headPos];
            while (queue.length > 0) {
                let nextPos;
                //this first goes in right and checks if not undefined then contines else it will go to left
                if (direction === "right") {
                    // Look for the first position to the right of the head position
                    nextPos = queue.find((element) => element > headPos);
                    if (nextPos === undefined) {
                        // If there is no position to the right, switch direction
                        // queue.push(0);
                        direction = "left";
                        nextPos = queue.pop();
                    }
                } else {
                                //    Look for the first position to the left of the head position
                    nextPos = queue.reverse().find((element) => element < headPos);
                    if (nextPos === undefined) {
                        // If there is no position to the left, switch direction
                        queue.push(0);
                        direction = "right";
                       
                        nextPos=queue.reverse().shift();
                        // nextPos = queue.shift();
                    } else {
                        // If there is a position to the left, reverse the queue again
                        queue.reverse();
                    }
                }
                const seekTime = Math.abs(nextPos - headPos);
                totalSeekTime += seekTime;
                headPos = nextPos;
                // Add the current head position to the array
                headPositions.push(headPos);
                // Remove the next position from the queue
                queue.splice(queue.indexOf(nextPos), 1);
            }
            final_seekTime = totalSeekTime;
            return headPositions;
        }
        head_Positions = scanScheduling(lb, ub, requestedArray, dirn);

    }
    // console.log(totalSeekTime);
  

//   const canvas = document.getElementById("myChart");


//   const ctx = canvas.getAttribute("2d")
const chartData = {
  labels: head_Positions.map((pos) => pos.toString()),
  datasets: [
    {
      label: "Head Positions",
      data: head_Positions,
      fill: false,
      borderColor: "rgba(75,192,192,1)",
      lineTension: 0.1,
    },
  ],
};

const chartOptions = {
  scales: {
    xAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
        position: "top",
      },
    ],
    yAxes: [
      {
        ticks: {
          min: 0,
          max: ub,
        },
        position: "top",
      },
    ],
  },
};
// const chartData = {
//     labels: [], // Will be populated with the position numbers
//     datasets: [
//       {
//         label: "Disk Head Position",
//         data: [], // Will be populated with the disk head position at each step
//         fill: false,
//         borderColor: "rgba(54, 162, 235, 1)",
//         borderWidth: 1,
        
//       },
//     ],
//   };
  
  // const chartOptions = {
  //   scales: {
  //       xAxes: [
  //           {
  //             ticks: {
  //               beginAtZero: true,
  //             },
  //             position:"top"
  //           },
          
  //         ],
  //     yAxes: [
  //       {
  //         ticks: {
  //           min:lb,
  //           max:ub
  //         },
  //         position:"right"
  //       },
  //     ],
  //   },
  // };
  chartData.labels = head_Positions.map((pos)=>pos.toString());
  chartData.datasets[0].data=head_Positions;
  console.log("ChartLabels")
  console.log(chartData.labels)
  function MyChart() {
    return (
      <Line data={chartData} options={chartOptions} />
    );
  }


    return (
        <div>
            <Navbar />
            <div className='font-Gloock bg-[#19191c] text-white'>
                <div className='p-6 text-[40px] text-center tracking-wide'>SCAN-CSCAN Disk Scheduling </div>
                {/* this is for entering the data or the input that we see  */}
                <div className=' flex justify-center text-[20px] gap-44 pt-8'>
                    <div>
                        <div className='text-center'>Head Position </div>
                        <input type="text" value={lb} className='text-black border-4 rounded-md ' id='lb' onChange={handlelb} />
                    </div>
                    <div>
                        <div className='text-center'>Upper Bound </div>
                        <input type="text" value={ub} className='text-black border-4 rounded-md ' onChange={handleub} id='ub' />
                    </div>
                    <div>
                        <div className='text-center'>Type</div>
                        <select className='text-black border-4 rounded-md' onChange={handleType} >
                            <option id='scan' value="scan">SCAN</option>
                            <option id='cscan' value="cscan">CSCAN</option>
                        </select>
                    </div>
                    <div>
                        <div className='text-center'>Direction</div>
                        <select className='text-black border-4 rounded-md' onChange={handleDir} >
                            <option id='left' value="left">Left</option>
                            <option id='right' value="right">Right</option>
                        </select>
                    </div>
                </div>

                <div className='flex mt-20 justify-center gap-8'>
                    <div className='text-[20px]'>Requested Array</div>
                    <input id='requested' value={reqArr} type="text" onChange={handleArr} className='text-black border-4 w-1/3 rounded-md ' />



                </div>
                <div className="text-[20px] mt-10 flex justify-center">Total Seek Time: <div value={final_seekTime} onChange={seekChange} className="ml-4 rounded-md bg-white text-black"> {final_seekTime}</div> </div>
                <div className='border-4 border-white mr-0 w-2/3 ml-1/2 p-6 mt-10'><MyChart/></div>


            </div>
        </div>
    )
}



