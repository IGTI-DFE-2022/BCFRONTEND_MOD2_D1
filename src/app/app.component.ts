import { Component, OnInit } from '@angular/core';
import { CardapioService } from './services/cardapio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private cardapioService: CardapioService) {}

  ngOnInit(): void {
    this.cardapioService
      .getItemsFromCategory('Sanduiches de Boi')
      .subscribe(console.log);
  }
}
