import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdeeCardComponent } from './idee-card/idee-card.component';
import { NewIdeeComponent } from './new-idee/new-idee.component';

const routes: Routes = [
  {
    path: 'idee',
    component: IdeeCardComponent,
  },
  {
    path: 'newidee',
    component: NewIdeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ideeRountingModule {}
