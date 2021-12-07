import { IdeeToolbarComponent } from './idee-toolbar/idee-toolbar.component';
import { IdeeTextBoxComponent } from './idee-text-box/idee-text-box.component';
import { IdeeTextButtonComponent } from './idee-text-button/idee-text-button.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { DataService } from '../data-services/data.service';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    IdeeToolbarComponent,
    IdeeTextBoxComponent,
    IdeeTextButtonComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatGridListModule,
    MatButtonModule,
  ],
  exports: [
    IdeeToolbarComponent,
    IdeeTextBoxComponent,
    IdeeTextButtonComponent,
  ],

})
export class IdeeMaterialDesignModule {}
