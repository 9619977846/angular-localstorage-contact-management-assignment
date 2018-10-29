import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { ContactModule } from './contact/contact.module';
import { ContactListModule } from './contact-list/contact-list.module';
import { CommonModule } from '@angular/common';
import { contacts } from './_reducers/contact.reducer';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactService } from './_services/contact-service';
import { TruncatePipe } from './_custom_pipes/truncate-text.pipe';
import 'hammerjs';

import { MaterialModule } from './core/material/material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [
    BrowserAnimationsModule,
    MaterialModule
  ],
  imports: [
    // ...
    ContactModule,
    CommonModule,
    ContactListModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot({
      // place for future reducers
      contacts
    }),
    StoreDevtoolsModule.instrument(),
    BrowserModule
  ],
  providers: [ContactService, TruncatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
