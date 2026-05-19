import { Injectable, signal } from '@angular/core';
import { ItemCarrinho, Produto } from './models.js/produto';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  carrinho = signal<{ produto: Produto; quantidade: number }[]>([]);



adicionarAoCarrinho(produto: Produto) {

  if (produto.estoque <= 0) {
    console.log('Produto esgotado!');
    return;
  }

  const itemNoCarrinho = this.carrinho().find(
    (item) => item.produto.id === produto.id
  );

  if (itemNoCarrinho) {

    this.carrinho.update((itens) =>
      itens.map((item) =>
        item.produto.id === produto.id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      )
    );

  } else {

    this.carrinho.update((itens) => [
      ...itens,
      {
        produto,
        quantidade: 1
      }
    ]);

  }


  produto.estoque -= 1;
} 


}