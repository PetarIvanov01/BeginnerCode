function figures (input){
    let figures = String(input[0])

    if(figures === "square"){
        let a = Number(input[1]);
        console.log(a*a)
 }
    else if(figures === "rectangle"){
        let a = Number(input[1]);
        let b = Number(input[2])
        console.log(a*b)
 }

 else if(figures === "circle"){
    let radus = Number(input[1]);  
    console.log((radus*radus)*Math.PI)
}
else if(figures === "triangle"){
    let hight = Number(input[1]);
    let wight = Number(input[2])
    console.log((hight*wight)/2)
}

}
figures(["rectangle","7","2.5"])