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
//funzione che chiede all'utente di inserire i numeri
function getUserNumber() {
    const user_numbers = [];
    while(user_numbers.length < 5){
        let number = parseInt(prompt('Inserisci il numero'));

        if (!isNaN(number)) {
            user_numbers.push(number);
        }
    }

    return user_numbers;
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
    //facciamo inserire i numeri all'utente
    let user_numbers = getUserNumber();
    
}, 30000);
