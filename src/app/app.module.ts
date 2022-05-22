import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { BarraStatusComponent } from './components/cardapio/barra-status/barra-status.component';
import { PedidoComponent } from './components/pedido/pedido.component';

@NgModule({
  declarations: [AppComponent, CardapioComponent, BarraStatusComponent, PedidoComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
