import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProduitService} from "../produit.service";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  @Input() ProductToUpdate: any;
  @Output() close = new EventEmitter<void>();
  @Output() update = new EventEmitter<void>();
  @Output() load = new EventEmitter<void>();
  @Input() addp: boolean=false;




constructor(private produitservice: ProduitService) {
}

  closeModal() {
    this.close.emit();

  }


  onSubmit() {
    if (this.ProductToUpdate.id) {

      this.produitservice.updateProduit(this.ProductToUpdate).subscribe({
        next: (response) => {
          console.log("Successfully updated", response);
          this.refreshlist();
          this.closeModal();

          alert("Updated successfully");
        },
        error: (error) => console.log("Error updating product", error)
      });
    } else {

      this.produitservice. addProduct(this.ProductToUpdate).subscribe({
        next: (response) => {
          console.log("Successfully added", response);
          this.refreshlist();
          this.closeModal();
          this.loadCategories();
          alert("Added successfully");
        },
        error: (error) => console.log("Error adding product", error)
      });
    }
  }

  refreshlist(){
  this.update.emit();
  }
  loadCategories(){
  this.load.emit();
  }






}

