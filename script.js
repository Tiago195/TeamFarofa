const ppf = document.getElementById('select-project');
const todoProjeto = document.getElementById('todos-projetos');

const projetos = {
  'pixels-art': 'https://breno5g.github.io/projects/pixels/',

}


ppf.addEventListener('click', () => {
  for (let i in projetos) {
    console.log(i);
    if (ppf.value === i) {
      todoProjeto.removeAttribute("src")
      todoProjeto.className = 'todos-Projetos'
      todoProjeto.setAttribute("src", projetos[i]);
    }
  }
})