import { Component } from '@angular/core';


export interface produto {
  id: number
  nome: string
  descricao: string
  preco: number
  imgs: string
}

@Component({
  selector: 'app-loja',
  imports: [],
  templateUrl: './loja.html',
  styleUrl: './loja.css',
})
export class Loja { 


produtos: produto[] = [
  {
    id: 1,
    nome: 'Yamaha R1',
    descricao: 'Yamaha YZF-R1 é uma superesportiva icônica de 1000cc, lançada em 1998, conhecida por seu alto desempenho e tecnologia derivada da MotoGP.',
    preco: 159.900,
    imgs: '[]',
  },

  {
    id: 2,
    nome: 'CB 1000R',
    descricao: 'CB 1000R é uma motocicleta esportiva da Honda, conhecida por seu design aerodinâmico e desempenho potente.',
    preco: 199.900,
    imgs: '[]',
  },

  {
    id: 3,
    nome: 'kawasaki Ninja ZX-10R',
    descricao: 'kawasaki Ninja ZX-10R é uma motocicleta esportiva da Kawasaki, conhecida por seu design aerodinâmico e desempenho potente.',
    preco: 259.900,
    imgs: '[]',
  },
  {
    id: 4,
    nome: 'BMW R1200',
    descricao: 'BMW R1200 é uma motocicleta esportiva da BMW, conhecida por seu design aerodinâmico e desempenho potente.',
    preco: 199.900,
    imgs: '[]',
  },
  {
    id: 5,
    nome: 'BMW S1000r',
    descricao: 'BMW S1000r é uma motocicleta esportiva da BMW, conhecida por seu design aerodinâmico e desempenho potente.',
    preco: 179.900,
    imgs: '[]',
  },
  {
    id: 6,
    nome: 'Yamaha mt-09',
    descricao: 'Yamaha mt-09 é uma motocicleta esportiva da Yamaha, conhecida por seu design aerodinâmico e desempenho potente.',
    preco: 129.900,
    imgs: '[]',
  },

]
}