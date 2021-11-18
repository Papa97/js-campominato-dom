let container = document.querySelector('.container');
let numeroRighe;
let numeroColonne;
const lvlSelector = parseInt(document.getElementById('livello').value);
const bombNumber = 16;

switch (lvlSelector) {
    case 1: numeroRighe = 100;
            numeroColonne = Math.sqrt(numeroRighe);

    break;
    case 2: numeroRighe = 81;
           numeroColonne = Math.sqrt(numeroRighe);

    break;
    case 3: numeroRighe = 49;
            numeroColonne = Math.sqrt(numeroRighe);

    break;
    default: numeroRighe = 10;
             numeroColonne = Math.sqrt(numeroRighe);

}



// funzioni
function newBombs (){
    const arrayBomb = [];

    while (arrayBomb.length < bombNumber){
        const nRandom = numeroRandom(1, numeroRighe )
        if(!arrayBomb.includes(nRandom)){
            arrayBomb.push(nRandom);
        }
    }
    return arrayBomb;
}

newBombs();
console.log(newBombs());
const arrayBomb =newBombs();
function createSquare(){
    // mi creo il div
    const node = document.createElement('div');
    // metto la classe 'square'
    node.className = 'square';
    // creo costante con il valore da mettere nel html
    const size = `calc(100% / ${numeroColonne})`;
    // metto nell html del css inline con la width piu il valore del size
    node.style.width = size;
    // metto nell html del css inline con la height piu il valore del size
    node.style.height = size;

    return node;
}

function creazioneGriglia (valoreSwitchRiga) {


    for (let i = 1 ; i <= valoreSwitchRiga ; i ++) {
        {
            const divEl = createSquare();
            container.appendChild(divEl)
            divEl.innerHTML = i;
            
            divEl.addEventListener('click', function (){
                // this.classList.add('clicked-true');   
                
                if (arrayBomb.includes(i)){
                    this.classList.add('clicked-true');   
                } else {
                    this.classList.add('clicked-bomb')
                    
                }
                // for (let k = 0; k < bombNumber.length ; k++){
                //     if (arrayBomb[k] == i){
                //         this.classList.add('clicked-bomb')
                //     } else {
                //     }
                // }
            })
        }

    };
}

function numeroRandom (min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}





const buttonLvl = document.getElementById('play');
buttonLvl.addEventListener('click',function (){
    creazioneGriglia(numeroRighe,arrayBomb)
});

console.log('numero di colonne',numeroColonne);