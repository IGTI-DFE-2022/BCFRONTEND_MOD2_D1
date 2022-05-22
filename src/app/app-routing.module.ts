import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { PedidoComponent } from './components/pedido/pedido.component';

const routes: Routes = [
  { path: 'cardapio', component: CardapioComponent },
  { path: 'pedido', component: PedidoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
