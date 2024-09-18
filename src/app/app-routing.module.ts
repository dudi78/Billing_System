import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {ClientsComponent} from "./clients/clients.component";
import {OrdersComponent} from "./orders/orders.component";
import {ClientformComponent} from "./clientform/clientform.component";
import {ProductFormComponent} from "./product-form/product-form.component";
import {OrderFormComponent} from "./order-form/order-form.component";
import {ClientEditDialogComponent} from "./client-edit-dialog/client-edit-dialog.component";
import {NotificationComponent} from "./notification/notification.component";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:"home",component:HomeComponent},
  {path:"products",component:ProductsComponent},
  {path:"clients",component:ClientsComponent},
  {path:"orders",component:OrdersComponent},
  {path: 'add-client', component: ClientformComponent},
  {path:"add-Product",component:ProductFormComponent},
  {path:"Place-Order",component:OrderFormComponent},
  {path:"client-edit-dialog",component:ClientEditDialogComponent},
  {path:"notification",component:NotificationComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
