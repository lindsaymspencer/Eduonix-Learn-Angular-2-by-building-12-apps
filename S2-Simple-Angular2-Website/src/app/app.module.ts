import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';
import { Routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule, 
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
