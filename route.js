
export const routeMap = new Map();
export const Route = (path, componentToRenderOnThatPath) => {
    if(!routeMap.get(path)){
        routeMap.set(path, componentToRenderOnThatPath);
    }
}