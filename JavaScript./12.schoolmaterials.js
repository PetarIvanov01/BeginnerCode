function School (input){
    let pen = Number(input[0])
    let markers = Number(input[1])
    let preparat = Number(input[2])
    let disscount = Number(input[3])


    let sum = (pen*5.80 + markers*7.20 + preparat*1.20) - ((pen*5.80 + markers*7.20 + preparat*1.20)*(disscount/100))
console.log(sum)
}
School(["2 ","3 ","4 ","25 "])
