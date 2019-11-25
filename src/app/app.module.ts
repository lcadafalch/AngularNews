import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeprincipalComponent } from './div/homeprincipal/homeprincipal.component';
import { TopnewsComponent } from './div/topnews/topnews.component';
import { RouterLink, RouterModule } from '@angular/router';
import{HttpClientModule } from '@angular/common/http'


import{ROUTES} from './app.routing';
import { CardNewComponent } from './div/card-new/card-new.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeprincipalComponent,
    TopnewsComponent,
    CardNewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    RouterModule.forRoot(ROUTES ,{useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
