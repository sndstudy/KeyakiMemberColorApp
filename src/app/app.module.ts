import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { 
  MatExpansionModule,
  MatToolbarModule 
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
