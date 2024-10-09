console.log('Hello, DOM!')

// history.back()  //volta a pagina anterior
// history.forward()  //avança para a proxima pagina
// history.go(-2)  // navega 2 pags para trás (pra frente é só tirar o -)

const primeiroAluno = document.querySelector('.aluno') 
//buscar tag = nome da tag
//buscar classe = .nomedaclasse
//buscar id = #id
console.log(primeiroAluno)

const todosOsAlunos = document.querySelectorAll('.aluno')
console.log(todosOsAlunos)
console.log(todosOsAlunos[2]) //acessando pela posição do elemento

const alunos = document.getElementsByClassName('aluno') //aq n precisa especificar que é uma classe (com o .) pq o proprio nome ja diz
console.log(alunos)

const aluno1 = document.getElementById('aluno-1')
console.log(aluno1)

const itensLista = document.getElementsByTagName('li')
console.log(itensLista)

const idDoAluno = aluno1.getAttribute('id')  //retorna o valor do atributo
console.log(idDoAluno)

const button = document.getElementById('chamada')
// const button = document.querySelector('#chamada')
button.setAttribute('disabled', 'disabled')

const elements = document.querySelectorAll('li')
const array = [...elements]

array.map(item => item.classList.add('escola'))



