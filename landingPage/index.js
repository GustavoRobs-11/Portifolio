function calculadora(){
    window.location.href = "/calculadora/calculadora.html";
}
function codeCalculadora(){
    window.open("https://github.com/GustavoRobs-11/mini-projetos/tree/main/calculadora");
}
function mario(){
    window.location.href = "/jogo-Mario/jogoMario.html"
}
function codeMario(){
    window.open("https://github.com/GustavoRobs-11/mini-projetos/tree/main/jogo-Mario");
}
function mind(){
    window.open("https://mind-your-359d.vercel.app/");
}
function codeMind(){
    window.open("https://github.com/Mind-your/Mind_Entrega_1_Semestre");
}
function Mytube(){
    window.open("https://gustavorobs-11.github.io/MyTube_Alice-Gustavo/");
}
function CodeMytube(){
    window.open("https://github.com/GustavoRobs-11/MyTube_Alice-Gustavo");
}
function Github(){
    window.open("https://github.com/GustavoRobs-11");
}
function Linkedin(){
    window.open("https://www.linkedin.com/in/gustavo-rss/");
}
const menuH = document.querySelector(".menu-hamburguer");
menuH.addEventListener("click", () => {
    toggleMenu()
});
function toggleMenu(){
    const nav = document.querySelector(".header-menu-responsive");
    menuH.classList.toggle('change');

    if (menuH.classList.contains('change')){
        nav.style.display = 'block';

    } else{
        nav.style.display = 'none';
    }
}

// Captura todos os links da navbar
const links = document.querySelectorAll('.header-menu a, .header-menu-responsive a, .links-footer a ');

// Adiciona um evento de clique para cada link
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Evita o comportamento padrão

        // Obtém o destino da rolagem
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Rola suavemente até a seção
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

let index = 0;
const cards = document.querySelectorAll(".card");
const totalCards = cards.length;
const Voltar = document.querySelector('.btn-voltar');
const Avancar = document.querySelector('.btn-avancar');

function getCardWidth(){
    return cards[0].clientWidth + 25;
}
function getCardsPerPage() {
    return window.innerWidth <= 600 ? 1 : 2; // 1 card por vez em telas pequenas, 2 em telas grandes
}

function updateCards() {
    const CardWidth = getCardWidth();
    const cardsPerPage = getCardsPerPage();
    const offset = -index * CardWidth; // Move proporcionalmente ao número de cards visíveis
    document.querySelector(".projetos").style.transform = `translateX(${offset}px)`;
    if(index == 0){
        Voltar.style.opacity ='0';
    }else{
        Voltar.style.opacity = 1
    }
}

function nextCards() {
    const cardsPerPage = getCardsPerPage();
    if (index < totalCards - cardsPerPage) {
        index++;
        updateCards();
    }
}

function prevCards() {
    if (index > 0) {
        index--;
        updateCards();
    }
}

// Ajusta a posição ao redimensionar a tela
window.addEventListener("resize", () => {
    index = 0; // Reinicia para evitar bugs de largura diferente
    updateCards();
});

updateCards();
