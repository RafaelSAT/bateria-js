document.body.addEventListener('keyup', (event) =>{
    tocar(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () => {
    let musica = document.querySelector('#input').value;

    if(musica !== ''){
        let musicaArray = musica.split('');
        tocarMusica(musicaArray);
    }
});

function tocar(som) {
     let audioElement = document.querySelector(`#s_${som}`);
     let keyElement = document.querySelector(`div[data-key="${som}"]`);

     if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
     }
     if(keyElement){
        keyElement.classList.add('active');
        setTimeout(() => {
            keyElement.classList.remove('active');
        },300);
     }
}

function tocarMusica(musicaArray) {
    let wait = 0;

    for(let musicaItem of musicaArray){

        setTimeout(() => {
            tocar(`key${musicaItem}`);
        }, wait);
        
        wait += 250;
    }
}