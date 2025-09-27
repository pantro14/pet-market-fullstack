import { JsonPipe } from '@angular/common';
import { afterNextRender, Component, inject } from '@angular/core';
import { ProductStore } from '../stores/product.store';

@Component({
  selector: 'app-products',
  imports: [JsonPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  productStore = inject(ProductStore);

  constructor() {
    afterNextRender(() => {
      this.productStore.loadProducts();
    });
  }
}
