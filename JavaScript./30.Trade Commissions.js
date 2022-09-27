function Class (input){
    let town = String (input[0]);
    let sales = Number (input[1]);
    let comision = 0;
    if(sales<0){
        console.log(`error`)
    }
    else{
    if(town == `Sofia`){
        if(sales>=0 && sales<=500){
            comision = sales *0.05;
        }else if (sales>500 && sales<=1000){
            comision = sales *0.07;
        }else if (sales>100 && sales<=10000){
            comision = sales *0.08;
        }else{
            comision = sales *0.12;
        }
        console.log(comision.toFixed(2))
    }
   else if(town == `Varna`){
        if(sales>=0 && sales<=500){
            comision = sales *0.045;
        }else if (sales>500 && sales<=1000){
            comision = sales *0.075;
        }else if (sales>100 && sales<=10000){
            comision = sales *0.1;
        }else{
            comision = sales *0.13;
        }
        console.log(comision.toFixed(2))
    } 
    else if (town == `Plovdiv`){
        if(sales>=0 && sales<=500){
            comision = sales *0.055;
        }else if (sales>500 && sales<=1000){
            comision = sales *0.08;
        }else if (sales>100 && sales<=10000){
            comision = sales *0.12;
        }else{
            comision = sales *0.145;
        }
        console.log(comision.toFixed(2))
    }
    else{
        console.log(`error`)
    }
}

   

    
        
    

   
}
