import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-status',
  templateUrl: './barra-status.component.html',
  styleUrls: ['./barra-status.component.scss'],
})
export class BarraStatusComponent implements OnInit {
  @Input() totalItems: number | null = 0;
  @Input() totalValue: number | null = 0;

  constructor() {}

  ngOnInit(): void {}
}
