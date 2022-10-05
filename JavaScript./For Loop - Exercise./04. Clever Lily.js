function Class(input) {
    let lilyAges = Number(input[0]);
    let washMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    
    let amountOfToys = 0;
    let money = 0;
    for (let i = 1; i <= lilyAges; i++) {
        if (i % 2 === 0) {
            money = money -1 + i*5;
        }else  {
            amountOfToys++;
        }
    }

   let toySum = amountOfToys * toyPrice;
   let saveMoney = money + toySum;

   if (saveMoney >= washMachinePrice) {

    let moneyLeft = saveMoney - washMachinePrice;

    console.log(`Yes! ${moneyLeft.toFixed(2)}`);
   } else {
    let diff = washMachinePrice - saveMoney;
    console.log(`No! ${diff.toFixed(2)}`);
   }

}
