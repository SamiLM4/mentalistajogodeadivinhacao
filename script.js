function Chutar() {
  var numeroSecreto = parseInt(Math.random() * 11);
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "você acertou !!";
    console.log("acertou");
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "você deve digitar um número de 0 a 10 !!";
    console.log("você deve digitar um número de 0 a 10");
  } else {
    elementoResultado.innerHTML =
      "você deve chutar um número entre0 e 10, o número secreto era: " + numeroSecreto;
    console.log("errou");
  }

  if (chute < numeroSecreto) {
    elementoResultado.innerHTML = "você chutou um numero muito baixo";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML = "você chutou um numero muito alto";
  }
}
