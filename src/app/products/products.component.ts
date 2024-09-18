import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { ProduitService } from "../produit.service";
interface Product {
  id: number;
  productName: string;
  category: string;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categories: string[] = [];
  selectedCategory: string = '';
  public products: any[] = [];
  isPopupVisible = false;
  add:boolean=false;
  theproduct = {
    category: '',
    productName: '',
    description: '',
    length: 0,
    width: 0,
    height: 0,
    thickness: 0,
    woodType: '',
    price: 0,
    unit: '',
    stockQuantity: 0,
    weight: 0
  };

  constructor(private produitService: ProduitService ) { }

  ngOnInit(): void {
    this.getProducts();
    this.loadCategories();
  }

  getProducts() {
    this.produitService.allProducts().subscribe(
      (data) => {
        this.products = data;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  openPopup() {

    this.isPopupVisible = true;
    this.add=true;

  }

  closeModal(): void {
    this.isPopupVisible = false;
    this.theproduct = {
      category: '',
      productName: '',
      description: '',
      length: 0,
      width: 0,
      height: 0,
      thickness: 0,
      woodType: '',
      price: 0,
      unit: '',
      stockQuantity: 0,
      weight: 0
    };
    this.add=false;
  }



  edit(product: any) {
    this.theproduct=product;
    this.isPopupVisible=true;
  }
  refreshlist(){
    this.getProducts();
  }
  deleteProduct(produit: any): void {
    const pId = produit.id;

    const isConfirmed = window.confirm('Are you sure you want to delete this product?');

    if (isConfirmed) {
      if (pId && !isNaN(pId)) {
        this.produitService.deleteProduct(pId).subscribe(
          (response) => {
            console.log('Product deleted:', response);
            this.refreshlist();
          },
          (error) => {
            console.error('Error deleting Product:', error);
          }
        );
      } else {
        console.error('Invalid Product ID:', pId);
      }
    } else {
      console.log('Product deletion cancelled');
    }
  }

  loadCategories(){
    this.produitService.allProducts().subscribe(
      (products: Product[]) => {

        this.categories = Array.from(new Set(products.map(product => product.category)));
      },
      error => {
        console.error('Error loading products:', error);
      }
    );
  }

}
