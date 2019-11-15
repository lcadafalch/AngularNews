import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeprincipalComponent } from './div/homeprincipal/homeprincipal.component';
import { TopnewsComponent } from './div/topnews/topnews.component';
import { RouterLink, RouterModule } from '@angular/router';

import{ROUTES} from './app.routing'

@NgModule({
  declarations: [
    AppComponent,
    HomeprincipalComponent,
    TopnewsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES ,{useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
