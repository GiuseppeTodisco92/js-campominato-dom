// /*
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.

// L’utente non può inserire più volte lo stesso numero.

// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50
// */


// /*--------------
//     MAIN
// ----------------*/ 
// // scelta difficoltà 
// //con difficoltà 0 => tra 1 e 100
// //con difficoltà 1 => tra 1 e 80
// //con difficoltà 2 => tra 1 e 50
// let level = 0;
// let difficult = 0;
// /*do{
//     level = Number(prompt("scegli la difficoltà di gioco! 0 -tra 1 e 100  1 - tra 1 e 80  2 - tra 1 e 50 "));
//     determino il grado di difficoltà
//     if (level === 0){
//         difficult = 100;
//     } else if (level === 1){
//         difficult = 80;
//     } else if (level === 2){
//         difficult = 50;
//     }
// }while(isNaN(level) || level != 0 && level !=1 && level !=2 )
// console.log(difficult)*/
// //1.Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati

// //stampo ARRAY bombs per verificare che i numeri siano tutti diversi tra loro
// console.log(bombs)
// let i = 0 ;
// let selectNumbers = []; // utilizzo un array per prendere nota dei numeri già inseriti
// //condizione while per fare inserire all'utente N numeri meno il numero di bombe
// while(i < levelSelect){
//     let num = 0;
//         do{
//             //num = Number(prompt("inserisci un numero tra 1 e 100"));
//         }while(isNaN(num) || num < 1 || num > 100)
//     //Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

//     //controllo che il numero selezionato non sia presente nella lista delle bombe
//     if (bombs.includes(num) === true){
//         alert("mi dispiace hai beccato una bomba !!! hai perso - premere ok per riavviare");
//         break;
//     }
//     // se il numero non è presente nella lista dei numeri inseriti lo pusha
//     if(selectNumbers.includes(num) === false){
//         selectNumbers.push(num);
//         console.log(selectNumbers);
//         i++; // continuo il ciclo 
//     }else{
//         alert("hai già inserito questo numero")
//     }  
// }
// // contatore dei tentativi
// console.log("Numero di tentativi eseguiti =",i);
// // se il numero di tentativi corrisponde al numero di possibilità vuol dire che hai completato il gioco con successo
// if (i === levelSelect){
//     alert("Complimenti hai vinto !")
// }
/*--------------
    FUNCTIONS
----------------*/ 

// GENERA NUMERI RANDOMICI 
function randomInteger(min,max){
    return Math.floor(Math.random()* (max - min + 1)) +1 ;
}
function refreshPage() {
    location.reload();
}



/*--------------
    MAIN
----------------*/ 


let level = document.getElementById("level");
let options = level.options;
const playBtn = document.querySelector(".btn_custom");
const boxList = document.querySelector(".box_square");
let difficult = 100; //da sistemare aggiugnere i livelli




playBtn.addEventListener("click", function refreshPage() {
    location.reload();
}
);
// creazione bombe
let bombs = [];
const nBombs = 16;
const levelSelect = difficult - nBombs;
while( bombs.length < nBombs){
    let bomb = randomInteger(1,100);
    if ( bombs.includes(bomb) === false ){
        bombs.push(bomb);
    } 
}
console.log(bombs)

let point = document.querySelector(".point");
let result = document.querySelector(".result")
let score = 0;
let number = [];
//riempimento campo
for (let i=1 ; i <= difficult ; i++){
    let box = document.createElement("div");
    box.classList.add("square");
    box.innerText = i;
    number.push(i);
    boxList.append(box);
    point.innerText = score;
    box.addEventListener("click", function bomb(){
        if(number.includes(i) != bombs.includes(i)){
            box.style.backgroundColor = "green";
             score += 100;
             point.innerText = score;
        }
        else if(bombs.includes(i)){
            box.style.backgroundColor = "red";
            result.innerText = "Hai beccato una bomba ! play per riavviare! ";
        }
      }
    )
}




function clickOnTest(){
	console.log('Click su test');
}
