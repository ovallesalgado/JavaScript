const producto = 'Monitor 20 Pulgadas';

//.replace
console.log(producto);
console.log(producto.replace(' Pulgadas','"'));
console.log(producto.replace('Monitor','Monitor curvo'));


//.slice recortar

console.log(producto.slice(0,10));
console.log(producto.slice(8));
console.log(producto.slice(2,1));//no muestra nada

// Alternativa a slice

console.log(producto.substring(0,10));
console.log(producto.substring(2,1));

const usuario= "jhon";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));
