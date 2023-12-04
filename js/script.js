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

//funzione che svuota il testo html
function clearDom() {
    document.getElementById('text').innerText = "Inserisci i numeri che hai appena visto";
}

const text = document.getElementById('text');
let numbers = [];
//geneare e inserire nell'array 5 numeri
for (let i = 0; i < 5; i++) {
    let number = generateNumber(numbers);
    numbers.push(number);
    text.innerText += ` ${numbers[i]}`;
}

//visualizziamo i 5 numeri per 30 secondi

let visibility = setInterval(clearDom, 1000);

setTimeout(function(){
    //dopo 30 secondi puoi inserire i numeri
    let i = 0;
    while ( i < numbers.length) {
        let try_num = parseInt(prompt(`Inserisci il ${i+1}° numero visualizzato`));
        if (numbers[i] == try_num) {
            i++;
        }else{
            //esco dal while
            console.log('hai perso hai inserito un numero sbagliato');
            i = numbers.length;
            
        }

    }
}, 30000);
