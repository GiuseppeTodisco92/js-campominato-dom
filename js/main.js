/*
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.

In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.

L’utente non può inserire più volte lo stesso numero.

Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
*/

/*--------------
    FUNCTIONS
----------------*/ 

// GENERA NUMERI RANDOMICI 
function randomInteger(min,max){
    return Math.floor(Math.random()* (max - min + 1)) +1 ;
}



/*--------------
    MAIN
----------------*/ 

//1.Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati

let bombs = [];
const nBombs = 16;

while( bombs.length < nBombs){
    let bomb = randomInteger(1,100);
    if ( bombs.includes(bomb) === false ){
        bombs.push(bomb);
    } 
}

//stampo ARRAY bombs per verificare che i numeri siano tutti diversi tra loro
console.log(bombs)

// 2. In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
    //2a. L’utente non può inserire più volte lo stesso numero.
    //2b. L’utente non può inserire più volte lo stesso numero.

let i = 0 ;
let selectNumbers = []; // utilizzo un array per prendere nota dei numeri già inseriti

//condizione while per fare inserire all'utente N numeri meno il numero di bombe
while(i < 20 - nBombs){
    const num = Number(prompt("inserisci un numero"));

    //Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

    //controllo che il numero selezionato non sia presente nella lista 
    if (bombs.includes(num) === true){
        alert("mi dispiace hai beccato una bomba !!! hai perso");
        break;
    }

    if(selectNumbers.includes(num) === false){
        selectNumbers.push(num);
        console.log(selectNumbers);
        i++; // continuo il ciclo 
    }else{
        alert("hai già inserito questo numero")
    }  
}


