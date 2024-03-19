import {navbar, navEventListener} from "./components/navbar/navbar.js";
import {card1Template} from "./components/card-template1/card1-template.js";

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML += navbar()
    navEventListener()
})

