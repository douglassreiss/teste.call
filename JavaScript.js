function calcularRaiz() {
 const numero = parseFloat(display.value);
 if (!isNaN(numero) && numero >= 0) {
 const resultado = Math.sqrt(numero);
 display.value = resultado;
 expressao = resultado.toString();
 } else {
 display.value = 'Erro';
 expressao = '';
 }
}