function bonusscore (input){
    let points = Number(input[0]);
    let bonuspoints = 0;
    if (points <= 100){
        bonuspoints = 5;
    }
    else if (points > 100){
        bonuspoints = points * 0.2;
    }
    if (points > 1000){
        bonuspoints = points * 0.1;
    }
    if (points % 2 == 0){
        bonuspoints+=1;
    }
    else if (points % 10 == 5){
        bonuspoints+=2;
    }
    console.log(bonuspoints)
    console.log(bonuspoints + points)
}
bonusscore(["15875"])