//Classe que insere e ordena a lista de cidadesVizinhas em ordem crescente baseado na heuristica g(n) + h(n)
//distância euclidiana + distância rodoviária
class ListaOrdenada {
    constructor() {
        //array
        this.cidadesVizinhas = []
    }

    inserir(cidadeVizinha) {
        //Insere as cidade vizinha/Nó adjacente na lista
        this.cidadesVizinhas.push(cidadeVizinha)

        //Ordena os items na lista em ordem crescente respeitando a heuristica
        this.cidadesVizinhas.sort(function (a, b) {
            return a.heuristicaAStar - b.heuristicaAStar
        })
    }

    //Mostra uma parte do caminho, mostra os itens dentro dessa lista
    exibir() {
        if (this.cidadesVizinhas < 1) {
            console.log("O vetor está vazio")
        } else {
            this.cidadesVizinhas.forEach((element, index) => {
                console.log(index + " - " + element.cidade.nomeCidade + ": " + element.distanciaRodoviaria + " - " + element.cidade.distanciaEuclidiana + " - " + element.heuristicaAStar)
            });
        }
    }
}

//Exporta essa classe para ser usada em outros arquivos
export { ListaOrdenada }