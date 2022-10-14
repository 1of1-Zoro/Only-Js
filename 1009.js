var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var nomeDoVendedor = prompt("Informe o nome do vendedor:");
var salarioFixo =  parseFloat(prompt("Informe o salário fixo do vendedor"));
var valorTotalDasVendas = parseFloat(prompt("Informe o valor total (em reais) das vendas"));

var comissao = valorTotalDasVendas * 0.15;

var salarioTotal = salarioFixo + comissao;

console.log("TOTAL = R$ " + salarioTotal.toFixed(2));