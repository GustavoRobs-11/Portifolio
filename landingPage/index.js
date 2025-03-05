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