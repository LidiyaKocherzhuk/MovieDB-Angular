import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { MoviesModule } from './modules';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules')
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
  ],
  providers: [],
})
export class AppRoutingModule {
}
