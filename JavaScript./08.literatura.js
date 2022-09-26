function literatura(input){
let pages = Number(input[0])
let pagesforHour = Number(input[1])
let days = Number(input[2])

let hours = (pages/pagesforHour)/days
console.log(hours)
}
literatura(["212 ","20 ","2 "])
