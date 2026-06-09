import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../models.js/produto';
import { CartService } from '../cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-loja',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './loja.html',
  styleUrl: './loja.css',
})
export class Loja {
  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Yamaha R1',
      descricao:
        'Yamaha YZF-R1 é uma superesportiva icônica de 1000cc, lançada em 1998, conhecida por seu alto desempenho e tecnologia derivada da MotoGP.',
      preco: 149.45,
      imgs: ['https://i0.statig.com.br/bancodeimagens/d6/af/bs/d6afbswwobiad3swbgbxy5h1m.jpg'],
      estoque: 10,
    },

    {
      id: 2,
      nome: 'CB 1000R',
      descricao:
        'CB 1000R é uma motocicleta esportiva da Honda, conhecida por seu design aerodinâmico e desempenho potente.',
      preco: 78.87,
      imgs: [
        'https://th.bing.com/th/id/R.70ec7a3fbf8fed9dfb5f6a7799f131dd?rik=Ax06d1LnJrRZ4g&riu=http%3a%2f%2fmotos-b60.kxcdn.com%2fsites%2fdefault%2ffiles%2fhonda-cb-1000-r-2020.jpg&ehk=12u0%2fv4siar%2bXS5tZAvf6SKBoYij37eakne7Vb2Cvww%3d&risl=&pid=ImgRaw&r=0',
      ],
      estoque: 10,
    },

    {
      id: 3,
      nome: 'kawasaki Ninja',
      descricao:
        'kawasaki Ninja ZX-10R é uma motocicleta esportiva da Kawasaki, conhecida por seu design aerodinâmico e desempenho potente.',
      preco: 120.49,
      imgs: [
        'https://cdpcdn.dx1app.com/products/USA/KA/2026/MC/SUPERSPORT/NINJA_ZX-10R/50/LIME_GREEN_-_BLUE_24/2000000003.jpg',
      ],
      estoque: 10,
    },
    {
      id: 4,
      nome: 'BMW R1200',
      descricao:
        'BMW R1200 é uma motocicleta esportiva da BMW, conhecida por seu design aerodinâmico e desempenho potente.',
      preco: 199.9,
      imgs: [
        'https://thf.bing.com/th/id/OIP.AY8UToCyw1YrCRVXL9RsRQHaF2?r=0&o=7&cb=thfc1falconrm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
      ],
      estoque: 10,
    },
    {
      id: 5,
      nome: 'BMW S1000R',
      descricao:
        'BMW S1000r é uma motocicleta esportiva da BMW, conhecida por seu design aerodinâmico e desempenho potente.',
      preco: 179.9,
      imgs: [
        'https://img.magnific.com/fotos-premium/bmw-s1000rr-uma-moto-esportiva-de-precisao-com-motocicleta-eletronica-avancada-em-fundo-branco-limpo_655090-728640.jpg',
      ],
      estoque: 10,
    },
    {
      id: 6,
      nome: 'Yamaha mt-09',
      descricao:
        'Yamaha mt-09 é uma motocicleta esportiva da Yamaha, conhecida por seu design aerodinâmico e desempenho potente.',
      preco: 129.9,
      imgs: [
        'https://th.bing.com/th/id/R.924caccf2a4ac4d20ecc0e3413fa5a59?rik=0X9BTINyOLOHhQ&riu=http%3a%2f%2fwww.mcnews.com.au%2fwp-content%2fuploads%2f2016%2f10%2f2017-Yamaha-MT-09-24.jpg&ehk=DlaVERBe9eE%2fNlyt6qdWfXv4lsWwiedGT9XuD1pDMIc%3d&risl=&pid=ImgRaw&r=0',
      ],
      estoque: 10,
    },
  ];

  cartService = inject(CartService);

  adicionarAoCarrinho(produto: Produto) {
    this.cartService.adicionarAoCarrinho(produto);
  }
}
