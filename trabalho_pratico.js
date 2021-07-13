/* var botao = document.getElementById("btn");
botao.addEventListener(
  "click",
  simular
); /* pasa o evento click ao botão e a funçãoq que implementa os calculos*/
simular();
function simular() {
  let valor1 = document.getElementById("valor");
  let prazo_anos = document.getElementById("prazo");
  let juros_anos1 = document.getElementById("juros_ano");

  let valor_numerico = valor1.valueAsNumber;
  let prazo_anos_numerico = prazo_anos.valueAsNumber;
  let juros_anos_numerico = juros_anos1.valueAsNumber;
  let prazo_meses_resultado = prazo_anos_numerico * 12;
  let juros_ao_mes = (1 + juros_anos_numerico) ** (1 / 12) - 1;
  let amortizacao = valor_numerico / prazo_meses_resultado;

  let juros_acumulados = 0;
  for (let i = 0; i < prazo_meses_resultado; i++) {
    let saldoDevedor = valor_numerico - amortizacao * i;
    let juros_mes = saldoDevedor * juros_ao_mes;
    let prestacao = juros_mes + amortizacao;
    juros_acumulados += juros_mes;

    let para = document.createElement("P"); // Crie um nó <p>
    let t = document.createTextNode(i + 1); // Cria um nó de texto
    para.appendChild(t); // Anexe o texto a <p>

    let amortizacao_por_mes = document.createElement("p");
    let amort = document.createTextNode(amortizacao.toFixed(2));
    /* converte um valor numerico em uma string com 2 decimales*/
    amortizacao_por_mes.append(amort);

    let juros_por_mes = document.createElement("p");
    let juros_mes_valor = document.createTextNode(juros_mes.toFixed(2));
    /* converte um valor numerico em uma string com 2 decimales*/
    juros_por_mes.append(juros_mes_valor);

    let prestacao_valor = document.createElement("p");
    let prestacao_pagar = document.createTextNode(prestacao.toFixed(2));
    prestacao_valor.appendChild(prestacao_pagar);
    if (i < 5) {
      document.getElementById("id_prestacoes").appendChild(para); // Anexar <p> a <div> com id = "id_prestacoes"
      document
        .getElementById("amortizacao_por_mes")
        .append(amortizacao_por_mes); // // Anexar <p> a <div> com id = "amortizacao_por_mes"
      document.getElementById("juros_mes").append(juros_por_mes); // // Anexar <p> a <div> com id = "amortizacao_por_mes"
      document.getElementById("prestacao").append(prestacao_valor); // // Anexar <p> a <div> com id = "amortizacao_por_mes"
    }
    document.getElementById("juro_mes").innerHTML = juros_ao_mes;
    document.getElementById("prazo_mes").innerHTML = prazo_meses_resultado;
  }
  document.getElementById("juros_acumuado_total").innerHTML =
    juros_acumulados.toFixed(2);
}
