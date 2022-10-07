function Class(input) {
    let index = 0;
    let tripMoneyNeeded = Number(input[index]);
    index++;
    let avaliableMoney = Number(input[index]);
    index++;


    let counterSpend = 0;
    let counterDays = 0;

    while (avaliableMoney < tripMoneyNeeded && counterSpend < 5) {
        let action = input[index];
        index++;
        let amountMoney = Number(input[index]);
        index++;

        if (action === `save`) {
            avaliableMoney += amountMoney;
            counterSpend === 0
        } else if (action === `spend`) {
            counterSpend++;
            avaliableMoney -= amountMoney;
        }

        if (avaliableMoney < 0) {
            avaliableMoney = 0;
        }
        counterDays++;
    }
    if (avaliableMoney >= tripMoneyNeeded) {
        console.log(`You saved the money for ${counterDays} days.`);
    } if (counterSpend === 5) {
        console.log("You can't save the money.");
        console.log(counterDays);
    }
}
