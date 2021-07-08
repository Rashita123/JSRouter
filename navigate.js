import { checkRender } from "./checkRender.js";

export const Navigate = (destinationPath, replace) => {
    if(replace!=true && replace!=false){
        replace = false;
    }
    const currentPath = window.location.pathname;
    const state = {from: currentPath};
    if(replace){
        window.history.replaceState(state, currentPath, destinationPath);
    }else{
        window.history.pushState(state, currentPath, destinationPath);
    }
    checkRender();
}