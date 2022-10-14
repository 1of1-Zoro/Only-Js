var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var funcionario = parseInt(prompt("Informe o nº do funcionário")); 
var qtdHorasTrabalhadas = parseInt(prompt("Informe quantas horas foram trabalhadas")) ;
var valorHora = parseFloat(prompt("Informe o valor recebido por hora"));

var salario = qtdHorasTrabalhadas * valorHora;

console.log("NUMBER = " + funcionario); 
console.log("SALARY = U$ " + salario.toFixed(2)); 