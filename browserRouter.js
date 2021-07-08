import { checkRender } from "./checkRender.js";

export const Root = document.querySelector(".root");
    
window.addEventListener('load', () => {
    const state = {from: null}
    const currentPath = window.location.pathname;
    if (currentPath === '/index.html'){
        window.history.replaceState(state, '/index.html', '/')
    }
    checkRender();
})

window.addEventListener('popstate', () => {
    checkRender();
})

