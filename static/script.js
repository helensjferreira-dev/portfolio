const button = document.getElementById("hamburger");
const menu = document.getElementById("menu");

button.addEventListener("click", () => {
  // alterna a classe que mostra/esconde o menu
  menu.classList.toggle("ativa");
});
// ano atual no rodapé
const ano = document.getElementById("ano");
ano.textContent = new Date().getFullYear();
