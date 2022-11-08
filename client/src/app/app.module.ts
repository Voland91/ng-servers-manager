import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServersListComponent } from './servers-list/servers-list.component';
import { ServersTitleComponent } from './servers-list/servers-title/servers-title.component';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { ServerMenuComponent } from './servers-list/server-item/server-menu/server-menu.component';
import { ServerItemComponent } from './servers-list/server-item/server-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ServersListComponent,
    ServersTitleComponent,
    ServerMenuComponent,
    ServerItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
