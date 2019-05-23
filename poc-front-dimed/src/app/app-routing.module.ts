import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimeiraTelaComponent } from './component/primeira-tela/primeira-tela.component';

const routes: Routes = [
  { path: 'home', component: PrimeiraTelaComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
