import {card1Template} from "../card-template1/card1-template.js";
import {card2Template} from "../card-template2/card2-template.js";
import {cardOriginal} from "../../card-original/cardOriginal.js";

export function navbar(){
    return `
    <div class="navbar">
        <a id="original">Card Original</a>
        <a id="card1">Card Template 1</a>
        <a id="card2">Card Template 2</a>
    </div>
    <h1>

        Use a barra de navegação acima para transitar entre os modelos!

    </h1>
    <section id="cardChosen"></section>
    `
}
const cardContent = {
    original: cardOriginal(),
    card1: card1Template(),
    card2: card2Template()
}

function loadCSS(path) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = path;
    link.id = 'dynamic-css';  // Adicione um id para referenciar a folha de estilo
    document.head.appendChild(link);
}
function clearCSS() {
    const linkElement = document.getElementById('dynamic-css');
    if (linkElement) {
        document.head.removeChild(linkElement);
    }
}
export function navEventListener(){
    let sectionTag = document.getElementById('cardChosen')

    document.querySelector('.navbar').addEventListener('click', function(event) {
        event.preventDefault();
        const target = event.target;
        if (!target.id) {
            sectionTag.innerHTML = `<h1>No Cards Available</h1>`
        }
        sectionTag.innerHTML = cardContent[target.id]
        clearCSS(); // limpa o CSS existente
        switch (target.id) {
            case 'original':
                loadCSS('../../card-original/card-grid.css');
                break;
            case 'card1':
                loadCSS('./components/card-template1/card-grid1.css');
                break;
            case 'card2':
                loadCSS('./components/card-template2/card-grid2.css');
                break;

        }
    });
}

