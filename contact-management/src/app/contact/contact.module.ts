import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact-component/contact.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from '../core/material/material.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    ContactComponent
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
