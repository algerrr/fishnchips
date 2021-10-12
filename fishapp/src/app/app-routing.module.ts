import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirtableComponent } from './airtable/airtable.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { SocialComponent } from "./social/social.component";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'social', component: SocialComponent },
  { path: 'airtable', component: AirtableComponent },
  { path: 'order', component: OrderComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
