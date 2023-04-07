// const ctx = canvas.getContext("2d")
//     const chart = new Chart( ctx,{
//         type: "line",
//         data: {
//             labels: [], // Will be populated with the position numbers
//             datasets: [
//                 {
//                     label: "Disk Head Position",
//                     data: [], // Will be populated with the disk head position at each step
//                     fill: false,
//                     borderColor: "rgba(54, 162, 235, 1)",
//                     borderWidth: 1,
//                 },
//             ],
//         },
//         options: {
//             scales: {
//                 yAxes: [
//                     {
//                         ticks: {
//                             beginAtZero: true,
//                         },
//                     },
//                 ],
//             },
//         },
//     });
    // //gonna comment
    // const totalSeekTime = scanScheduling(lb, ub, requestedArray,"right");
    // //dir is for the direction
    // function scanScheduling(lb, ub, requestedArray) {
    //     // Create a copy of the requested array to avoid modifying the original array
    //     const queue = [...requestedArray];
    //     // Add the lower and upper bounds to the queue
    //     queue.push(lb, ub);
    //     // Sort the queue in ascending order
    //     queue.sort((a, b) => a - b);

    //     // Find the index of the starting position in the sorted queue
    //     const startIdx = queue.findIndex((element) => element >= lb);

    //     // Initialize the direction of movement to "right" (i.e., increasing order)
    //     const direction = "right";

    //     // Initialize the head position and the total seek time
    //     let headPos = lb;
    //     let totalSeekTime = 0;

    //     // Initialize an array to hold the head positions at each step
    //     const headPositions = [headPos];

    //     // Traverse the queue in the specified direction
    //     while (queue.length > 0) {
    //         let nextPos;
    //         if (direction === "right") {
    //             // Look for the first position to the right of the head position
    //             nextPos = queue.find((element) => element > headPos);
    //             if (nextPos === undefined) {
    //                 // If there is no position to the right, switch direction
    //                 direction = "left";
    //                 nextPos = queue.pop();
    //             }
    //         } else {
    //             // Look for the first position to the left of the head position
    //             nextPos = queue.reverse().find((element) => element < headPos);
    //             if (nextPos === undefined) {
    //                 // If there is no position to the left, switch direction
    //                 direction = "right";
    //                 nextPos = queue.shift();
    //             } else {
    //                 // If there is a position to the left, reverse the queue again
    //                 queue.reverse();
    //             }
    //         }
    //         // Calculate the seek time and update the head position and total seek time
    //         const seekTime = Math.abs(nextPos - headPos);
    //         totalSeekTime += seekTime;
    //         headPos = nextPos;
    //         // Add the current head position to the array
    //         headPositions.push(headPos);
    //         // Remove the next position from the queue
    //         queue.splice(queue.indexOf(nextPos), 1);
    //     }
    //     return headPositions;
    // }
   
    // // // const canvas = document.getElementById("myChart");
    // // const ctx = canvas.getC
    // // const chart = new Chart( ctx,{
    // //     type: "line",
    // //     data: {
    // //         labels: [], // Will be populated with the position numbers
    // //         datasets: [
    // //             {
    // //                 label: "Disk Head Position",
    // //                 data: [], // Will be populated with the disk head position at each step
    // //                 fill: false,
    // //                 borderColor: "rgba(54, 162, 235, 1)",
    // //                 borderWidth: 1,
    // //             },
    // //         ],
    // //     },
    // //     options: {
    // //         scales: {
    // //             yAxes: [
    // //                 {
    // //                     ticks: {
    // //                         beginAtZero: true,
    // //                     },
    // //                 },
    // //             ],
    // //         },
    // //     },
    // // });


    // // Calculate the disk head position at each step of the algorithm and populate the chart
    // let direction = "right";
    // let headPos = lb;
    // let track = [];
    // while (requestedArray.length > 0) {
    //     let nextPos;
    //     if (direction === "right") {
    //         nextPos = requestedArray.find((element) => element > headPos);
    //         if (nextPos === undefined) {
    //             direction = "left";
    //             nextPos = requestedArray.pop();
    //         }
    //     } else {
    //         nextPos = requestedArray.reverse().find((element) => element < headPos);
    //         if (nextPos === undefined) {
    //             direction = "right";
    //             nextPos = requestedArray.shift();
    //         } else {
    //             requestedArray.reverse();
    //         }
    //     }
    //     track.push(headPos);
    //     headPos = nextPos;
    // }
    // track.push(headPos);
    // track.push(ub);
    // // chart.data.labels = track.map((pos) => pos.toString());
    // // chart.data.datasets[0].data = track;
    // // chart.update();
    // console.log(totalSeekTime)