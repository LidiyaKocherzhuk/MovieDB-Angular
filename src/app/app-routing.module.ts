import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MoviesModule} from "./modules/movies/movies.module";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/movies/movies.module')
      .then(module => module.MoviesModule),
  }
]

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MoviesModule
  ],
  exports: [
    RouterModule,
    HttpClientModule,
  ],
  providers: [],
})
export class AppRoutingModule {
}
