var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var A = parseInt(prompt("Informe o valor de A"));
var B = parseInt(prompt("Informe o valor de B"));
var PROD = A * B;

console.log("PROD = " + PROD);