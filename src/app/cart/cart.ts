import { Component, inject } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cartService = inject(CartService);

  carrinho = this.cartService.carrinho;

  ngOnInit() {
    this.carrinho = this.cartService.carrinho;
    console.log(this.carrinho());
  }

  removerDoCarrinho(produtoId: number) {
    this.cartService.removerDoCarrinho(produtoId);
  }

  calcularTotal() {
    return this.cartService.calcularTotal();
  }
}
