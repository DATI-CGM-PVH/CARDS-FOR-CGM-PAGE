import {navbar} from "./components/navbar/navbar.js";
import {card1Tempalte} from "./components/card-template1/card1-tempalte.js";

function main_view() {
    return`
        <h1>Use a barra de navegação acima para transitar entre os modelos!</h1>
    `
}

document.addEventListener('DOMContentLoaded', () => {
    //document.body.innerHTML += navbar()
    //document.body.innerHTML += main_view()
    document.body.innerHTML += card1Tempalte()
})

