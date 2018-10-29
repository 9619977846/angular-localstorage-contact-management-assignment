import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListComponent } from './contact-list.component';

import { Component, OnChanges, OnInit, Input, NgModule, NgModuleFactory, Compiler, SimpleChanges, NO_ERRORS_SCHEMA } from '@angular/core';
import { ContactService } from '../../_services/contact-service';
import { TruncatePipe } from '../../_custom_pipes/truncate-text.pipe';
import { MaterialModule } from '../../core/material/material.module';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactListComponent, TruncatePipe ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ ContactService, TruncatePipe],
      imports: [ MaterialModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule,
        StoreModule.forRoot({})]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
