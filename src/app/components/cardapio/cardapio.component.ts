import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CardapioItem } from 'src/app/model/cardapio-item';
import { CardapioService } from 'src/app/services/cardapio.service';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss'],
})
export class CardapioComponent implements OnInit {
  categories!: Observable<string[]>;

  constructor(
    private cardapioService: CardapioService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit(): void {
    this.categories = this.cardapioService.getCategories();
  }

  getItemsFromCategory(category: string) {
    return this.cardapioService.getItemsFromCategory(category);
  }

  addToCart(item: CardapioItem) {
    this.carrinhoService.addItem(item);
  }

  getTotalItems() {
    return this.carrinhoService.getTotalItems();
  }

  getTotalValue() {
    return this.carrinhoService.getTotalValue();
  }
}
