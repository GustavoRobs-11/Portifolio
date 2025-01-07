function home(){
    window.location.href = "/index.html";
}



const startButton = document.getElementById('startButton');
const restartButton = document.getElementById('restartButton');
const pipe = document.getElementById('pipe')
const mario = document.querySelector('.mario');
// Função que inicia o jogo
function startGame(){
    pipe.style.animation = ('pipe-animation 2s infinite linear');
    validacao(); // Chama a função de validação
}

// Função para o pulo do Mario
var jump = () => {
    mario.classList.add('jump'); // Adiciona a classe de pulo
    setTimeout(() => {
        mario.classList.remove('jump'); // Remove a classe de pulo após 500ms
    }, 400);
};
document.addEventListener('keydown', jump); // Evento para detectar quando a tecla é pressionada
 // Variável para verificar se houve colisão

// Função de validação que verifica colisões
function validacao(){

    var pipe = document.querySelector('.pipe');
    var mario = document.querySelector('.mario');
        
    
        loop = setInterval(() => {
            var pipePosition = pipe.offsetLeft;
            var marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); // Posição do Mario
            if (pipePosition <= 120 && pipePosition >= 0 && marioPosition <= 80) {
                // Quando houver colisão entre o Mario e o Pipe
                pipe.style.animation = 'none'; // Para a animação do pipe
                pipe.style.left = `${pipePosition}px`; // Faz o pipe parar

                mario.style.animation = 'none'; // Para a animação do Mario
                mario.style.bottom = `${marioPosition}px`; // Faz o Mario parar no lugar

                mario.src = '/jogo-Mario/imgsMario/game-over.png'; // Troca a imagem do Mario para "game over"
                mario.style.width = '75px'; // Reduz a largura do Mario
                mario.style.marginLeft = '50px'; // Move o Mario para o lado
                clearInterval(loop); // Interrompe o loop de colisão
            }
            
    }, 30)
    
    
}
function voltaPipe(){
    pipe.style.animation = null;
    pipe.style.right = 0
    pipe.style.left = null
}
function voltaMario(){
    mario.style.animation = null; // Para a animação do Mario
    mario.style.bottom = 0;
    mario.src = '/jogo-Mario/imgsMario/mario.gif';
    mario.style.width = '150px';
}

// Função que reinicia o jogo
function restartGame(){
    voltaPipe();
    voltaMario();
    startGame(); // Reinicia o jogo chamando a função startGame

}

startButton.addEventListener('click', () => { 
    startButton.style.display = 'none'; // Esconde o botão de iniciar
    restartButton.style.display = 'inline-block'; // Mostra o botão de reiniciar
    startGame(); // Inicia o jogo
});

// Função para reiniciar o jogo
restartButton.addEventListener('click', () => {
    restartButton.style.display = 'none'; // Esconde o botão de reiniciar
    startButton.style.display = 'inline-block'; // Mostra o botão de iniciar
    restartGame(); // Reinicia o jogo
});

