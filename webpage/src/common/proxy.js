export function logging(obj) {
    return new Proxy(obj, {
       get(target, prop) {
           console.log(`Property ${prop} was got`);
           return target[prop];
       } 
    });
}