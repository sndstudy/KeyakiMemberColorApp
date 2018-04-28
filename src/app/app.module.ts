import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { MemberlistComponent } from './memberlist/memberlist.component';
import { MemberlistService } from './service/memberlist.service'


@NgModule({
  declarations: [
    AppComponent,
    MemberlistComponent
  ],
  imports: [
    BrowserModule,
    MatExpansionModule,
    NoopAnimationsModule
  ],
  providers: [MemberlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
