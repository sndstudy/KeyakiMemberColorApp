import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberlistComponent } from './memberlist.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { 
  MatExpansionModule,
  MatToolbarModule,
  MatRadioModule 
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MemberlistService } from '../service/memberlist.service'

describe('MemberlistComponent', () => {
  let component: MemberlistComponent;
  let fixture: ComponentFixture<MemberlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberlistComponent ],
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
