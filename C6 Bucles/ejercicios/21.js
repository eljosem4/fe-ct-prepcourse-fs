function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  let currentNumber = numero;
  let power = 1
  while (currentNumber > 1){
    currentNumber /= 2;
    power *= 2;
  }
  return currentNumber === 1;
}

module.exports = esPotenciaDeDos;
