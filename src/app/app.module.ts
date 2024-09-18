import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';
import { OrdersComponent } from './orders/orders.component';
import {NgOptimizedImage} from "@angular/common";
import { ClientformComponent } from './clientform/clientform.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClientEditDialogComponent } from './client-edit-dialog/client-edit-dialog.component';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ClientsComponent,
    OrdersComponent,
    ClientformComponent,
    ProductFormComponent,
    OrderFormComponent,
    ClientEditDialogComponent,
    NotificationComponent,






  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgOptimizedImage,
        HttpClientModule


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
