function data (input){
   
    let dogFood = Number(input.shift());
    let catFood = Number(input.shift());
    let sumFood = (dogFood * 2.50) + (catFood * 4);
    let result = `${sumFood.toFixed(2)} lv.`;
    console.log(result);
}
