//funzione che genera un numero random in maniera univoca 
function generateNumber(array) {
    let num;
    let check_number = false;
    while (!check_number) {
        num = Math.floor(Math.random()* 100 - 1);
        if (!array.includes(num)) {
             check_number = true;  
        }
    }
    return num;
}

let numbers=[];
let i = 0
let visibility = setInterval(function(){
    i++;
    console.log(i);
    if (i == 30) {
        clearInterval(visibility);
    }
}, 1000);