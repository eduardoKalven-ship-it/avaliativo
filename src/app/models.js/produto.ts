export interface Produto {
    id: number
    nome: string
    descricao: string
    preco: number
    imgs: string
    estoque: number
}

export interface ItemCarrinho {
    produto: Produto;
    quantidade: number;

}