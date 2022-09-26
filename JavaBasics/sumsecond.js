function sumsecond (input){
let firstTime = Number(input[0]);
let secondTime = Number(input[1]);
let thirdtime = Number(input[2]);

let sumtime = firstTime + secondTime + thirdtime;
let minutes = Math.floor(sumtime/60);
let seconds = sumtime% 60;

if (seconds < 10){
    console.log(`${minutes}:0${seconds}`);
}

else{
    console.log(`${minutes}:${seconds}`);
}

}
sumsecond(["50","50","49"])