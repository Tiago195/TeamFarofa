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

const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
  const selecionado = document.querySelector('.selecionado');
  for (let i=0; i < tutu.children.length;i++) {
    tutu.children[i].classList.add('not-comfirmado');
  }
  let position = Math.floor(selecionado.getBoundingClientRect().x);
  let root = document.documentElement;
  console.log(position);
  tutu.style.display = 'block'
  tutu.style.transform = 'translateX(0)'
  // tutu.style.width = '1000px'
  selecionado.classList.remove('not-comfirmado')
  selecionado.classList.add('comfirmado');
  // if ()
  root.style.setProperty('--position', `${position - 250}px`);
  // console.log(root.style.setProperty('--position', `${position}px`));
});

 // let position = Math.floor(selecionado.getBoundingClientRect().left);
  // // selecionado.style.left = `${36}px`
  // console.log(position);
  // while (position > 36) {
  //   console.log(position);
  //   position-= 1;
  //   selecionado.style.left = `${position}px`
  // }