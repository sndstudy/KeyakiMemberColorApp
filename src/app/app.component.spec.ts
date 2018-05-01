import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { 
  MatExpansionModule,
  MatToolbarModule,
  MatRadioModule 
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MemberlistComponent } from './memberlist/memberlist.component';
import { MemberlistService } from './service/memberlist.service'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MemberlistComponent
      ],
      imports: [
        MatExpansionModule,
        MatToolbarModule,
        MatRadioModule,
        FormsModule, 
        ReactiveFormsModule,
        BrowserAnimationsModule,
        BrowserModule
      ],
      providers: [MemberlistService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
