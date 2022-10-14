var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var a = parseInt(prompt("Digite o valor de A"));
var b = parseInt(prompt("Digite o Valor de B"));

var x = a + b;

console.log ("X = " + x);