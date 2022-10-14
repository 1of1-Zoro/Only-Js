var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var raio = parseFloat(prompt("Informe o valor do raio"));
var area = (3.14159*(raio**2)).toFixed(4);
console.log("A=" + area);