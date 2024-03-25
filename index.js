// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
   // This function calculates the number of blocks between a pickup location

    return Math.abs(pickupLocation - 42);  // Absolute difference from 42nd Street
  }
  // Function to convert the number of blocks to feet


function distanceFromHqInFeet(pickupLocation) {
    // Get the number of blocks from the HQ and convert it to feet
    const blocks = distanceFromHqInBlocks(pickupLocation);
    if (typeof blocks === 'number') {
      return blocks * 264;
    } else {
      return blocks;
    }
  }


  //}
  
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blockDifference = Math.abs(startBlock - endBlock);
    const distanceInFeet = blockDifference * 264; // Each block is 264 feet
    return distanceInFeet;
  }
  function calculatesFarePrice(startingBlock, endingBlock) {
    const distanceTravelledInFeet = Math.abs(endingBlock - startingBlock);
  
    //if (distanceTravelledInFeet > 2500 && distanceTravelledInFeet <=10000) {
     // return "cannot travel that far";
 if (distanceTravelledInFeet <= 400) {
      return 0;
    } else if (distanceTravelledInFeet > 400 && distanceTravelledInFeet <= 2000) {
      return (distanceTravelledInFeet - 400) * 0.02;
    } else if (distanceTravelledInFeet > 2000 && distanceTravelledInFeet (-400)<= 2500) {
      return 25;
    }
  else  if (distanceTravelledInFeet > 2500 && distanceTravelledInFeet <=10000) {
        return "cannot travel that far";
  }

  }