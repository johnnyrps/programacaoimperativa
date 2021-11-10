let pipoca = 10;
let macarrão = 8;
let carne = 15;
let feijão = 12;
let brigadeiro = 8;

function microondas(tempo, prato){
    if(prato *2){
        console.log("A comida queimou!")
    
    }else if (tempo < prato){
        console.log("Tempo insuficiente!")
    
    } else if (prato *3 < tempo){
        console.log("Kabuuumm")
    }
    else{
        console.log("Prato pronto, bom apetite !!!");
    }

    

}
microondas(45, carne);