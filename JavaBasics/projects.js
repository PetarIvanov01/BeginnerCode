function data ([archName , amountProject]){
   
   
    let hours = amountProject * 3;
    let result = (`The architect ${archName} will need ${hours} hours to complete ${amountProject} project/s.`)

    console.log(result);
}
data(['Georgi', 4]);