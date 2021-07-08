import { routeMap } from "./route.js";
import { Root } from "./BrowserRouter.js";
export const checkRender = () => {
    const currentPath = window.location.pathname;
    const componentToRender = routeMap.get(currentPath);
    if(componentToRender){
        Root.innerHTML = componentToRender;
    }else{
        Root.innerHTML = routeMap.get('*');
    }
    
}
