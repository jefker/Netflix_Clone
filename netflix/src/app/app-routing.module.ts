import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputFilmeComponent } from './components/input-filme/input-filme.component';
import { FilmesComponent } from './pages/filmes/filmes.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'filmes', component: FilmesComponent},
  { path: 'filmesCadastrar', component: InputFilmeComponent },
  { path: 'login', component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
