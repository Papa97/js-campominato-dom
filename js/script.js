const buttonLvl = document.getElementById('play');
buttonLvl.addEventListener('click',function (){
    play()
});

function play() {
    document.querySelector('.container').innerHTML = '';

    let container = document.querySelector('.container');
    const lvlSelector = parseInt(document.getElementById('livello').value);

    let numeroCelle;
    let numeroCelleRiga;
    const bombNumber = 16;



    switch (lvlSelector) {
        case 1:
             numeroCelle = 100;

        break;
            case 2: numeroCelle = 81;
    
        break;
            case 3: numeroCelle = 49;
    
        break;

    
    }

    const arrayBomb = newBombs();
    console.log(arrayBomb);

    function newBombs (){
        const arrayBomb = [];
    
        while (arrayBomb.length < bombNumber){
            const nRandom = numeroRandom(1, numeroCelle )
            if(!arrayBomb.includes(nRandom)){
                arrayBomb.push(nRandom);
            }
        }
        return arrayBomb;
    }


    function numeroRandom (min,max){
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    numeroCelleRiga = Math.sqrt(numeroCelle);


    creazioneGriglia(numeroCelle);

    function creazioneGriglia (valoreSwitchRiga) {


        for (let i = 1 ; i <= valoreSwitchRiga ; i ++) {
            {
                const divEl = createSquare();
                container.appendChild(divEl)
                divEl.innerHTML = i;
                console.log('questo e i',i);
                divEl.addEventListener('click', function (){
                    // this.classList.add('clicked-true');   
                    
                    if (!arrayBomb.includes(i)){
                        this.classList.add('clicked-true'); 
                        
                    } else {
                        this.classList.add('clicked-bomb');
                        alert('BOOM! SEI ESPLOSO, premere F5 per iniziare una nuova partita');
                    }
                })

            }
    
        };
    };
    

    function createSquare(){
        // mi creo il div
        const node = document.createElement('div');
        // metto la classe 'square'
        node.className = 'square';
        // creo costante con il valore da mettere nel html
        const size = `calc(100% / ${numeroCelleRiga})`;
        // metto nell html del css inline con la width piu il valore del size
        node.style.width = size;
        // metto nell html del css inline con la height piu il valore del size
        node.style.height = size;
    
        return node;
    }



}