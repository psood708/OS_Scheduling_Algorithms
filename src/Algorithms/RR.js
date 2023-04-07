import {React,useState,Component} from 'react'
import GanttChart from 'react-gantt-chart';

export const RR= () => {
  //completion time

  function calculateCompletionTime() {
    const a11 = document.getElementById('a11').value;
    const a21 = document.getElementById('a21').value;
    const a31 = document.getElementById('a31').value;
    const a41 = document.getElementById('a41').value;
    const a51 = document.getElementById('a51').value;
    const a12 = document.getElementById('a12').value;
    const a22 = document.getElementById('a22').value;
    const a32 = document.getElementById('a32').value;
    const a42 = document.getElementById('a42').value;
    const a52 = document.getElementById('a52').value;
    const a61 = document.getElementById('a61').value;
    
    let completionTime;

    if (Number(a11) <= Number(a21) && Number(a21) <= Number(a31) && Number(a31) <= Number(a41) && Number(a41) <= Number(a51)) {
        let totalTime = 0;
        totalTime += Number(a12);
        if (totalTime <= Number(a61)) {
            completionTime = Number(a11) + totalTime;
        } else {
            totalTime = 0;
            totalTime += Number(a22);
            completionTime = Number(a21) + totalTime;
        }
    } else if (Number(a21) <= Number(a31) && Number(a31) <= Number(a41) && Number(a41) <= Number(a51)) {
        let totalTime = 0;
        totalTime += Number(a22);
        if (totalTime <= Number(a61)) {
            completionTime = Number(a21) + totalTime;
        } else {
            totalTime = 0;
            totalTime += Number(a32);
            completionTime = Number(a31) + totalTime;
        }
    } else if (Number(a31) <= Number(a41) && Number(a41) <= Number(a51)) {
        let totalTime = 0;
        totalTime += Number(a32);
        if (totalTime <= Number(a61)) {
            completionTime = Number(a31) + totalTime;
        } else {
            totalTime = 0;
            totalTime += Number(a42);
            completionTime = Number(a41) + totalTime;
        }
    } else if (Number(a41) <= Number(a51)) {
        let totalTime = 0;
        totalTime += Number(a42);
        if (totalTime <= Number(a61)) {
            completionTime = Number(a41) + totalTime;
        } else {
            totalTime = 0;
            totalTime += Number(a52);
            completionTime = Number(a51) + totalTime;
        }
    } else {
        let totalTime = 0;
        totalTime += Number(a52);
        completionTime = Number(a51) + totalTime;
    }

    return completionTime;
 }



//avg tat



const calculateAvgTAT = () => {
  const a11 = document.getElementById('a11').value;
  const a21 = document.getElementById('a21').value;
  const a31 = document.getElementById('a31').value;
  const a41 = document.getElementById('a41').value;
  const a51 = document.getElementById('a51').value;
  const a12 = document.getElementById('a12').value;
  const a22 = document.getElementById('a22').value;
  const a32 = document.getElementById('a32').value;
  const a42 = document.getElementById('a42').value;
  const a52 = document.getElementById('a52').value;
  const a61 = document.getElementById('a61').value;

  const arrivalTimes = [a11, a21, a31, a41, a51];
  const burstTimes = [a12, a22, a32, a42, a52];
  const timeQuantum = a61;

  let completionTime = [0];
  let waitingTimes = [0];
  let turnAroundTimes = [0];
  let totalWaitingTime = 0;
  let totalTurnAroundTime = 0;
  
  for (let i = 1; i < arrivalTimes.length; i++) {
    const currentProcessWaitingTime = completionTime[i - 1] - arrivalTimes[i];
    completionTime.push(completionTime[i - 1] + (timeQuantum > burstTimes[i] ? burstTimes[i] : timeQuantum));
    waitingTimes.push(currentProcessWaitingTime < 0 ? 0 : currentProcessWaitingTime);
    turnAroundTimes.push(completionTime[i] - arrivalTimes[i]);
    totalWaitingTime += waitingTimes[i];
    totalTurnAroundTime += turnAroundTimes[i];
  }

  //const averageWaitingTime = totalWaitingTime / arrivalTimes.length;
  const averageTurnAroundTime = totalTurnAroundTime / arrivalTimes.length;

  return {
   
    averageTurnAroundTime
  };
 
};


 // avg wt



 const calculateAvgWT= () => {
  let at=[parseInt(document.getElementById('a11').value),parseInt(document.getElementById('a21').value),parseInt(document.getElementById('a31').value),parseInt(document.getElementById('a41').value),parseInt(document.getElementById('a51').value)];
  let bt=[parseInt(document.getElementById('a12').value),parseInt(document.getElementById('a22').value),parseInt(document.getElementById('a32').value),parseInt(document.getElementById('a42').value),parseInt(document.getElementById('a52').value)];
  let tq=parseInt(document.getElementById('a61').value);
  let wt=[],tat=[],total_wt=0;
  let n=at.length;
  wt[0]=0;

  //calculate waiting time
  for(let i=1;i<5;i++){
      wt[i]=0;
      for(let j=0;j<i;j++)
          wt[i]+=bt[j];
      total_wt+=wt[i];
  }

  let avg_wt=total_wt/5;  //average waiting time
  return avg_wt;
}



// gantt chart


const calculateGanttChart = () => {
  // Get all the input values from the user
  let arrivalTime1 = document.getElementById('a11').value;
  let arrivalTime2 = document.getElementById('a21').value;
  let arrivalTime3 = document.getElementById('a31').value;
  let arrivalTime4 = document.getElementById('a41').value;
  let arrivalTime5 = document.getElementById('a51').value;
  let burstTime1 = document.getElementById('a12').value;
  let burstTime2 = document.getElementById('a22').value;
  let burstTime3 = document.getElementById('a32').value;
  let burstTime4 = document.getElementById('a42').value;
  let burstTime5 = document.getElementById('a52').value;
  let timeQuantum = document.getElementById('a61').value;
  
  // Create an array of processes for the Round Robin Algorithm
  let processes = [
    {
      name: 'p1',
      arrivalTime: arrivalTime1,
      burstTime: burstTime1,
      remainingTime: burstTime1
    },
    {
      name: 'p2',
      arrivalTime: arrivalTime2,
      burstTime: burstTime2,
      remainingTime: burstTime2
    },
    {
      name: 'p3',
      arrivalTime: arrivalTime3,
      burstTime: burstTime3,
      remainingTime: burstTime3
    },
    {
      name: 'p4',
      arrivalTime: arrivalTime4,
      burstTime: burstTime4,
      remainingTime: burstTime4
    },
    {
      name: 'p5',
      arrivalTime: arrivalTime5,
      burstTime: burstTime5,
      remainingTime: burstTime5
    }
  ];
  
  // Sort the processes in increasing order of arrival time
  processes.sort((a, b) => {
    if (a.arrivalTime > b.arrivalTime) {
      return 1;
    }
    else {
      return -1;
    }
  });
  
  // Initialise the gantt chart array
  let ganttChart = [];
  
  // Initialise the current time to the arrival time of the first process
  let currentTime = processes[0].arrivalTime;
  
  // Loop through the processes until all the remaining times of the processes are 0
  while (processes.some(process => process.remainingTime > 0)) {
    // Loop through the processes
    for (let i = 0; i < processes.length; i++) {
      // Check if the arrival time of the process is less than or equal to the current time
      if (processes[i].arrivalTime <= currentTime) {
        // Check if the remaining time of the process is less than or equal to the time quantum
        if (processes[i].remainingTime <= timeQuantum) {
          // Add the process to the gantt chart array
          ganttChart.push({
            name: processes[i].name,
            startTime: currentTime,
            endTime: currentTime + processes[i].remainingTime
          });
          // Increment the current time by the remaining time of the process
          currentTime += processes[i].remainingTime;
          // Set the remaining time of the process to 0
          processes[i].remainingTime = 0;
        }
        else {
          // Add the process to the gantt chart array
          ganttChart.push({
            name: processes[i].name,
            startTime: currentTime,
            endTime: currentTime + timeQuantum
          });
          // Increment the current time by the time quantum
          currentTime += timeQuantum;
          // Decrement the remaining time of the process by the time quantum
          processes[i].remainingTime -= timeQuantum;
        }
      }
    }
  }
  
  // Return the gantt chart array
  return ganttChart;
}
  
  return (
    <div className='text-white  bg-[#131316] font-Gloock items-center'>
    <div className="container pt-5 justify-center">
      <h2 className="text-center subheading text-[40px] p-7">ROUND ROBIN ALGORITHM</h2>
    </div>
    <div className="col-3 text-center ">
          <table className="text-center items-center">
           
            <tbody >
              <tr>
                <td>Process ID</td>
                <td>Arrival Time</td>
                <td>Burst Time</td>
                
              </tr>
              <tr>
                <td>P1</td>
                <td><input size="3" maxLength="3" id='a11' className='text-black'/></td>
                <td><input size="3" maxLength="3" id='a12' className='text-black'/></td>
              </tr>
              <tr>
                <td>P2</td>
                <td><input size="3" maxLength="3" id="a21" className='text-black'/></td>
                <td><input size="3" maxLength="3" id="a22" className='text-black'/></td>
              </tr>
              <tr>
                <td>P3</td>
                <td><input size="3" maxLength="3" id="a31" className='text-black'/></td>
                <td><input size="3" maxLength="3" id="a32" className='text-black'/></td>
              </tr>
              <tr>
                <td>P4</td>
                <td><input size="3" maxLength="3" id="a41" className='text-black'/></td>
                <td><input size="3" maxLength="3" id="a42" className='text-black'/></td>
              </tr>
              <tr>
                <td>P5</td>
                <td><input size="3" maxLength="3" id="a51" className='text-black' /></td>
                <td><input size="3" maxLength="3" id="a52" className='text-black' /></td>
              </tr>
              <tr>
                <td>Time Quantum</td>
                <td><input size="3" maxLength="3" id="a61" className='text-black ' /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row m-5 text-center flex justify-center mt-10 gap-20 ">
        <div className="col-4">
          <button  className="btn btn-secondary bg-[#3d3d29] p-4 rounded-xl ">Avg TAT</button>
        </div>
        <div className="col-4">
          <button  className="btn btn-secondary bg-[#3d3d29] p-4 rounded-xl ">Avg WT</button>
        </div>
        <div className="col-4">
          <button  className="btn btn-secondary bg-[#3d3d29] p-4 rounded-xl">Gantt Chart</button>
        </div>
      </div>

      <div className="col-3 text-center ">
          <table className="text-center items-center">
           
            <tbody>
            <tr>
                <td>Avg TAT</td>
                <td><input size="5" maxLength="5" id='atat' className='text-black' onClick={calculateAvgTAT}/></td>
            </tr>

            <tr>
                <td>Avg WT</td>
                <td><input size="5" maxLength="5" id='awt' className='text-black' onClick={calculateAvgWT}/></td>
            </tr>

            </tbody>
          </table>
      </div>
      

    </div>
    
  )
}

export default RR;