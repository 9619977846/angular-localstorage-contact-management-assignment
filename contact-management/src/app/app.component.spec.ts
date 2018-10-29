import { TestBed, inject, async } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ContactModule } from './contact/contact.module';
import { ContactListModule } from './contact-list/contact-list.module';
import { CommonModule } from '@angular/common';
import { contacts } from './_reducers/contact.reducer';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactService } from './_services/contact-service';
import { TruncatePipe } from './_custom_pipes/truncate-text.pipe';
import 'hammerjs';
import { Response } from '@angular/http';
import { Observable, Subject, Subscribable } from 'rxjs';
import { Store, State } from '@ngrx/store';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { MaterialModule } from './core/material/material.module';
import { Component, OnChanges, OnInit, Input, NgModule, NgModuleFactory, Compiler, SimpleChanges, NO_ERRORS_SCHEMA } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        FormsModule,
        ContactListModule,
        ContactModule,
        MaterialModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({})

      ],
      providers: [
        ContactService, TruncatePipe],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'contact-management'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Contact-Management');
  }));
  it('should render title in a h3 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Welcome to Contact-Management');
  }));
});
