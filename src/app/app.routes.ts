import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Loja } from './loja/loja';
import { Cart } from './cart/cart';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'loja', component: Loja },
  { path: 'carrinho', component: Cart },
  { path: '**', redirectTo: '' }
];