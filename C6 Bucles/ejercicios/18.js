function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
 
  if (a === 0 || b === 0) {
    return 0;  
  }

  if (a === b) {
    return a;  
  }

  
  if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
    return 0;  
  }

  let resultado = 1;

  if (a <= b) {
    for (let i = a; i <= b; i++) {
      resultado *= i;
    }
  } else {
    for (let i = a; i >= b; i--) {
      resultado *= i;
    }
  }

  return resultado;
}  

module.exports = productoEntreNúmeros;