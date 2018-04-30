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


@NgModule({
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
  exports:[
    MatExpansionModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [MemberlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
