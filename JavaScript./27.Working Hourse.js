function Class (input){
    let hour = Number(input[0]);
    let day = String(input[1]);
 
    let status = ``;
    if (hour>=10 && hour<=18){
        switch (day){
            case `Monday`: status = `open`
            break;
            case `Tuesday`: status = `open`
            break;
            case `Wednesday`: status = `open`
            break;
            case `Thursday`: status = `open`
            break;
            case `Friday`: status = `open`
            break;
            case `Saturday`: status = `open`
            break;
            default : status = `closed`
        }
    }
    else{
        status = `closed`
    }
    console.log(status)
}
