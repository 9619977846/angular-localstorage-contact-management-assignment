import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../core/material/material.module';
import { TruncatePipe } from '../_custom_pipes/truncate-text.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    MaterialModule
  ],
  exports: [
    ContactListComponent
  ],
  providers: [],
  declarations: [ContactListComponent, TruncatePipe]
})
export class ContactListModule { }
