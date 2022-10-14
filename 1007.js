var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var A = parseInt(prompt("Informe o valor de A"));
var B = parseInt(prompt("Informe o valor de B"));
var C = parseInt(prompt("Informe o valor de C"));
var D = parseInt(prompt("Informe o valor de D"));
var DIFERENCA = (A * B - C * D);

console.log("DIFERENCA = " + DIFERENCA);