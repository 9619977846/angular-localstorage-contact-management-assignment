import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { Component, OnChanges, OnInit, Input, NgModule, NgModuleFactory, Compiler, SimpleChanges, NO_ERRORS_SCHEMA } from '@angular/core';
import { ContactService } from '../../_services/contact-service';
import { TruncatePipe } from '../../_custom_pipes/truncate-text.pipe';
import { MaterialModule } from '../../core/material/material.module';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ ContactService, TruncatePipe],
      imports: [ MaterialModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule,
        StoreModule.forRoot({})]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
