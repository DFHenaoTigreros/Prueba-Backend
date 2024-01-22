// Te presentamos el siguiente fragmento de código:
// function f(x, y, z) {
//  let a = x + y;
//  let b = a * z;
//  let c = Math.sin(b);
//  return c;
// }
// Reemplaza los nombres de las variables con nombres más descriptivos que reflejen mejor
// su función.

const sumando1 = Math.round(Math.random() * 9) + 1;
const sumando2 = Math.round(Math.random() * 9) + 1;
const multiplicador = Math.round(Math.random() * 9) + 1;


const calculadoraSeno = (sumando1, sumando2, multiplicador) => {
  const suma = sumando1 + sumando2;
  const multiplicacion = suma * multiplicador;
  const seno = Math.sin(multiplicacion);
  return seno;
};

calculadoraSeno(sumando1, sumando2, multiplicador);