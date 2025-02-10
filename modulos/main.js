// math.js
export function somar(a, b) {
     // Validação de tipos
     if (typeof a !== 'number' || typeof b !== 'number') {
          throw new Error("Ambos os argumentos devem ser números");
     }

     // Cálculo complexo
     let resultado = a + b;
     resultado = resultado * 2; // Exemplo de operação adicional
     if (resultado > 100) {
          resultado = 100; // Limita o valor a 100
     }

     // Retorno do resultado
     return resultado;
}