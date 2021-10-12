import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FishnavComponent } from './fishnav/fishnav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SocialComponent } from './social/social.component';
import { AirtableComponent } from './airtable/airtable.component';


@NgModule({
  declarations: [
    AppComponent,
    FishnavComponent,
    MenuComponent,
    OrderComponent,
    HomeComponent,
    SocialComponent,
    AirtableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    PdfViewerModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
