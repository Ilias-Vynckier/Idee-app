import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IdeeMaterialDesignModule } from './idee-material-design/idee-material-design.module';
import { IdeeTextBoxComponent } from './idee-material-design/idee-text-box/idee-text-box.component';
import { IdeeTextButtonComponent } from './idee-material-design/idee-text-button/idee-text-button.component';
import { NewIdeeComponent } from './idee-material-design/new-idee/new-idee.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/idee',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppRoutingModule {}
