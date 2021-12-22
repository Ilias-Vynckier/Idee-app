import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ideeReducer } from './state/idee.reducer';
import { menuReducer } from './state/menu.reducer';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/idee',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ menu: menuReducer, idee: ideeReducer }, {}),
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppRoutingModule {}
