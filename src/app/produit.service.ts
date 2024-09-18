import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private API = 'http://localhost:8090';

  constructor( private http: HttpClient) {
  }

  public allProducts():Observable<any>{
   return  this.http.get(`${this.API}/getProducts`)
  }
  updateProduit(produit: any): Observable<any> {
    return this.http.put(`${this.API}/UpdateProduct`, produit);
  }
  public addProduct(ProductData: any) {
    return this.http.post(this.API + '/addProduct', ProductData);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API}/deleteproduct?id=${id}`);
  }
}
