//Importa a classe lista ordenada
import { ListaOrdenada } from "./listaOrdenada.js"

//Classe do algoritimo
class AStar {
    constructor(estadoFinal) {
        this.estadoFinal = estadoFinal
        this.foiEncontrado = false
        this.caminhoPercorrido = []
    }

    buscar(estadoAtual) {
        console.log("----------------------------------- \n" + estadoAtual.nomeCidade)
        this.caminhoPercorrido.push(estadoAtual.nomeCidade)

        estadoAtual.foiVisitado = true

        //Verifica se o estado atual é o estado final
        if (estadoAtual == this.estadoFinal) {
            //Se sim, define como encontrado
            this.foiEncontrado = true
        } else {
            //Se não, instancia a lista ordenada como cidades/Nós a visitar
            let aVisitar = new ListaOrdenada()

            //Percorre todas as cidades/NÓs vizinhos do estadoAtual/cidade atual
            estadoAtual.cidadesVizinhas.forEach(element => {
                //Se ainda não foi visitado
                if (element.cidade.foiVisitado == false) {
                    //Define a cidade/Nó como visitado
                    element.cidade.foiVisitado = true

                    //Insere na lista ordenada de cidades/NÓs a visitar ainda
                    aVisitar.inserir(element)
                }
            });

            //Exibe os itens dentro da lista no console, toda vez que o método buscar é chamado
            aVisitar.exibir()

            //Verifica se ainda existem cidades a visitar
            if (aVisitar.cidadesVizinhas[0] != null) {
                //Se sim, usando a recursividade, o método buscar é chamado novamente tendo como parametro o estado atual que é o primeiro item da lista pois é o que possui o menor custo
                this.buscar(aVisitar.cidadesVizinhas[0].cidade)
            }
        }
    }
}

//Exporta a classe A* para ser usada em outros arquivos
export { AStar }