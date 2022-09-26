function Repainting (input){
   
        let lainlon = Number(input[0])
        let boq = Number(input[1])
        let razreditel = Number(input[2])
        let chasove = Number(input[3])
    
    let materialsum = (lainlon+2)*1.50 + (boq )*14.50 + (razreditel*5.00) +0.40 
    let totalsum = (materialsum*0.30) *chasove
    console.log(totalsum) 

    }
 Repainting(["10 ","11 ","4 ","8 "])
