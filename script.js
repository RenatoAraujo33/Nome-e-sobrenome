function exibirNomeCompleto() {
    var nome = document.getElementById("nomeInput").value;
    var sobrenome = document.getElementById("sobrenomeInput").value;
    var nomeCompleto = nome + " " + sobrenome;
    document.getElementById("nomeCompleto").textContent = nomeCompleto;
  }