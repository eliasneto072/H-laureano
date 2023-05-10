var medico = document.querySelector("#funcao-medico");
var area = document.querySelector("#form-area");
var enfermeiro = document.querySelector("#funcao-enfermeiro");
var atendente = document.querySelector("#funcao-atendente");
var voluntario = document.querySelector("#funcao-voluntario");
var outros = document.querySelector("#funcao-outros");
var funcao = document.querySelector("#funcao-informe");

medico.addEventListener("click", function () {
  if (medico.checked) {
    funcao.disabled = true;
    area.disabled = false;
  }
});

enfermeiro.addEventListener("click", function () {
  if (enfermeiro.checked) {
    funcao.disabled = true;
    area.disabled = true;
  }
});

atendente.addEventListener("click", function () {
  if (atendente.checked) {
    funcao.disabled = true;
    area.disabled = true;
  }
});

voluntario.addEventListener("click", function () {
  if (voluntario.checked) {
    funcao.disabled = true;
    area.disabled = true;
  }
});

outros.addEventListener("click", function () {
  if (outros.checked) {
    funcao.disabled = false;
    area.disabled = true;
  }
});