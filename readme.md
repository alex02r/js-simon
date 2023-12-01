Ciao ragazzi,
Esercizio di oggi: Simon Says
nome repo: js-simon
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma



**Soluizione**
1 - Creare una funzione che genera un numero casuale univoco
    1.1 - function generateNumber(numbers)
        1.2 - dichiariamo una variabile numero.
        1.3 - inizializziamo una variabile check_number = false;
        1.4 - assegnamo a numero un numero casueale da 1 a 100.
        1.5 - while (!check_number) //fino a quando il numero non è presente
            1.5.1 - ? !numbers.includes(numero)
                        1.5.1.1 - check_number = true . il numero non è presente e possiamo passare il valore. 
        1.6 - return numero;  
2 - creare una variuabile setTimeout
    2.1 - nella funzione di setTimeout visualizziamo 5 numeri casuali tramite la funzione
    2.2 - inseriamo i valori in un array.
3 - for(i=0; i< array.length; i++) di lettura
    3.1 - Chiediamo all'utente di inserire il numero visualizzato in posizione iesima
    3.2 - ? array[i] != numero inserito
        3.2.1 - il numero inserito è sbagliato quindi hai perso
        3.2.1 - i = array.length;
