const player = document.querySelector(".player-container");
const texto = document.querySelector('.texto-container');
const root = document.documentElement;

player.addEventListener("dblclick", (e) => {
  if (
    e.target.classList.contains("player") &&
    !e.target.classList.contains("comfirmado")
    ) {
    texto.classList.add('teste')
    for (let i of player.children) {
      i.classList.add("not-comfirmado");
    }
    e.target.classList.remove("not-comfirmado");
    root.style.setProperty(
      "--x",
      `${-e.target.getBoundingClientRect().x + 100}px`
      );
      root.style.setProperty(
        "--y",
      `${-e.target.getBoundingClientRect().y + 190}px`
      );
      e.target.classList.toggle("comfirmado");
    } else {
      // e.target.classList.add('reiniciar-comfirmado');
      texto.classList.remove('teste')
      for (let i of player.children) {
        i.classList.remove("not-comfirmado");
        // i.classList.remove('reiniciar-comfirmado')
        i.classList.remove("comfirmado");
        i.classList.remove("not-selected");
      }
  }
});

player.addEventListener("click", (e) => {
  if (e.target.classList.contains("player")) {
    for (let i of player.children) {
      i.classList.add("not-selected");
    }
    e.target.classList.remove("not-selected");
  }
});
