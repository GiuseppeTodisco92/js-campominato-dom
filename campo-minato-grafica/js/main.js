
/*--------------
    MAIN
----------------*/ 

const playBtn = document.querySelector(".btn_custom");
const boxList = document.querySelector(".box_square");
let bombs = [];
const nBombs = 16;
let difficult = 0; //da sistemare aggiugnere i livelli
let possiblity = difficult - nBombs;

//invoca funzione livello 
level();

// creazione bombe
while( bombs.length < nBombs){
    let bomb = randomInteger(1,100);
    if ( bombs.includes(bomb) === false ){
        bombs.push(bomb);
    } 
}
console.log(bombs)

playBtn.addEventListener("click", function refreshPage() {
    location.reload();
}
);

let point = document.querySelector(".point");
let result = document.querySelector(".result")
let score = 0;
let number = [];
//riempimento campo
for (let i=1 ; i <= difficult ; i++){
    let box = document.createElement("div");
    box.classList.add("square");
    // box.innerText = i;
    number.push(i);
    boxList.append(box);
    point.innerText = score;
    
    box.addEventListener("click", function bomb(){
        if(number.includes(i) != bombs.includes(i)){
            box.style.backgroundColor = "green";
            const flower = `<i class="fa-solid fa-seedling"></i>`
            box.innerHTML = flower;
            score += 100;
             point.innerText = score;
             if(score/100 === possiblity){
                 alert("hai vinto");
                 refreshPage();
             }
        }
        else if(bombs.includes(i)){
            box.style.backgroundColor = "red";
            const bombImage = `<i class="fa-solid fa-bomb"></i>`
            box.innerHTML = bombImage;
            result.innerText = "Hai beccato una bomba ! play per riavviare!";
            alert("premere play per riavviare il gioco");
            refreshPage();
        }
      }
    )
}


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

function level(){
    let x = document.getElementById("level");
    var y = x.selectedIndex;
    console.log(y);
    if (y === 0 ){
        difficult = 100;
    } else if ( y === 1){
        difficult = 80;
    } else {
        difficult = 50; 
    }
}


