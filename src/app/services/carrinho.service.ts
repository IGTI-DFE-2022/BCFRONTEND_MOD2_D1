import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CardapioItem } from '../model/cardapio-item';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  items: CardapioItem[] = [];
  items$: BehaviorSubject<CardapioItem[]> = new BehaviorSubject(this.items);

  constructor() {}

  addItem(cardapioItem: CardapioItem) {
    this.items.push(cardapioItem);
    this.items$.next(this.items);
  }

  cleanCart() {
    this.items = [];
    this.items$.next(this.items);
  }

  getTotalValue() {
    return this.items$.asObservable().pipe(
      map((items) => {
        return items.reduce((prev, curr) => {
          return prev + Math.abs(curr.preco);
        }, 0);
      })
    );
  }

  getTotalItems() {
    return this.items$.asObservable().pipe(
      map((items) => {
        return items.reduce((prev, curr) => {
          return ++prev;
        }, 0);
      })
    );
  }

  getItems(): Observable<{ item: CardapioItem; quantity: number }[]> {
    return this.items$.asObservable().pipe(
      map((items) => {
        let carrinho: { item: CardapioItem; quantity: number }[] = [];

        items.forEach((item) => {
          if (carrinho.some((c) => c.item.descricao === item.descricao)) {
            let index = carrinho.findIndex(
              (c) => c.item.descricao === item.descricao
            );
            carrinho[index].quantity++;
          } else {
            carrinho.push({ item, quantity: 1 });
          }
        });

        return carrinho;
      })
    );
  }
}
