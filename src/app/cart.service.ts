import { Injectable, signal } from '@angular/core';
import { Produto } from './models.js/produto';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  carrinho = signal<{ produto: Produto; quantidade: number }[]>([]);

  adicionarAoCarrinho(produto: Produto) {
    const itemNoCarrinho = this.carrinho().find((item) => item.produto.id === produto.id);

    if (itemNoCarrinho) {
      itemNoCarrinho.quantidade += 1;

      this.carrinho.update((itens) => [...itens]);
    } else {
      this.carrinho.update((itens) => [
        ...itens,
        {
          produto: produto,
          quantidade: 1,
        },
      ]);
    }

    console.log(this.carrinho());
  }

  removerDoCarrinho(produtoId: number) {
    this.carrinho.update((itens) => itens.filter((item) => item.produto.id !== produtoId));
  }

  calcularTotal() {
    return this.carrinho().reduce((total, item) => total + item.produto.preco * item.quantidade, 0);
  }
}
