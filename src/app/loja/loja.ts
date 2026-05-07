import { Component, signal } from '@angular/core';


export interface Produto {
  id: number
  nome: string
  descricao: string
  preco: number
  imgs: string
  estoque: number
}

@Component({
  selector: 'app-loja',
  imports: [],
  templateUrl: './loja.html',
  styleUrl: './loja.css',
})
export class Loja { 


produtos: Produto[] = [

  { 
    id: 1,
    nome: 'Yamaha R1',
    descricao: 'Yamaha YZF-R1 é uma superesportiva icônica de 1000cc, lançada em 1998, conhecida por seu alto desempenho e tecnologia derivada da MotoGP.',
    preco: 159.900,
    imgs: '[https://i0.statig.com.br/bancodeimagens/9m/xj/47/9mxj47ud5j8h7vdb8itg7ih6x.jpg]',
    estoque: 10
  },

  {
    id: 2,
    nome: 'CB 1000R',
    descricao: 'CB 1000R é uma motocicleta esportiva da Honda, conhecida por seu design aerodinâmico e desempenho potente.',
    preco: 199.900,
    imgs: '[]',
    estoque: 10
  },

  {
    id: 3,
    nome: 'kawasaki Ninja ZX-10R',
    descricao: 'kawasaki Ninja ZX-10R é uma motocicleta esportiva da Kawasaki, conhecida por seu design aerodinâmico e desempenho potente.',
    preco: 259.900,
    imgs: '[]',
    estoque: 10
  },
  {
    id: 4,
    nome: 'BMW R1200',
    descricao: 'BMW R1200 é uma motocicleta esportiva da BMW, conhecida por seu design aerodinâmico e desempenho potente.',
    preco: 199.900,
    imgs: '[]',
    estoque: 10
  },
  {
    id: 5,
    nome: 'BMW S1000r',
    descricao: 'BMW S1000r é uma motocicleta esportiva da BMW, conhecida por seu design aerodinâmico e desempenho potente.',
    preco: 179.900,
    imgs: '[]',
    estoque: 10
  },
  {
    id: 6,
    nome: 'Yamaha mt-09',
    descricao: 'Yamaha mt-09 é uma motocicleta esportiva da Yamaha, conhecida por seu design aerodinâmico e desempenho potente.',
    preco: 129.900,
    imgs: '[]',
    estoque: 10
  },

]

  // cria o carrinho
  // guarda produto + quantidade
  carrinho = signal<{ produto: Produto, quantidade: number }[]>([]);




  // adiciona produto ao carrinho
  adicionarAoCarrinho(produto: Produto) {

    // impede adicionar produto sem estoque
    if (produto.estoque <= 0) {
      console.log('Produto esgotado!');
      return;
    }

    // procura produto dentro do carrinho
    const itemNoCarrinho = this.carrinho().find(
      (item) => item.produto.id === produto.id
    );

    // se já existir
    if (itemNoCarrinho) {

      // aumenta quantidade
      itemNoCarrinho.quantidade += 1;

      // atualiza signal
      this.carrinho.update((itens) => [...itens]);

    } else {

      // se não existir adiciona novo item
      this.carrinho.update((itens) => [
        ...itens,

        {
          produto: produto,
          quantidade: 1
        }

      ]);

    }

  }
}