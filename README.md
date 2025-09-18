<!DOCTYPE html>
<html>
<head>
 <title>Calculadora</title>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <style>
 body {
 font-family: Arial, sans-serif;
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
 background-color: #f0f2f5;
 }
 
 .calculadora {
 background-color: #fff;
 padding: 20px;
 border-radius: 10px;
 box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
 width: 300px;
 }
 
 #display {
 width: 90%;
 height: 50px;
 border: 1px solid #ccc;
 border-radius: 5px;
 margin-bottom: 10px;
 text-align: right;
 padding: 10px;
 font-size: 2em;
 background-color: #e9ecef;
 }
 
 .teclado {
 display: grid;
 grid-template-columns: repeat(4, 1fr);
 gap: 10px;
 }
 
 .botao {
 padding: 20px;
 font-size: 1.2em;
 border: none;
 border-radius: 5px;
 background-color: #e2e6ea;
 cursor: pointer;
 transition: background-color 0.2s;
 }
 
 .operador {
 background-color: #007bff;
 color: white;
 }
 
 .igual {
 grid-column: span 2;
 background-color: #28a745;
 color: white;
 }
 
 .botao:hover {
 background-color: #d1d6db;
 }
 
 .operador:hover {
 background-color: #0056b3;
 }
 
 .igual:hover {
 background-color: #218838;
 }
 </style>
</head>
<body>
 <div class="calculadora">
 <input type="text" id="display" readonly>
 <div class="teclado">
 <button class="botao" onclick="limpar()">C</button>
 <button class="botao" onclick="apagar()">←</button>
 <button class="botao operador"
onclick="adicionarOperador('/')">/</button>
 <button class="botao operador"
onclick="adicionarOperador('*')">*</button>
 <button class="botao" onclick="adicionarNumero(7)">7</button>
 <button class="botao" onclick="adicionarNumero(8)">8</button>
 <button class="botao" onclick="adicionarNumero(9)">9</button>
 <button class="botao operador" onclick="adicionarOperador('-')">-
</button>
 <button class="botao" onclick="adicionarNumero(4)">4</button>
 <button class="botao" onclick="adicionarNumero(5)">5</button>
 <button class="botao" onclick="adicionarNumero(6)">6</button>
 <button class="botao operador"
onclick="adicionarOperador('+')">+</button>
 <button class="botao" onclick="adicionarNumero(1)">1</button>
 <button class="botao" onclick="adicionarNumero(2)">2</button>
 <button class="botao" onclick="adicionarNumero(3)">3</button>
 <button class="botao" onclick="adicionarNumero(0)">0</button>
 <button class="botao">.</button>
 <button class="botao igual" onclick="calcular()">=</button>
 </div>
 </div>
 
 <script>
 const display = document.getElementById('display');
 let expressao = '';
 
 function adicionarNumero(numero) {
 expressao += numero;
 display.value = expressao;
 }
 
 function adicionarOperador(operador) {
 expressao += operador;
 display.value = expressao;
 }
 
 function limpar() {
 expressao = '';
 display.value = '';
 }
 
 function apagar() {
 expressao = expressao.slice(0, -1);
 display.value = expressao;
 }
 
 function calcular() {
 try {
 const resultado = eval(expressao);
 display.value = resultado;
 expressao = resultado.toString();
 } catch (error) {
 display.value = 'Erro';
 expressao = '';
 }
 }
 </script>
</body>
</html>
