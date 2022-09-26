function Calculator(input){

    let DepositSum = Number(input[0])
    let Months = Number(input[1])
    let Percent = Number(input[2])

    let Sum = DepositSum + Months * (( DepositSum * (Percent/100) ) / 12)

    console.log(Sum)
    //сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
}
Calculator(["200 ","3 ","5.7 "])
