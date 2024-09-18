import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BillingPrj';


  constructor( private router: Router) {

  };
  tohome() {
  this.router.navigateByUrl("/home");

  };

  toproducts() {

    this.router.navigateByUrl("/products");

};

toClients() {


  this.router.navigateByUrl("/clients");

};

toOrders() {
    this.router.navigateByUrl("/orders");
  };


}
