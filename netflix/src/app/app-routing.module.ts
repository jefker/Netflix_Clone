import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputFilmeComponent } from './components/input-filme/input-filme.component';
import { FilmesComponent } from './pages/filmes/filmes.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'filmes', component: FilmesComponent},
  { path: 'filmesCadastrar', component: InputFilmeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
