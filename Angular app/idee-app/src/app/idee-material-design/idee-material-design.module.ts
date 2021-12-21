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
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { NewIdeeComponent } from './new-idee/new-idee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ideeRountingModule } from './idee-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { IdeeCardComponent } from './idee-card/idee-card.component';

@NgModule({
  declarations: [
    IdeeToolbarComponent,
    IdeeTextBoxComponent,
    IdeeTextButtonComponent,
    NewIdeeComponent,
    IdeeCardComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatToolbarModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatGridListModule,
    MatNativeDateModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ideeRountingModule,
  ],
  exports: [
    IdeeToolbarComponent,
    IdeeTextBoxComponent,
    IdeeTextButtonComponent,
    NewIdeeComponent,
  ],
})
export class IdeeMaterialDesignModule {}
