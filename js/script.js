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
//funzione che controlla i numeri inseriti dall'utente
function checkUserNumber(user_numbers, random_numbers) {
    let guessed = [];
    for (let i = 0; i < user_numbers.length; i++) {
        //controllo se il numero inserito è presente nella lista dei numeri
        if(random_numbers[i] == user_numbers[i]){
            guessed.push(user_numbers[i]);
        }
        
    }
    return guessed
}
//funzione che stampa il risulatto a schermo
function printResults(array) {
    let text;
    if (array.length == 1) {
        text = `Hai indovinato un numero: ${array}`;
    }else{
        text = `Hai indovinato ${array.length} numeri: ${array}`;
    }

    document.getElementById('text').innerText = text;
}

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

    let guessed_numbers = checkUserNumber(user_numbers, numbers);

    printResults(guessed_numbers);
}, 30000);
