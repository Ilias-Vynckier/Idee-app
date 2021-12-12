import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IdeeMaterialDesignModule } from './idee-material-design.module';
import { IdeeTextBoxComponent } from './idee-text-box/idee-text-box.component';
import { IdeeTextButtonComponent } from './idee-text-button/idee-text-button.component';
import { IdeeToolbarComponent } from './idee-toolbar/idee-toolbar.component';


@NgModule({
  declarations: [
    IdeeTextBoxComponent,
    IdeeTextButtonComponent,
    IdeeToolbarComponent
  ],
  imports: [CommonModule],
  exports: [IdeeMaterialDesignModule]
})
export class BookModule {}
