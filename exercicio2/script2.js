/*
Descrição: Criar uma página HTML usando apenas JavaScript para criar
dinamicamente toda a estrutura necessária para simular um contador 
de likes em uma postagem fictícia em uma rede social. O contador 
aumentará cada vez que o botão de "Curtir" for clicado. Quando o contador 
atingir um número mínimo de likes (por exemplo, 10), a mensagem de 
"Postagem Popular" deve aparecer.
 */

const contador = document.getElementById('contador')
const status = document.getElementById('status')

let numeroCurtidas = 0
let minimoCurtidas = 10

function curtir() {
    numeroCurtidas++
    contador.textContent = numeroCurtidas

    if (numeroCurtidas >= minimoCurtidas) {
        status.textContent = 'Postagem Popular'
        status.className = 'popular'
    } else if (numeroCurtidas === 1) {
        status.textContent = 'Pessoa curtiu'
        status.className = 'umaPessoa'
    } else {
        status.textContent = 'Pessoas curtiram'
        status.className = 'aguardando...'
    }
}