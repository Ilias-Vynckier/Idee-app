import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdeeTextBoxComponent } from './idee-text-box/idee-text-box.component';
import { NewIdeeComponent } from './new-idee/new-idee.component';

const routes: Routes = [
  {
    path: 'idee',
    component: IdeeTextBoxComponent
  },
  {
    path: 'newidee',
    component: NewIdeeComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ideeRountingModule {}
