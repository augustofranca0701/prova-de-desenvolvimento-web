document
  .querySelector("#add-habilidade")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var novaHabilidade = document.querySelector("#habilidade").value;
    var novoNivel = document.querySelector("#experiencia").value;

    var novaLinha = document.createElement("tr");
    novaLinha.innerHTML =
      "<td>" + novaHabilidade + "</td><td>" + novoNivel + "</td>";

    document.querySelector("#habilidades tbody").appendChild(novaLinha);

    document.querySelector("#habilidade").value = "";
    document.querySelector("#experiencia").value = "iniciante";
  });
