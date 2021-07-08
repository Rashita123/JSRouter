import { checkRender } from "./checkRender.js";
export const Link = (destinationPath) => {
    const currentPath = window.location.pathname;
    if(currentPath===destinationPath)return;
    const state = {from: currentPath};
    window.history.pushState(state, currentPath, destinationPath);
    checkRender();
    
}