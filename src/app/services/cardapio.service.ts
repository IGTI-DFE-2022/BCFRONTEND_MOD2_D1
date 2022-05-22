import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { CardapioItem } from '../model/cardapio-item';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CardapioService {
  cardapio: CardapioItem[] = [];

  constructor(private http: HttpClient) {}

  getFullCardapio(): Observable<CardapioItem[]> {
    if (this.cardapio && this.cardapio.length > 0) {
      return of(this.cardapio);
    }
    return this.http
      .get<CardapioItem[]>(
        environment.backendUrl + environment.cardapioEndpoint
      )
      .pipe(tap((items) => (this.cardapio = items)));
  }

  getCategories(): Observable<string[]> {
    return this.getFullCardapio().pipe(
      map((items) => {
        let categories = new Set<string>();
        items.forEach((item) => {
          categories.add(item.categoria);
        });
        return Array.from(categories);
      })
    );
  }

  getItemsFromCategory(category: string) {
    return this.getFullCardapio().pipe(
      map((items) => {
        return items.filter((item) => item.categoria === category);
      })
    );
  }
}
