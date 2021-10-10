//Importa as classes grafo e do algoritimo
import { Grafo } from "./algoritimo/grafo.js"
import { AStar } from "./algoritimo/astar.js"

//Cria instância dessas classes
let grafo = new Grafo()
let astar = new AStar(grafo.floripa) //Como argumento da classe do algoritimo é passado o nó destino, o estado final.

//Elementos do DOM html
const button = document.querySelector("button")
const comboBox = document.querySelector("select")
const result = document.querySelector("#result")

//Ação ao clicar no botão de encontrar caminho
button.onclick = () => {
    //Identifica a cidade de partida a partir do comboBox
    switch (comboBox.selectedIndex) {
        case 0:
            //Inicia a busca parrando como argumento a cidade origem que equivale ao estado inicial
            astar.buscar(grafo.joinville)
            showResult()
            break
        case 1:
            astar.buscar(grafo.itajai)
            showResult()
            break
        case 2:
            astar.buscar(grafo.canoinhas)
            showResult()
            break
        case 3:
            astar.buscar(grafo.riodosul)
            showResult()
            break
        case 4:
            astar.buscar(grafo.videira)
            showResult()
            break
        case 5:
            astar.buscar(grafo.camposnovos)
            showResult()
            break
        case 6:
            astar.buscar(grafo.lages)
            showResult()
            break
        case 7:
            astar.buscar(grafo.criciuma)
            showResult()
            break
        case 8:
            astar.buscar(grafo.tubarao)
            showResult()
            break
    }
}

//Exibe o caminho na tela/html
function showResult() {
    astar.caminhoPercorrido.forEach(element => {
        result.innerHTML += " -> " + element
    });
}