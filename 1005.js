var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var notaA = parseFloat(prompt("Informe o valor da nota A"));
var notaB = parseFloat(prompt("Informe o valor da nota B"));

pesoNotaA = 3.5; 
pesoNotaB = 7.5; 
pesoNota = pesoNotaA + pesoNotaB;

var media = ((notaA * pesoNotaA) + (notaB * pesoNotaB))/pesoNota;

console.log("MEDIA = " + media.toFixed(5));