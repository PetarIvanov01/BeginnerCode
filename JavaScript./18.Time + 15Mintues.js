function fun (input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let time = hours * 60 +  minutes + 15;
 
let timehourse = Math.floor(time / 60);
let timeminutes = time % 60;

if(timehourse > 23){
    timehourse = 0;
}

if(timeminutes < 10){
    console.log(`${timehourse}:0${timeminutes}`);
}
else{
    console.log(`${timehourse}:${timeminutes}`);
}
} 
