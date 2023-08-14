const salarios = [1500, 2200, 1800, 2500, 1900, 2100, 1700, 3000, 1600, 2800];

// Função para calcular o aumento com base no salário
function calcularAumento(salario) {
  if (salario <= 2000) {
    return salario * 1.15; 
  } else {
    return salario * 1.10; 
  }
}

// Aplicando o método map() para calcular os novos salários com aumentos
const novosSalarios = salarios.map(calcularAumento);

// Exibindo os salários na página HTML
document.getElementById("salariosOriginais").textContent = salarios.join(", ");
document.getElementById("novosSalarios").textContent = novosSalarios.join(", ");

// Filtrando os salários superiores a 2500 usando o método filter()
const salariosAcima2500 = novosSalarios.filter(salario => salario > 2500);

// Exibindo os salários acima de 2500 na página HTML
document.getElementById("salariosAcima2500").textContent = salariosAcima2500.join(", ");

// Usando o método reduce() para somar os valores do array de salários acima de 2500
const somaSalariosAcima2500 = salariosAcima2500.reduce((acumulador, salario) => acumulador + salario, 0);

// Exibindo a soma dos salários acima de 2500 na página HTML
document.getElementById("somaSalariosAcima2500").textContent = somaSalariosAcima2500;

