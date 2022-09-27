function Swimming (input) {

let record = Number(input[0]);
let meters = Number(input[1]);
let secondsformeter = Number(input[2]);

let swimmingMeters = meters * secondsformeter;
let timeLost = Math.floor(meters/15);
let sumTime =swimmingMeters + (timeLost*12.5);

if(record > sumTime){
    console.log(`Yes, he succeeded! The new world record is ${sumTime.toFixed(2)} seconds.`)
} 
else{
    let timeLeft = sumTime - record;
    console.log(`No, he failed! He was ${timeLeft.toFixed(2)} seconds slower.`)
}

}
