function ToyShop (input){
    let tripPrice = Number(input[0])
    let amountPuzzels = Number(input[1])
    let amountDolls = Number(input[2])
    let amountBears = Number(input[3])
    let amountMinions = Number(input[4])
    let amountTrucks = Number(input[5])


    let totalToys = amountPuzzels + amountBears + amountDolls + amountMinions + amountTrucks;
    let totalToysPrice = (amountPuzzels * 2.60) + (amountBears * 4.10) + (amountDolls * 3) + (amountMinions * 8.20) + (amountTrucks * 2);
    if (totalToys >= 50 ){
        totalToysPrice = totalToysPrice - (totalToysPrice * 0.25)
    } 

    totalToysPrice = totalToysPrice * 0.90 ;

    if (totalToysPrice >= tripPrice ){
        let moneyLeft = totalToysPrice - tripPrice;
console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
    } else {
        let missingMoney = tripPrice - totalToysPrice;
        console.log(`Not enough money! ${missingMoney.toFixed(2)} lv needed.`)
    }
}
