import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MatIconModule } from '@angular/material/icon';
import { ServersListComponent } from './servers-list/servers-list.component';
import { ServersTitleComponent } from './servers-list/servers-title/servers-title.component';
import { ServerStatusComponent } from './servers-list/server-status/server-status.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ServersListComponent,
    ServersTitleComponent,
    ServerStatusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
