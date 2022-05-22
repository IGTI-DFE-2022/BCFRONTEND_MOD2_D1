import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CardapioItem } from 'src/app/model/cardapio-item';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss'],
})
export class PedidoComponent implements OnInit {
  totalItems = 0;
  items$!: Observable<{ item: CardapioItem; quantity: number }[]>;

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.items$ = this.carrinhoService.getItems();
    this.carrinhoService
      .getTotalItems()
      .pipe(
        tap((items) => {
          this.totalItems = items;
        })
      )
      .subscribe();
  }

  getItems() {
    return this.items$;
  }

  getTotalValue() {
    return this.carrinhoService.getTotalValue();
  }
}
