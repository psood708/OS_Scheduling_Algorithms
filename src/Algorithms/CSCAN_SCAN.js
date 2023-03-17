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


    var head_Positions;
    console.log(lb, ub, type, reqArr)

    const requestedArray = reqArr.match(/(?:\d+|null)/g).map(Number);
    console.log(requestedArray);
//this command is for scanScheduling
    

    if(type==="cscan"){

    
    //for cscan
    function cscanScheduling(lb, ub, requestedArray, dir) {
        const queue = [...requestedArray];
        queue.push(lb, ub);
        queue.sort((a, b) => a - b);
        const startIdx = queue.findIndex((element) => element >= lb);
        console.log(startIdx)
        var direction = dir;
        let headPos = lb;
        let totalSeekTime = 0;
        const headPositions = [headPos];
        while (queue.length > 0) {
          let nextPos;
          if (direction === "right") {
            nextPos = queue.find((element) => element > headPos);
            if (nextPos === undefined) {
              direction = "left";
              nextPos = queue[queue.length - 1];
            }
          } else {
            nextPos = queue.reverse().find((element) => element < headPos);
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
                        direction = "left";
                        nextPos = queue.pop();
                    }
                } else {
                                //    Look for the first position to the left of the head position
                    nextPos = queue.reverse().find((element) => element < headPos);
                    if (nextPos === undefined) {
                        // If there is no position to the left, switch direction
                        direction = "right";
                        nextPos = queue.shift();
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
        head_Positions = scanScheduling(lb, ub, requestedArray, "right");

    }
    // console.log(totalSeekTime);
  

//   const canvas = document.getElementById("myChart");


//   const ctx = canvas.getAttribute("2d")

const chartData = {
    labels: [], // Will be populated with the position numbers
    datasets: [
      {
        label: "Disk Head Position",
        data: [], // Will be populated with the disk head position at each step
        fill: false,
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        
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
            },
          ],
      yAxes: [
        {
          ticks: {
            min:lb,
            max:ub
          },
        },
      ],
    },
  };
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
                        <div className='text-center'>Lower Bound </div>
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
                </div>

                <div className='flex mt-20 justify-center gap-8'>
                    <div className='text-[20px]'>Requested Array</div>
                    <input id='requested' value={reqArr} type="text" onChange={handleArr} className='text-black border-4 w-1/3 rounded-md ' />



                </div>
                <div className="text-[20px] mt-10 flex justify-center">Total Seek Time: <div value={final_seekTime} onChange={seekChange} className="bg-white text-black"> 100</div> </div>
                <div className='border-4 border-white p-6 mt-10'><MyChart/></div>


            </div>
        </div>
    )
}



