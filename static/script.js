let button = document.getElementById("hamburger");
const menu = document.getElementById("menu");
button.addEventListener("click", function () {
  menu.classList.toggle("ativa");
});

// ano atual no rodapé

const ano = document.getElementById("ano").textContent=new Date().getFullYear();