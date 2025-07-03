function tocaSom(seletorSom) {
   const elemento = document.querySelector(seletorSom);

    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido'); 
    }
}

const sons = document.querySelectorAll('.tecla');

for(let contador = 0; contador < sons.length; contador++){

    const som = sons[contador];
    const instrumento = som.classList[1];
    const idSom = `#som_${instrumento}`; // template string
    
    som.onclick = function(){
        tocaSom(idSom);
    } 

    som.onkeydown = function(event){

        if (event.code === 'Space' || event.code === 'Enter'){
            som.classList.add('ativa');
        } 
    }

    som.onkeyup = function(){
        som.classList.remove('ativa');
    }

}

