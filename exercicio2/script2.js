/*
Descrição: Criar uma página HTML usando apenas JavaScript para criar
dinamicamente toda a estrutura necessária para simular um contador 
de likes em uma postagem fictícia em uma rede social. O contador 
aumentará cada vez que o botão de "Curtir" for clicado. Quando o contador 
atingir um número mínimo de likes (por exemplo, 10), a mensagem de 
"Postagem Popular" deve aparecer.
 */

const h1 = document.createElement('h1')
h1.textContent = 'Contador de likes'
document.body.appendChild(h1)  //inclui na DOM

const container = document.createElement('div')
container.setAttribute('class', 'container')
document.body.appendChild(container)

const h2 = document.createElement('h2')
h2.textContent = 'Postagem'
container.appendChild(h2)

const contador = document.createElement('p')
contador.setAttribute('id', 'contador')
contador.textContent = '0'
container.appendChild(contador)

const status = document.createElement('p')
status.classList.add('aguardando')
status.textContent = 'Seja o primeiro a curtir'
container.appendChild(status)

const button = document.createElement('button')
button.textContent =  'Curtir'
container.appendChild(button)

let numeroLikes = 0
const minimoLikes = 10

function incrementarLikes() {
    numeroLikes++
    contador.textContent = numeroLikes

    if (numeroLikes >= minimoLikes) {
        status.textContent = 'Postagem Popular'
        status.classList.replace('aguardando', 'popular')
    } else {
        status.textContent = 'Seja o primeiro a curtir'
        status.classList.replace('popular', 'aguardando')
    }
}

button.onclick = incrementarLikes