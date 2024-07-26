// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
}

function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    const feetPerBlock = 264;
    return blocksTravelled * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
        return 0;  // Free sample
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;  // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25;  // Flat rate of $25 for distances over 2000 feet
    } else {
        return 'Ride not allowed';  // Over 2500 feet, rides are not allowed
    }
}

// Example usage
const pickupLocation = 50;
console.log("Distance from HQ in blocks:", distanceFromHqInBlocks(pickupLocation));  // Output: 8
console.log("Distance from HQ in feet:", distanceFromHqInFeet(pickupLocation));      // Output: 2112

const startBlock = 34;
const endBlock = 38;
console.log("Distance travelled in feet:", distanceTravelledInFeet(startBlock, endBlock));  // Output: 1056
console.log("Fare Price:", calculatesFarePrice(startBlock, endBlock));  // Output: 13.12

// Test cases below 42nd street
const pickupLocationBelow = 30;
console.log("Distance from HQ in blocks:", distanceFromHqInBlocks(pickupLocationBelow));  // Output: 12
console.log("Distance from HQ in feet:", distanceFromHqInFeet(pickupLocationBelow));      // Output: 3168

const startBlockBelow = 45;
const endBlockBelow = 32;
console.log("Distance travelled in feet:", distanceTravelledInFeet(startBlockBelow, endBlockBelow));  // Output: 3432
console.log("Fare Price:", calculatesFarePrice(startBlockBelow, endBlockBelow));  // Output: 'Ride not allowed'
