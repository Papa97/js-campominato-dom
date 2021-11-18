let container = document.querySelector('.container');
let numeroRighe;
let numeroColonne;
const diff = 3 ;// parseInt(prompt('inserisci difficolta : 1 facile , 2 medio, 3 difficile'));
const lvlSelector = parseInt(document.getElementById('livello').value);


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
                this.classList.add('clicked-true');
            })
        }

    };
}


console.log('valore di lvlSelector',lvlSelector);

const buttonLvl = document.getElementById('play');
buttonLvl.addEventListener('click',function (){
    creazioneGriglia(numeroRighe)
});

console.log('numero di colonne',numeroColonne);