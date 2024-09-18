import {Component, OnInit} from '@angular/core';
import {ProduitService} from "../produit.service";
import {ClientService} from "../client.service";
import {CommandeService} from "../commande.service";
interface Product {
  id: number;
  productName: string;
  category: string;
  stockQuantity:number;

}
interface Client {
  customerId :number;
  customerName:string;
  email:string;
  Tel:number;
  customerAddress:string;
}
interface OrderItem {
  productName: string;
  quantity: number;
  Description:string;
}
@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.css'
})
export class OrderFormComponent  implements OnInit {
  products: Product[] = [];
  Customers: Client[] = [];
  quantity: number | null = null;
  selectedProduct: Product | null = null;
  selectedCustomer: Client | null = null;
  errorMessage: string | null = null;
  orderList: OrderItem[] = [];
  Desc: string='';

  constructor(private produitService: ProduitService, private customerService: ClientService,private commandeService :CommandeService) {
  }

  ngOnInit(): void {
    this.loadProducts();
    this.loadCustomers();
  }

  loadProducts(): void {
    this.produitService.allProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  loadCustomers() {
    this.customerService.allClients().subscribe((data: Client[]) => {

      this.Customers = data;
    });


  }

  onProductChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const productId = Number(selectElement.value);
    this.selectedProduct = this.products.find(product => product.id === productId) || null;
    this.quantity = this.selectedProduct ? this.selectedProduct.stockQuantity : null;
    this.errorMessage = null;
  }

  onQuantityChange(value: string): void {
    const enteredQuantity = Number(value);
    if (this.selectedProduct && enteredQuantity > this.selectedProduct.stockQuantity) {
      this.errorMessage = `The maximum available quantity is ${this.selectedProduct.stockQuantity}.`;
      this.quantity = this.selectedProduct.stockQuantity;
    } else {
      this.errorMessage = null;
    }
  }

  addToList(): void {
    if (this.selectedProduct && this.quantity) {
      const existingItem = this.orderList.find(item => item.productName === this.selectedProduct?.productName);

      if (existingItem) {
        this.errorMessage = `The product "${this.selectedProduct.productName}" is already in the list.`;
      } else {
        this.orderList.push({ productName: this.selectedProduct.productName, quantity: this.quantity,Description:this.Desc });
        this.selectedProduct = null;
        this.quantity = null;
        this.errorMessage = null;
        this.Desc='';
      }
    } else {
      this.errorMessage = 'Please select a product and quantity.';
    }
  }



}
