// const ppf = document.getElementById('select-project');
// const todoProjeto = document.getElementById('todos-projetos');

// const projetos = {
//   'pixels-art': 'https://breno5g.github.io/projects/pixels/',
  
// }


// ppf.addEventListener('click', () => {
//   for (let i in projetos) {
//     console.log(i);
//     if (ppf.value === i) {
//       todoProjeto.removeAttribute("src")
//       todoProjeto.className = 'todos-Projetos'
//       todoProjeto.setAttribute("src", projetos[i]);
//     }
//   }
// });


const tutu = document.querySelector('.teste-container');

tutu.addEventListener('click', (e) => {
  if (e.target.classList.contains('teste-select')) {
    for (let i=0; i < tutu.children.length;i++) {
      tutu.children[i].classList.remove('selecionado')
      tutu.children[i].classList.add('not-selecionado')
      // tutu.children[i].style.boxShadow = 'none'
    }
    e.target.classList.add('selecionado');
    e.target.classList.remove('not-selecionado')
  }
});
