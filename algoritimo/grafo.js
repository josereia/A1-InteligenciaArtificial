//Distância rodoviária: Distância entre os NÓs/Vértices entre sí, distância das estradas. Equivale ao custo das arestas.
//Distância euclidiana: Distância em linha reta entre os NÓs/Vértices e a capital Florianópolis(Objetivo final)


//Classe que estrutura as cidades. Os objetos dessa classe equivalem aos NÓs/Vértices do grafo.
class Cidade {
    constructor(nomeCidade, distanciaEuclidiana) {
        this.nomeCidade = nomeCidade;
        this.distanciaEuclidiana = distanciaEuclidiana
        this.cidadesVizinhas = []
        this.foiVisitado = false
    }

    inserirCidadeVizinha(CidadeVizinha) {
        this.cidadesVizinhas.push(CidadeVizinha)
    }

    mostrarCidadesVizinhas() {
        this.cidadesVizinhas.forEach(element => {
            console.log(element.cidade.nomeCidade, element.distanciaRodoviaria)
        });
    }
}

//Classe que estrutura as cidades vizinhas. Equivale aos NÓs/Vértces adjacentes no grafo.
class CidadeVizinha {
    constructor(cidade, distanciaRodoviaria) {
        this.cidade = cidade
        this.distanciaRodoviaria = distanciaRodoviaria //É o custo das arestas

        //Heuristica A* faz a soma da distância euclidiana com a rodoviária
        this.heuristicaAStar = cidade.distanciaEuclidiana + this.distanciaRodoviaria
    }
}

//Estrutura do grafo. Classe responsável por instanciar as duas anteriores e fazer a ligação entre os NÓs/Vértices
class Grafo {
    constructor() {
        //Cidades com distância euclidiana
        this.joinville = new Cidade('Joinville', 147)
        this.itajai = new Cidade('Itajaí', 77)
        this.canoinhas = new Cidade('Canoinhas', 242)
        this.riodosul = new Cidade('Rio do sul', 116)
        this.videira = new Cidade('Videira', 266)
        this.camposnovos = new Cidade('Campos Novos', 265)
        this.lages = new Cidade('Lages', 177)
        this.saojoaquim = new Cidade('São Joaquim', 158)
        this.criciuma = new Cidade('Criciúma', 145)
        this.tubarao = new Cidade('Tubarão', 108)
        this.floripa = new Cidade('Florianópolis', 0)

        //Cidades vizinhas, as cidades vizinhas usam a distância rodoviária
        this.joinville.inserirCidadeVizinha(new CidadeVizinha(this.itajai, 88))
        this.joinville.inserirCidadeVizinha(new CidadeVizinha(this.canoinhas, 197))

        this.itajai.inserirCidadeVizinha(new CidadeVizinha(this.joinville, 88))
        this.itajai.inserirCidadeVizinha(new CidadeVizinha(this.canoinhas, 264))
        this.itajai.inserirCidadeVizinha(new CidadeVizinha(this.riodosul, 143))
        this.itajai.inserirCidadeVizinha(new CidadeVizinha(this.floripa, 99))

        this.canoinhas.inserirCidadeVizinha(new CidadeVizinha(this.joinville, 197))
        this.canoinhas.inserirCidadeVizinha(new CidadeVizinha(this.itajai, 264))
        this.canoinhas.inserirCidadeVizinha(new CidadeVizinha(this.riodosul, 255))
        this.canoinhas.inserirCidadeVizinha(new CidadeVizinha(this.videira, 196))

        this.riodosul.inserirCidadeVizinha(new CidadeVizinha(this.canoinhas, 255))
        this.riodosul.inserirCidadeVizinha(new CidadeVizinha(this.itajai, 143))
        this.riodosul.inserirCidadeVizinha(new CidadeVizinha(this.floripa, 195))
        this.riodosul.inserirCidadeVizinha(new CidadeVizinha(this.saojoaquim, 196))
        this.riodosul.inserirCidadeVizinha(new CidadeVizinha(this.lages, 129))
        this.riodosul.inserirCidadeVizinha(new CidadeVizinha(this.videira, 190))

        this.videira.inserirCidadeVizinha(new CidadeVizinha(this.canoinhas, 196))
        this.videira.inserirCidadeVizinha(new CidadeVizinha(this.riodosul, 190))
        this.videira.inserirCidadeVizinha(new CidadeVizinha(this.lages, 187))
        this.videira.inserirCidadeVizinha(new CidadeVizinha(this.camposnovos, 64))

        this.camposnovos.inserirCidadeVizinha(new CidadeVizinha(this.videira, 64))
        this.camposnovos.inserirCidadeVizinha(new CidadeVizinha(this.lages, 126))

        this.lages.inserirCidadeVizinha(new CidadeVizinha(this.camposnovos, 126))
        this.lages.inserirCidadeVizinha(new CidadeVizinha(this.videira, 187))
        this.lages.inserirCidadeVizinha(new CidadeVizinha(this.riodosul, 129))
        this.lages.inserirCidadeVizinha(new CidadeVizinha(this.saojoaquim, 80))

        this.saojoaquim.inserirCidadeVizinha(new CidadeVizinha(this.lages, 80))
        this.saojoaquim.inserirCidadeVizinha(new CidadeVizinha(this.riodosul, 196))
        this.saojoaquim.inserirCidadeVizinha(new CidadeVizinha(this.floripa, 234))
        this.saojoaquim.inserirCidadeVizinha(new CidadeVizinha(this.tubarao, 133))
        this.saojoaquim.inserirCidadeVizinha(new CidadeVizinha(this.criciuma, 115))

        this.criciuma.inserirCidadeVizinha(new CidadeVizinha(this.saojoaquim, 115))
        this.criciuma.inserirCidadeVizinha(new CidadeVizinha(this.tubarao, 65))

        this.tubarao.inserirCidadeVizinha(new CidadeVizinha(this.floripa, 143))
        this.tubarao.inserirCidadeVizinha(new CidadeVizinha(this.saojoaquim, 133))
        this.tubarao.inserirCidadeVizinha(new CidadeVizinha(this.criciuma, 65))

        this.floripa.inserirCidadeVizinha(new CidadeVizinha(this.itajai, 99))
        this.floripa.inserirCidadeVizinha(new CidadeVizinha(this.riodosul, 195))
        this.floripa.inserirCidadeVizinha(new CidadeVizinha(this.saojoaquim, 234))
        this.floripa.inserirCidadeVizinha(new CidadeVizinha(this.tubarao, 143))
    }
}

//Exporta a classe grafo para ser utilizada nos outros arquivos
export { Grafo }